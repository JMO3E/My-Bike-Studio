import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../core/services/bike.service';
import { Router, RouterModule } from '@angular/router'
import { tap } from 'rxjs';
import { Bike } from '../../shared/interface/bikeInterface';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-add-bikes',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-bikes.component.html',
  styleUrl: './add-bikes.component.scss'
})
export class AddBikesComponent implements OnInit{

  bike!: Bike;

  bikeForm: FormGroup = new FormGroup({});

  constructor(private bikeService: BikeService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.bikeForm = this.formBuilder.group({
      brand: [(this.bike.brand) ? this.bike.brand : null, [Validators.required]],
      description: [(this.bike.description) ? this.bike.description : null, Validators.required],
      imagelink: [(this.bike.imagelink) ? this.bike.imagelink : null, Validators.required],
    });

  }

  addBike(form: FormGroup) {
    if(form.valid) {
      this.bike = form.value;

      this.bikeService.addBike(this.bike)
        .pipe(
          tap((data: Bike) => {
            this.bike = data;
            setTimeout(() => {
              this.router.navigate(['/bikes'])
            }
            , 2000);
          }),
          untilDestroyed(this)
        ).subscribe();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../core/services/bike.service';
import { ActivatedRoute, Params, RouterModule, Router } from '@angular/router'
import { tap } from 'rxjs';
import { Bike } from '../../shared/interface/bikeInterface';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-edit-bikes',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-bikes.component.html',
  styleUrl: './edit-bikes.component.scss'
})
export class EditBikesComponent implements OnInit{

  bike!: Bike;
  bikeId!: number;

  updatedBike!: Bike;
  bikeForm: FormGroup = new FormGroup({});

  constructor(private bikeService: BikeService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.route.params
    .pipe(
      tap((data: Params) => {
        this.bikeId = +data['id'];
      }),
      untilDestroyed(this)
    ).subscribe();

    this.bikeService.getBikeById(this.bikeId)
    .pipe(
      tap((data: Bike) => {
        this.bike = data;
      }),
      untilDestroyed(this)
    ).subscribe();

    this.bikeForm = this.formBuilder.group({
      brand: [(this.bike.brand) ? this.bike.brand : null, [Validators.required]],
      description: [(this.bike.description) ? this.bike.description : null, Validators.required],
      imagelink: [(this.bike.imagelink) ? this.bike.imagelink : null, Validators.required],
    });

  }

  updateBike(form: FormGroup) {
    if(form.valid) {
      this.updatedBike = form.value;

      if(!this.bikeForm.value.deleteBike) {
        this.bikeService.updateBike(this.updatedBike, this.bikeId)
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
      else if(this.bikeForm.value.deleteBike) {
        console.log(this.bikeForm.value.deleteBike);

        this.bikeService.deleteBike(this.bikeId)
        .pipe(
          tap(() => {
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

  setCheckbox() {
    if(!this.bikeForm.value.deleteBike) {
      this.bikeForm.value.deleteBike = true;
    }
    else {
      this.bikeForm.value.deleteBike = false;
    }
  }

}

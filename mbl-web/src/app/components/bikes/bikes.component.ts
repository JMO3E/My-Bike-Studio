import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Bike } from '../../shared/interface/bikeInterface';
import { BikeService } from '../../core/services/bike.service';
import { tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-bikes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.scss'
})
export class BikesComponent implements OnInit{

  bikes: Bike[] | undefined;

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {

    this.bikeService.getBikes()
    .pipe(
      tap((data: Bike[]) => {
        console.log(data);
        this.bikes = data;
      }),
      untilDestroyed(this)
    ).subscribe();

  }
}

import { Routes } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditBikesComponent } from './components/edit-bikes/edit-bikes.component';
import { AddBikesComponent } from './components/add-bikes/add-bikes.component';
import { BikesComponent } from './components/bikes/bikes.component';

export const routes: Routes = [

  {
    path: 'bikes',
    component: BikesComponent
  },
  {
    path: 'add-bike',
    component: AddBikesComponent
  },
  {
    path: 'edit-bike',
    component: EditBikesComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: '',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

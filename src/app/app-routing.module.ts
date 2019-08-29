import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { FitureCariComponent } from './fiture-cari/fiture-cari.component';
import { FiturePromoComponent } from './fiture-promo/fiture-promo.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponentComponent
  },
  {
    path: 'detail',
    component: HomeDetailComponent
  },
  {
    path : "fitur/cari",
    component : FitureCariComponent
  },
  {
    path : "fitur/promo",
    component : FiturePromoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

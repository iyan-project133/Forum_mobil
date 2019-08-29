import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { FitureComponent } from './fiture/fiture.component';
import { FitureCariComponent } from './fiture-cari/fiture-cari.component';
import { FiturePromoComponent } from './fiture-promo/fiture-promo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HomeComponent,
    HomeDetailComponent,
    FitureComponent,
    FitureCariComponent,
    FiturePromoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

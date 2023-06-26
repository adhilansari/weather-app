import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import {HTTP_INTERCEPTORS, HttpClientModule,HttpInterceptor} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [DatePipe,{
    provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

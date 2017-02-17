import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductModule } from './products/product.module';
import { CategoryModule } from "./category/category.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'homepage', component: WelcomeComponent },
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: '**', redirectTo: 'homepage', pathMatch: 'full' }
    ]),
    ProductModule,
    CategoryModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

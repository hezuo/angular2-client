import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { CategoryModule } from "./category/category.module";
import { ErrorPagesModule } from "./error-pages/error-pages.module";
import { LoginModule } from "./login/login.module";
import { AuthGuard } from "./guards/auth.guard";
import {UserModule} from "./user/user.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'homepage', component: WelcomeComponent, canActivate: [AuthGuard]},
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ]),
    CategoryModule,
    UserModule,
    LoginModule,
    ErrorPagesModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

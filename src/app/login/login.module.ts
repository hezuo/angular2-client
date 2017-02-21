/**
 * Created by rdiaz on 21/02/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {LoginComponent} from "./login.component";
import {AuthGuard} from "../guards/auth.guard";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login', component: LoginComponent
      }
    ])
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class LoginModule {}

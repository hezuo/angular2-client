import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserCreateComponent} from "./user-create.component";
import {UserRoutes} from './user.routes';
import {UserService} from "./user.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [
    UserCreateComponent,
  ],
  providers: [
    UserService
  ]
})

export class UserModule {

}

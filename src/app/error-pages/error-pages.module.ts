import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {NotFoundComponent} from "./not-found.component";


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: '404', component: NotFoundComponent},
    ])
  ],
  declarations: [
    NotFoundComponent
  ]
})

export class ErrorPagesModule {

}

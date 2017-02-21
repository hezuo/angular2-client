import {NgModule} from "@angular/core";
import {CategoryListComponent} from "./category-list.component";
import {RouterModule} from "@angular/router";
import {CategoryService} from "./category.service";
import {BrowserModule} from "@angular/platform-browser";
import {CategoryEditComponent} from "./category-edit.component";
import {FormsModule} from "@angular/forms";
import {CategoryNewComponent} from "./category-new.component";
import {CategoryDeleteComponent} from "./category-delete.component";
import {categoryRoutes} from "./category.routes";
import {AuthGuard} from "../guards/auth.guard";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(categoryRoutes)
  ],
  declarations: [
    CategoryListComponent,
    CategoryEditComponent,
    CategoryNewComponent,
    CategoryDeleteComponent
  ],
  providers: [
    CategoryService,
    AuthGuard
  ]
})

export class CategoryModule {

}

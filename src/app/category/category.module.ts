import {NgModule} from "@angular/core";
import {CategoryListComponent} from "./category-list.component";
import {RouterModule} from "@angular/router";
import {CategoryService} from "./category.service";
import {BrowserModule} from "@angular/platform-browser";
import {CategoryEditComponent} from "./category-edit.component";
import {FormsModule} from "@angular/forms";
import {CategoryNewComponent} from "./category-new.component";
import {CategoryDeleteComponent} from "./category-delete.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'category', component: CategoryListComponent},
      {path: 'category/:idCategory', component: CategoryEditComponent},
      {path: 'category-new', component: CategoryNewComponent}
    ])
  ],
  declarations: [
    CategoryListComponent,
    CategoryEditComponent,
    CategoryNewComponent,
    CategoryDeleteComponent
  ],
  providers: [
    CategoryService
  ]
})

export class CategoryModule {

}

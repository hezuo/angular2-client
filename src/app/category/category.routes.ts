/**
 * Created by rdiaz on 21/02/2017.
 */
import {Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list.component";
import {CategoryEditComponent} from "./category-edit.component";
import {CategoryNewComponent} from "./category-new.component";
import {AuthGuard} from "../guards/auth.guard";

export const categoryRoutes: Routes = [
  {
    path: 'category', component: CategoryListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'category/:idCategory', component: CategoryEditComponent, canActivate: [AuthGuard]
  },
  {
    path: 'category-new', component: CategoryNewComponent, canActivate: [AuthGuard]
  }
];

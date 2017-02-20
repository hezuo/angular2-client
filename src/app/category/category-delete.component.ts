import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CategoryService} from "./category.service";
import {ICategory} from "./category";

declare let jQuery: any;

@Component({
  selector: 'category-delete',
  templateUrl: 'app/category/category-delete.component.html'
})

export class CategoryDeleteComponent {

  @Input('category') category: Object = {};
  @Output() eventDelete: EventEmitter<any> = new EventEmitter<any>();
  errorMessage: string;

  constructor(private _categoryService: CategoryService){
  }

  deleteCategory(category: ICategory): void {

    this._categoryService.deleteCategory(category.id).subscribe(
      response => {
        this.eventDelete.emit(response);
        console.log(response);
      },
      error => this.errorMessage = <any>error
    );



    jQuery("#modalDeleteCategory").modal("hide");

  }

}

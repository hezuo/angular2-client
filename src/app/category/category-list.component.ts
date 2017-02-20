import {Component, OnInit} from "@angular/core";
import {ICategory} from "./category";
import {CategoryService} from "./category.service";

@Component({
    templateUrl: 'app/category/category-list.component.html'
})

export class CategoryListComponent implements OnInit{

    pageTitle:string = "Category List";
    categories: ICategory[];
    errorMessage: string;
    selectedCategory: Object = {};

    constructor(private _categoryService: CategoryService){
    }

    ngOnInit() : void {
      this.loadListCategory();
    }

    deleteConfirmCategory(response: any): void {
      console.log(response);
      this.loadListCategory();
    }

    loadListCategory() {
        this._categoryService.getCategories()
          .subscribe(categories => this.categories = categories,
            error => this.errorMessage = <any>error);
    }

}

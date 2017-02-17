
import {OnInit, Component, OnDestroy} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {CategoryService} from "./category.service";
import {ICategory} from "./category";
import {IMessageHttp} from "../util/messageHttp";

@Component({
    templateUrl: 'app/category/category-new.component.html'
})

export class CategoryNewComponent implements OnInit {
    pageTitle: string = 'Category new';
    category: ICategory;
    errorMessage: string;


    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _categoryService: CategoryService) {
    }

    ngOnInit(): void {

    }

    newSubmit(formNew: NgForm){
        this.errorMessage = '';
        this._categoryService.createCategory(formNew.value.category_name, formNew.value.category_area).subscribe(
            response => {
                this.validateResponse(response);
                console.log(response);
            },
            error => this.errorMessage = <any>error
        );
        console.log(formNew.value);
    }

    validateResponse(response: any){
        let responseObj: IMessageHttp = response;
        if (responseObj.code == 200) {
            this._router.navigate(['/category']);
        } else {
            this.errorMessage = responseObj.message;
        }
    }

    onBack(): void {
        this._router.navigate(['/category']);
    }

}
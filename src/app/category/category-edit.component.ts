
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ICategory} from "./category";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {CategoryService} from "./category.service";
import {NgForm} from "@angular/forms";
import {IMessageHttp} from "../util/messageHttp";

@Component({
    templateUrl: 'app/category/category-edit.component.html'
})

export class CategoryEditComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Category edit';
    category: ICategory;
    errorMessage: string;
    message: string;
    private sub: Subscription;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _categoryService: CategoryService) {
    }

    ngOnInit() : void{
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['idCategory'];
                this.getCategory(id);
            });
    }

    getCategory(id: number) : void {
        this._categoryService.getCategory(id).subscribe(
            category => {
                this.category = category;
            },
            error => this.errorMessage = <any>error
        );
    }

    editSubmit(formEdit: NgForm) {
        this.unSetMessages();
        this._categoryService.updateCategory(this.category.id,formEdit.value.category_name, formEdit.value.category_area).subscribe(
            response => {
                this.validateResponse(response);
            }
            ,
            error => this.errorMessage = <any>error
        );

        this._router.navigate(['/category/' + this.category.id ]);
    }

    validateResponse(response: any){
        let responseObj: IMessageHttp = response;
        if (responseObj.code == 200) {
            this.message = responseObj.message;
        } else {
            this.errorMessage = responseObj.message;
        }
    }

    unSetMessages() {
        this.errorMessage = "";
        this.message = "";
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBack(): void {
        this._router.navigate(['/category']);
    }


}
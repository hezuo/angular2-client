System.register(["@angular/core", "@angular/router", "./category.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, category_service_1, CategoryEditComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }
        ],
        execute: function () {
            CategoryEditComponent = (function () {
                function CategoryEditComponent(_router, _route, _categoryService) {
                    this._router = _router;
                    this._route = _route;
                    this._categoryService = _categoryService;
                    this.pageTitle = 'Category edit';
                }
                CategoryEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this._route.params.subscribe(function (params) {
                        var id = +params['idCategory'];
                        _this.getCategory(id);
                    });
                };
                CategoryEditComponent.prototype.getCategory = function (id) {
                    var _this = this;
                    this._categoryService.getCategory(id).subscribe(function (category) { return _this.category = category; }, function (error) { return _this.errorMessage = error; });
                };
                CategoryEditComponent.prototype.editSubmit = function (formEdit) {
                    var _this = this;
                    this._categoryService.updateCategory(this.category.id, formEdit.value.category_name, formEdit.value.category_area).subscribe(function (response) { return console.log(response); }, function (error) { return _this.errorMessage = error; });
                    this._router.navigate(['/category/' + this.category.id]);
                };
                CategoryEditComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                CategoryEditComponent.prototype.onBack = function () {
                    this._router.navigate(['/category']);
                };
                return CategoryEditComponent;
            }());
            CategoryEditComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/category/category-edit.component.html'
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    router_1.ActivatedRoute,
                    category_service_1.CategoryService])
            ], CategoryEditComponent);
            exports_1("CategoryEditComponent", CategoryEditComponent);
        }
    };
});
//# sourceMappingURL=category-edit.component.js.map
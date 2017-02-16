System.register(["@angular/core", "./category.service"], function (exports_1, context_1) {
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
    var core_1, category_service_1, CategoryListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }
        ],
        execute: function () {
            CategoryListComponent = (function () {
                function CategoryListComponent(_categoryService) {
                    this._categoryService = _categoryService;
                    this.pageTitle = "Category List";
                }
                CategoryListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._categoryService.getCategories()
                        .subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; });
                };
                return CategoryListComponent;
            }());
            CategoryListComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/category/category-list.component.html'
                }),
                __metadata("design:paramtypes", [category_service_1.CategoryService])
            ], CategoryListComponent);
            exports_1("CategoryListComponent", CategoryListComponent);
        }
    };
});
//# sourceMappingURL=category-list.component.js.map
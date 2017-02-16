System.register(["@angular/core", "./category-list.component", "@angular/router", "./category.service", "@angular/platform-browser", "./category-edit.component", "@angular/forms"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, category_list_component_1, router_1, category_service_1, platform_browser_1, category_edit_component_1, forms_1, CategoryModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_list_component_1_1) {
                category_list_component_1 = category_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (category_edit_component_1_1) {
                category_edit_component_1 = category_edit_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            CategoryModule = (function () {
                function CategoryModule() {
                }
                return CategoryModule;
            }());
            CategoryModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        router_1.RouterModule.forChild([
                            { path: 'category', component: category_list_component_1.CategoryListComponent },
                            { path: 'category/:idCategory', component: category_edit_component_1.CategoryEditComponent }
                        ])
                    ],
                    declarations: [
                        category_list_component_1.CategoryListComponent,
                        category_edit_component_1.CategoryEditComponent
                    ],
                    providers: [
                        category_service_1.CategoryService
                    ]
                })
            ], CategoryModule);
            exports_1("CategoryModule", CategoryModule);
        }
    };
});
//# sourceMappingURL=category.module.js.map
System.register(["@angular/core", "@angular/router", "./product-list.component", "./product-detail.component", "./product-guard.service", "./product-filter.pipe", "./product.service", "../shared/shared.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, product_list_component_1, product_detail_component_1, product_guard_service_1, product_filter_pipe_1, product_service_1, shared_module_1, ProductModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            },
            function (product_guard_service_1_1) {
                product_guard_service_1 = product_guard_service_1_1;
            },
            function (product_filter_pipe_1_1) {
                product_filter_pipe_1 = product_filter_pipe_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            }
        ],
        execute: function () {
            ProductModule = (function () {
                function ProductModule() {
                }
                return ProductModule;
            }());
            ProductModule = __decorate([
                core_1.NgModule({
                    imports: [
                        shared_module_1.SharedModule,
                        router_1.RouterModule.forChild([
                            { path: 'products', component: product_list_component_1.ProductListComponent },
                            { path: 'product/:id',
                                canActivate: [product_guard_service_1.ProductDetailGuard],
                                component: product_detail_component_1.ProductDetailComponent
                            }
                        ])
                    ],
                    declarations: [
                        product_list_component_1.ProductListComponent,
                        product_detail_component_1.ProductDetailComponent,
                        product_filter_pipe_1.ProductFilterPipe
                    ],
                    providers: [
                        product_service_1.ProductService,
                        product_guard_service_1.ProductDetailGuard
                    ]
                })
            ], ProductModule);
            exports_1("ProductModule", ProductModule);
        }
    };
});
//# sourceMappingURL=product.module.js.map
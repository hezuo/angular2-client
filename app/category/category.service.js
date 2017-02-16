System.register(["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/do", "rxjs/add/operator/catch", "rxjs/add/operator/map", "rxjs/add/observable/throw"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, CategoryService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (_4) {
            }
        ],
        execute: function () {
            CategoryService = (function () {
                function CategoryService(_http) {
                    this._http = _http;
                    this._categoryEndpoint = 'http://localhost:9090/api/category';
                }
                CategoryService.prototype.getCategories = function () {
                    return this._http.get(this._categoryEndpoint)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("Response correct"); })
                        .catch(this.handleError);
                };
                CategoryService.prototype.getCategory = function (id) {
                    return this._http.get(this._categoryEndpoint + '/' + id)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("Response correct: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CategoryService.prototype.updateCategory = function (id, name, area) {
                    return this._http.put(this._categoryEndpoint + '/' + id, { name: name, area: area })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("Response correct: " + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CategoryService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                return CategoryService;
            }());
            CategoryService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], CategoryService);
            exports_1("CategoryService", CategoryService);
        }
    };
});
//# sourceMappingURL=category.service.js.map
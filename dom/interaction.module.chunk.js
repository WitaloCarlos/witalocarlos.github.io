webpackJsonp(["interaction.module"],{

/***/ "./src/app/model/image.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModel; });
var ImageModel = /** @class */ (function () {
    function ImageModel() {
    }
    return ImageModel;
}());



/***/ }),

/***/ "./src/app/model/parser/image.parser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_image_model__ = __webpack_require__("./src/app/model/image.model.ts");

var ImageParser = /** @class */ (function () {
    function ImageParser() {
    }
    ImageParser.parseToFormData = function (formData) {
        return formData;
    };
    ImageParser.parse = function (json) {
        var obj = new __WEBPACK_IMPORTED_MODULE_0__app_model_image_model__["a" /* ImageModel */]();
        if (json) {
            obj.id = json.id ? json.id : '';
            obj.title = json.title ? json.title : '';
            obj.path = json.path ? json.path.replace('\\', '/').replace('content/', '') : '';
            obj.fileType = json.file_type ? json.file_type : '';
            obj.projectId = json.id_project ? json.id_project : '';
            obj.createdAt = json.createdAt || '';
            obj.updatedAt = json.updatedAt || '';
        }
        else {
            throw new Error('Image - Não foi possível realizar a conversão.');
        }
        return obj;
    };
    ImageParser.parseToJson = function (object) {
        var json = {};
        if (json) {
            json['id'] = object.id;
            json['createdAt'] = object.createdAt;
            json['updatedAt'] = object.updatedAt;
        }
        else {
            throw new Error('PhotoBoard - Não foi possível realizar a conversão JSON.');
        }
        return json;
    };
    return ImageParser;
}());



/***/ }),

/***/ "./src/app/model/parser/photo-board.parser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoBoardParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_photo_board_model__ = __webpack_require__("./src/app/model/photo-board.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_model_parser_image_parser__ = __webpack_require__("./src/app/model/parser/image.parser.ts");


var PhotoBoardParser = /** @class */ (function () {
    function PhotoBoardParser() {
    }
    PhotoBoardParser.parse = function (json) {
        var obj = new __WEBPACK_IMPORTED_MODULE_0__app_model_photo_board_model__["a" /* PhotoBoardModel */]();
        if (json) {
            obj.id = json.id ? json.id : '';
            obj.title = json.title ? json.title : '';
            obj.description = json.description ? json.description : '';
            obj.createdAt = json.createdAt || '';
            obj.updatedAt = json.updatedAt || '';
            obj.images = [];
            if (json.images) {
                json.images.forEach(function (image) {
                    obj.images.push(__WEBPACK_IMPORTED_MODULE_1__app_model_parser_image_parser__["a" /* ImageParser */].parse(image));
                });
            }
        }
        else {
            throw new Error('PhotoBoard - Não foi possível realizar a conversão.');
        }
        return obj;
    };
    PhotoBoardParser.parseToJson = function (object) {
        var json = {};
        if (json) {
            json['id'] = object.id;
            json['description'] = object.description;
            json['createdAt'] = object.createdAt;
            json['updatedAt'] = object.updatedAt;
        }
        else {
            throw new Error('PhotoBoard - Não foi possível realizar a conversão JSON.');
        }
        return json;
    };
    return PhotoBoardParser;
}());



/***/ }),

/***/ "./src/app/model/photo-board.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoBoardModel; });
var PhotoBoardModel = /** @class */ (function () {
    function PhotoBoardModel() {
    }
    return PhotoBoardModel;
}());



/***/ }),

/***/ "./src/app/project/interaction/interaction.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: 100%;\r\n}\r\n\r\n.actions {\r\n    position: absolute;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/project/interaction/interaction.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dom-flex-container [leftSpace]=\"15\" [rightSpace]=\"15\" [centerSpace]=\"70\" *ngIf=\"PhotoBoardA; else loadView\">\n  <div class=\"container\" fxLayout=\"column\" fxFlex=\"1\" fxLayoutAlign=\"center start\">\n    <div fxLayout=\"row\">\n      <h1 class=\"mat-h1\">2. Interação</h1>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-tab-group>\n        <mat-tab label=\"Quadro de Imagens I\">\n          <ng-template mat-tab-label>\n            <mat-icon>looks_one</mat-icon>\n          </ng-template>\n          <app-photo-grid [imagesList]=\"quadroI\" [boardId]=\"PhotoBoardA.id\" (imageRemoved)=\"deleteImage($event)\" (imageCreated)=\"createImage($event)\"\n            (imageUpdated)=\"updateImageTitle($event)\"></app-photo-grid>\n        </mat-tab>\n        <mat-tab label=\"Quadro de Imagens II\">\n          <ng-template mat-tab-label>\n            <mat-icon>looks_two</mat-icon>\n          </ng-template>\n          <app-photo-grid [imagesList]=\"quadroII\" [boardId]=\"PhotoBoardA.id\" (imageRemoved)=\"deleteImage($event)\" (imageCreated)=\"createImage($event)\"\n            (imageUpdated)=\"updateImageTitle($event)\"></app-photo-grid>\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n  </div>\n</app-dom-flex-container>\n<ng-template #loadView></ng-template>"

/***/ }),

/***/ "./src/app/project/interaction/interaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_util_dom_snack_bar_dom_snack_bar_service__ = __webpack_require__("./src/app/util/dom-snack-bar/dom-snack-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_project_interaction_interaction_service__ = __webpack_require__("./src/app/project/interaction/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_parser_image_parser__ = __webpack_require__("./src/app/model/parser/image.parser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_model_parser_photo_board_parser__ = __webpack_require__("./src/app/model/parser/photo-board.parser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InteractionComponent = /** @class */ (function () {
    function InteractionComponent(snackBarService, interactionService) {
        this.snackBarService = snackBarService;
        this.interactionService = interactionService;
        this.quadroI = new Array(12);
        this.quadroII = new Array(12);
    }
    InteractionComponent.prototype.ngOnInit = function () { };
    InteractionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.interactionService
            .getPhotoBoardByProject('a8246dd4-a79a-4d37-8b41-7c1342167e89')
            .subscribe(function (boards) {
            if (boards && boards.length === 2) {
                _this.PhotoBoardA = __WEBPACK_IMPORTED_MODULE_4__app_model_parser_photo_board_parser__["a" /* PhotoBoardParser */].parse(boards[0]);
                _this.PhotoBoardB = __WEBPACK_IMPORTED_MODULE_4__app_model_parser_photo_board_parser__["a" /* PhotoBoardParser */].parse(boards[1]);
                var index_1 = 0;
                _this.PhotoBoardA.images.forEach(function (image) {
                    _this.quadroI[index_1] = __WEBPACK_IMPORTED_MODULE_3__app_model_parser_image_parser__["a" /* ImageParser */].parse(image);
                    index_1++;
                });
                index_1 = 0;
                _this.PhotoBoardB.images.forEach(function (image) {
                    _this.quadroII[index_1] = __WEBPACK_IMPORTED_MODULE_3__app_model_parser_image_parser__["a" /* ImageParser */].parse(image);
                    index_1++;
                });
            }
        });
    };
    InteractionComponent.prototype.createImage = function (event) {
        this.interactionService.addImageToPhotoBoard(event.boardId, event.image);
    };
    InteractionComponent.prototype.updateImageTitle = function (event) {
        this.interactionService.updateImageTitle(event);
    };
    InteractionComponent.prototype.deleteImage = function (event) {
        var _this = this;
        this.interactionService.deleteImage(event).subscribe(function (success) {
            _this.snackBarService.snackBarSuccess('Imagem Removida!');
        }, function (error) {
            _this.snackBarService.snackBarError('Erro ao remover Imagem. Tente novamente.');
        });
    };
    InteractionComponent.prototype.savePhotoBoard = function () {
        this.snackBarService.snackBarSuccess('Quadro de Imagens Salvo!');
    };
    InteractionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-interaction',
            template: __webpack_require__("./src/app/project/interaction/interaction.component.html"),
            styles: [__webpack_require__("./src/app/project/interaction/interaction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_util_dom_snack_bar_dom_snack_bar_service__["a" /* DomSnackBarService */],
            __WEBPACK_IMPORTED_MODULE_2__app_project_interaction_interaction_service__["a" /* InteractionService */]])
    ], InteractionComponent);
    return InteractionComponent;
}());



/***/ }),

/***/ "./src/app/project/interaction/interaction.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionModule", function() { return InteractionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interaction_component__ = __webpack_require__("./src/app/project/interaction/interaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interaction_routing__ = __webpack_require__("./src/app/project/interaction/interaction.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__photo_grid_photo_grid_module__ = __webpack_require__("./src/app/project/interaction/photo-grid/photo-grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_util_dom_flex_container_dom_flex_container_module__ = __webpack_require__("./src/app/util/dom-flex-container/dom-flex-container.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_util_dom_snack_bar_dom_snack_bar_module__ = __webpack_require__("./src/app/util/dom-snack-bar/dom-snack-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_util_dom_api_dom_api_module__ = __webpack_require__("./src/app/util/dom-api/dom-api.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_project_interaction_interaction_service__ = __webpack_require__("./src/app/project/interaction/interaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var InteractionModule = /** @class */ (function () {
    function InteractionModule() {
    }
    InteractionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_util_dom_flex_container_dom_flex_container_module__["a" /* DomFlexContainerModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_util_dom_snack_bar_dom_snack_bar_module__["a" /* DomSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_util_dom_api_dom_api_module__["a" /* DomApiModule */],
                __WEBPACK_IMPORTED_MODULE_3__interaction_routing__["a" /* interactionRouting */],
                __WEBPACK_IMPORTED_MODULE_4__photo_grid_photo_grid_module__["a" /* PhotoGridModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__interaction_component__["a" /* InteractionComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__app_project_interaction_interaction_service__["a" /* InteractionService */]]
        })
    ], InteractionModule);
    return InteractionModule;
}());



/***/ }),

/***/ "./src/app/project/interaction/interaction.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interactionRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interaction_component__ = __webpack_require__("./src/app/project/interaction/interaction.component.ts");


var interactionRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__interaction_component__["a" /* InteractionComponent */] }
];
var interactionRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(interactionRoutes);


/***/ }),

/***/ "./src/app/project/interaction/interaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_util_dom_api_dom_api_service__ = __webpack_require__("./src/app/util/dom-api/dom-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__ = __webpack_require__("./src/app/util/read-only-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InteractionService = /** @class */ (function () {
    function InteractionService(domApi) {
        this.domApi = domApi;
    }
    InteractionService.prototype.getPhotoBoardByProject = function (projectId) {
        return this.domApi.get(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.PHOTOBOARD + "/project/" + projectId);
    };
    InteractionService.prototype.addImageToPhotoBoard = function (photoBoardId, imageData) {
        return this.domApi.postMultiPart(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.PHOTOBOARD + "/add-image-to/" + photoBoardId, imageData);
    };
    InteractionService.prototype.updateImageTitle = function (image) {
        var body = { title: image.title };
        return this.domApi.patch(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.IMAGE + "/" + image.id, body);
    };
    InteractionService.prototype.deleteImage = function (image) {
        return this.domApi.delete(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.IMAGE + "/" + image.id);
    };
    InteractionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_util_dom_api_dom_api_service__["a" /* DomApiService */]])
    ], InteractionService);
    return InteractionService;
}());



/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-grid.component.css":
/***/ (function(module, exports) {

module.exports = "div .ng-star-inserted {\r\n    visibility: collapse;\r\n  --webkit-transition: none;\r\n  -webkit-transition: none;\r\n  transition: none;\r\n} \r\n\r\n.photo-grid {\r\n    min-height: 125vw;\r\n}\r\n"

/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" gutterSize=\"5px\" rowHeight=\"fit\" class=\"photo-grid\" *ngIf=\"imagesList\">\r\n    <mat-grid-tile *ngFor=\"let image of imagesList\">\r\n        <div fxLayout=\"column\" style=\"height: 100%;\" fxLayoutAlign=\"center center\">\r\n            <app-photo-selector [imageModel]=\"image\" (createImage)=\"anySelectorCreated($event)\" (removeImage)=\"anySelectorRemoved($event)\"\r\n                (updateImage)=\"anySelectorUpdated($event)\">\r\n            </app-photo-selector>\r\n        </div>\r\n    </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoGridComponent = /** @class */ (function () {
    function PhotoGridComponent() {
        this.imageRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.imageCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.imageUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PhotoGridComponent.prototype.ngOnInit = function () { };
    PhotoGridComponent.prototype.anySelectorRemoved = function (event) {
        this.imageRemoved.emit(event);
    };
    PhotoGridComponent.prototype.anySelectorUpdated = function (event) {
        this.imageUpdated.emit(event);
    };
    PhotoGridComponent.prototype.anySelectorCreated = function (event) {
        this.imageCreated.emit({ boardId: this.boardId, image: event });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PhotoGridComponent.prototype, "imagesList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PhotoGridComponent.prototype, "boardId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PhotoGridComponent.prototype, "imageRemoved", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PhotoGridComponent.prototype, "imageCreated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PhotoGridComponent.prototype, "imageUpdated", void 0);
    PhotoGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-photo-grid',
            template: __webpack_require__("./src/app/project/interaction/photo-grid/photo-grid.component.html"),
            styles: [__webpack_require__("./src/app/project/interaction/photo-grid/photo-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoGridComponent);
    return PhotoGridComponent;
}());



/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-grid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoGridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo_grid_component__ = __webpack_require__("./src/app/project/interaction/photo-grid/photo-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_project_interaction_photo_grid_photo_selector_photo_selector_module__ = __webpack_require__("./src/app/project/interaction/photo-grid/photo-selector/photo-selector.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PhotoGridModule = /** @class */ (function () {
    function PhotoGridModule() {
    }
    PhotoGridModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_project_interaction_photo_grid_photo_selector_photo_selector_module__["a" /* PhotoSelectorModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__photo_grid_component__["a" /* PhotoGridComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__photo_grid_component__["a" /* PhotoGridComponent */]]
        })
    ], PhotoGridModule);
    return PhotoGridModule;
}());



/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-selector/photo-selector.component.css":
/***/ (function(module, exports) {

module.exports = ".selector-container {\r\n    width: 300px;\r\n    height: 100%;\r\n}\r\n\r\n.selector-container .ng-enter,\r\n.selector-container .ng-leave {\r\n  --webkit-transition: none;\r\n  -webkit-transition: none;\r\n  transition: none;\r\n}\r\n\r\n.btn-edit-name {\r\n    font-size: 1.3em;\r\n}\r\n\r\n.btn-confirm-name {\r\n    font-size: 1.4em;\r\n}\r\n\r\n.uploaded-image {\r\n    overflow: hidden;\r\n    height: 250px;\r\n    width: 300px;\r\n}\r\n\r\n.upload-container {\r\n    background-color: #efefef;\r\n    max-width: 250px;\r\n    height: 350px;\r\n    cursor: pointer;\r\n}\r\n\r\n.upload-icon {\r\n   color: dimgray;\r\n   font-size: 2.5em;\r\n}\r\n\r\n.input-upload {\r\n    visibility: collapse\r\n}"

/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-selector/photo-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selector-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <div *ngIf=\"imageSource; else uploadContainer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"!editingTitle; else editPhotoTitle\">\r\n                        {{imageModel.title}}\r\n                        <button mat-icon-button color=\"warn\" matTooltip=\"Editar Nome\" matTooltipPosition=\"right\" (click)=\"startEditPhotoTitle()\" aria-label=\"editar nome\">\r\n                            <mat-icon class=\"btn-edit-name\">edit</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                    <ng-template #editPhotoTitle>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-form-field>\r\n                                <input matInput [(ngModel)]=\"photoTitle\" placeholder=\"Adicione o título da foto.\">\r\n                            </mat-form-field>\r\n                            <button mat-icon-button color=\"warn\" matTooltip=\"Confirmar\" matTooltipPosition=\"right\" (click)=\"confirmPhotoTitle()\" aria-label=\"editar nome\">\r\n                                <mat-icon class=\"btn-confirm-name\">check_circle</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                    </ng-template>\r\n                </mat-card-title>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"{{imageSource}}\" class=\"uploaded-image\">\r\n            <mat-card-actions>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                    <button mat-icon-button color=\"primary\" matTooltip=\"Adicionar Imagens Relacionadas\" matTooltipPosition=\"above\">\r\n                        <mat-icon>photo_library</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"primary\" matTooltip=\"Adicionar Comentários\" matTooltipPosition=\"above\">\r\n                        <mat-icon>add_comment</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button color=\"warn\" matTooltip=\"Remover Imagem\" matTooltipPosition=\"above\" (click)=\"btnRemoveClick()\">\r\n                        <mat-icon>delete</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n    <ng-template #uploadContainer>\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <div class=\"upload-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"wrapClick()\">\r\n                    <div fxLayout=\"column\">\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <mat-icon class=\"upload-icon\">add_a_photo</mat-icon>\r\n                        </div>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                            <p>Adicionar nova imagem ao painel.</p>\r\n                        </div>\r\n                        <input type=\"file\" id=\"uploadPicture\" (change)=\"uploadPhoto($event)\" class=\"input-upload\">\r\n                    </div>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </ng-template>\r\n</div>"

/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-selector/photo-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_util_dom_confirm_dialog_dom_confirm_dialog_component__ = __webpack_require__("./src/app/util/dom-confirm-dialog/dom-confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_util_dom_confirm_dialog_dom_confirm_dialog_constants__ = __webpack_require__("./src/app/util/dom-confirm-dialog/dom-confirm-dialog.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_model_image_model__ = __webpack_require__("./src/app/model/image.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_util_read_only_util__ = __webpack_require__("./src/app/util/read-only-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhotoSelectorComponent = /** @class */ (function () {
    function PhotoSelectorComponent(sanitizer, dialog) {
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.photoTitle = 'INSIRA O TÍTULO DA FOTO';
        this.editingTitle = false;
        this.removeImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.createImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.updateImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PhotoSelectorComponent.prototype.ngOnInit = function () {
        if (this.imageModel && !this.sanitizedImage) {
            this.sanitizedImage = this.sanitizer.bypassSecurityTrustStyle("url(" + __WEBPACK_IMPORTED_MODULE_6__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_FILES + "/" + this.imageModel.path + ")");
            this.imageSource = __WEBPACK_IMPORTED_MODULE_6__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_FILES + "/" + this.imageModel.path;
        }
    };
    PhotoSelectorComponent.prototype.ngAfterViewInit = function () { };
    PhotoSelectorComponent.prototype.startEditPhotoTitle = function () {
        this.editingTitle = true;
    };
    PhotoSelectorComponent.prototype.confirmPhotoTitle = function () {
        this.editingTitle = false;
        this.updateImage.emit(this.imageModel);
    };
    PhotoSelectorComponent.prototype.uploadPhoto = function (files) {
        var _this = this;
        var reader = new FileReader();
        console.log(files);
        reader.readAsDataURL(files.target.files[0]);
        reader.addEventListener('load', function () {
            _this.imageSource = reader.result;
            var image = files.target.files[0];
            var formData = new FormData();
            formData.append('title', image.name);
            formData.append('file_type', image.type);
            formData.append('file', image);
            _this.createImage.emit(formData);
            _this.imageModel = new __WEBPACK_IMPORTED_MODULE_5__app_model_image_model__["a" /* ImageModel */]();
            _this.imageModel.title = image.name;
        });
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    PhotoSelectorComponent.prototype.btnRemoveClick = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__app_util_dom_confirm_dialog_dom_confirm_dialog_component__["a" /* DomConfirmDialogComponent */], {
            width: '320px',
            data: {
                title: 'Remover Imagem',
                message: "Deseja remover " + this.photoTitle + "?"
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result === __WEBPACK_IMPORTED_MODULE_4__app_util_dom_confirm_dialog_dom_confirm_dialog_constants__["a" /* DomConfirmDialogActions */].CONFIRM) {
                _this.removeImage.emit(_this.imageModel);
            }
        });
    };
    PhotoSelectorComponent.prototype.wrapClick = function () {
        document.getElementById('uploadPicture').click();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__app_model_image_model__["a" /* ImageModel */])
    ], PhotoSelectorComponent.prototype, "imageModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PhotoSelectorComponent.prototype, "removeImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PhotoSelectorComponent.prototype, "createImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PhotoSelectorComponent.prototype, "updateImage", void 0);
    PhotoSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-photo-selector',
            template: __webpack_require__("./src/app/project/interaction/photo-grid/photo-selector/photo-selector.component.html"),
            styles: [__webpack_require__("./src/app/project/interaction/photo-grid/photo-selector/photo-selector.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */]])
    ], PhotoSelectorComponent);
    return PhotoSelectorComponent;
}());



/***/ }),

/***/ "./src/app/project/interaction/photo-grid/photo-selector/photo-selector.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoSelectorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo_selector_component__ = __webpack_require__("./src/app/project/interaction/photo-grid/photo-selector/photo-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_util_dom_confirm_dialog_dom_confirm_dialog_module__ = __webpack_require__("./src/app/util/dom-confirm-dialog/dom-confirm-dialog.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PhotoSelectorModule = /** @class */ (function () {
    function PhotoSelectorModule() {
    }
    PhotoSelectorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_util_dom_confirm_dialog_dom_confirm_dialog_module__["a" /* DomConfirmDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__photo_selector_component__["a" /* PhotoSelectorComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__photo_selector_component__["a" /* PhotoSelectorComponent */]]
        })
    ], PhotoSelectorModule);
    return PhotoSelectorModule;
}());



/***/ }),

/***/ "./src/app/util/dom-confirm-dialog/dom-confirm-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".dialog-container {\r\n    padding: 24px;\r\n}\r\n\r\n.dialog-action-button {\r\n    margin: 5px;\r\n}"

/***/ }),

/***/ "./src/app/util/dom-confirm-dialog/dom-confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\n\n  <h2 mat-dialog-title>\n\n    {{dialogTitle}}</h2>\n\n  <div fxLayout=\"row\" mat-dialog-content fxLayoutAlign=\"start center\">\n    <p class=\"mat-body-1\">{{dialogMessage}}</p>\n  </div>\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n\n    <button mat-button (click)=\"cancelClick()\" class=\"dialog-action-button\" color=\"warn\">CANCELAR</button>\n    <button mat-button (click)=\"confirmClick()\" class=\"dialog-action-button\" color=\"warn\">CONFIRMAR</button>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/util/dom-confirm-dialog/dom-confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_util_dom_confirm_dialog_dom_confirm_dialog_constants__ = __webpack_require__("./src/app/util/dom-confirm-dialog/dom-confirm-dialog.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DomConfirmDialogComponent = /** @class */ (function () {
    function DomConfirmDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialogMessage = '';
        this.dialogTitle = '';
    }
    DomConfirmDialogComponent.prototype.ngOnInit = function () {
        this.dialogMessage = this.data.message;
        this.dialogTitle = this.data.title;
    };
    DomConfirmDialogComponent.prototype.confirmClick = function () {
        this.dialogRef.close(__WEBPACK_IMPORTED_MODULE_2__app_util_dom_confirm_dialog_dom_confirm_dialog_constants__["a" /* DomConfirmDialogActions */].CONFIRM);
    };
    DomConfirmDialogComponent.prototype.cancelClick = function () {
        this.dialogRef.close(__WEBPACK_IMPORTED_MODULE_2__app_util_dom_confirm_dialog_dom_confirm_dialog_constants__["a" /* DomConfirmDialogActions */].CANCEL);
    };
    DomConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dom-confirm-dialog',
            template: __webpack_require__("./src/app/util/dom-confirm-dialog/dom-confirm-dialog.component.html"),
            styles: [__webpack_require__("./src/app/util/dom-confirm-dialog/dom-confirm-dialog.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]])
    ], DomConfirmDialogComponent);
    return DomConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/util/dom-confirm-dialog/dom-confirm-dialog.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomConfirmDialogActions; });
var DomConfirmDialogActions = {
    CONFIRM: 'CONFIRM',
    CANCEL: 'CANCEL'
};


/***/ }),

/***/ "./src/app/util/dom-confirm-dialog/dom-confirm-dialog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomConfirmDialogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_confirm_dialog_component__ = __webpack_require__("./src/app/util/dom-confirm-dialog/dom-confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DomConfirmDialogModule = /** @class */ (function () {
    function DomConfirmDialogModule() {
    }
    DomConfirmDialogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dom_confirm_dialog_component__["a" /* DomConfirmDialogComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__dom_confirm_dialog_component__["a" /* DomConfirmDialogComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dom_confirm_dialog_component__["a" /* DomConfirmDialogComponent */]]
        })
    ], DomConfirmDialogModule);
    return DomConfirmDialogModule;
}());



/***/ })

});
//# sourceMappingURL=interaction.module.chunk.js.map
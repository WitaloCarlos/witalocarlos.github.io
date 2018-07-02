webpackJsonp(["redefinition.module"],{

/***/ "./src/app/project/redefinition/mindmap/mindmap-node/mindmap-node.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/redefinition/mindmap/mindmap-node/mindmap-node.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mindmap-node works!\n</p>\n"

/***/ }),

/***/ "./src/app/project/redefinition/mindmap/mindmap-node/mindmap-node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MindmapNodeComponent; });
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

var MindmapNodeComponent = /** @class */ (function () {
    function MindmapNodeComponent() {
    }
    MindmapNodeComponent.prototype.ngOnInit = function () {
    };
    MindmapNodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mindmap-node',
            template: __webpack_require__("./src/app/project/redefinition/mindmap/mindmap-node/mindmap-node.component.html"),
            styles: [__webpack_require__("./src/app/project/redefinition/mindmap/mindmap-node/mindmap-node.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MindmapNodeComponent);
    return MindmapNodeComponent;
}());



/***/ }),

/***/ "./src/app/project/redefinition/mindmap/mindmap-node/mindmap-node.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MindmapNodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mindmap_node_component__ = __webpack_require__("./src/app/project/redefinition/mindmap/mindmap-node/mindmap-node.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MindmapNodeModule = /** @class */ (function () {
    function MindmapNodeModule() {
    }
    MindmapNodeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mindmap_node_component__["a" /* MindmapNodeComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mindmap_node_component__["a" /* MindmapNodeComponent */]]
        })
    ], MindmapNodeModule);
    return MindmapNodeModule;
}());



/***/ }),

/***/ "./src/app/project/redefinition/mindmap/mindmap.component.css":
/***/ (function(module, exports) {

module.exports = ".actions {\r\n  position: absolute;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/project/redefinition/mindmap/mindmap.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"mindmap-container\">\n    <app-dom-canvas #mindmap (insertNode)=\"openAddNodeDialog($event)\" (nodeRemoved)=\"catchNodeRemoval($event)\"></app-dom-canvas>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n        <div class=\"actions\">\n            <button mat-fab color=\"primary\" matTooltip=\"Salvar Mapa Mental\" matTooltipPosition=\"below\" (click)=\"saveMindMap()\">\n                <mat-icon>save</mat-icon>\n            </button>\n            <button mat-fab color=\"primary\" matTooltip=\"Limpar Mapa Mental\" matTooltipPosition=\"below\" (click)=\"clearMindMap()\">\n                <mat-icon>clear</mat-icon>\n            </button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/project/redefinition/mindmap/mindmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MindmapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_util_dom_canvas_dom_canvas_component__ = __webpack_require__("./src/app/util/dom-canvas/dom-canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_util_dom_canvas_dom_canvas_model__ = __webpack_require__("./src/app/util/dom-canvas/dom-canvas.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_project_redefinition_mindmap_new_node_form_dialog_new_node_form_dialog_component__ = __webpack_require__("./src/app/project/redefinition/mindmap/new-node-form-dialog/new-node-form-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_project_redefinition_mindmap_mindmap_service__ = __webpack_require__("./src/app/project/redefinition/mindmap/mindmap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_model_node_model__ = __webpack_require__("./src/app/model/node.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_util_dom_snack_bar_dom_snack_bar_service__ = __webpack_require__("./src/app/util/dom-snack-bar/dom-snack-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MindmapComponent = /** @class */ (function () {
    function MindmapComponent(dialog, service, mindMapService, snackBarService) {
        this.dialog = dialog;
        this.service = service;
        this.mindMapService = mindMapService;
        this.snackBarService = snackBarService;
        this.nodesToRemove = [];
    }
    MindmapComponent.prototype.ngOnInit = function () { };
    MindmapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.mindMapModel = this.service.getSelectedProject().mindMap;
        if (this.mindMapModel.nodes && this.mindMapModel.nodes.length > 0) {
            this.mindMapModel.nodes.forEach(function (node) {
                node.getConnectedNodes(_this.mindMapModel.nodes);
                _this.mindMap.domCanvas.state.shapes.push(node.toDomShape());
            });
            this.mindMap.domCanvas.drawAll();
        }
    };
    MindmapComponent.prototype.addNode = function () {
        console.log('Not implemented yet');
    };
    MindmapComponent.prototype.clear = function () {
        var _this = this;
        this.mindMap.domCanvas.state.shapes.forEach(function (shape) {
            _this.nodesToRemove.push({ nodeId: shape.id.toString() });
        });
        this.mindMap.domCanvas.clearAll();
    };
    MindmapComponent.prototype.newNode = function (x, y, width, height, label, textColor, color) {
        if (color === void 0) { color = '#cccccc'; }
        var shape = new __WEBPACK_IMPORTED_MODULE_2__app_util_dom_canvas_dom_canvas_model__["b" /* DomShape */]().build(x, y, width, height, color, label);
        shape.textColor = textColor;
        if (this.mindMap.domCanvas.state.selection) {
            this.mindMap.domCanvas.state.selection.connections.push(shape);
            shape.connections.push(this.mindMap.domCanvas.state.selection);
            this.mindMap.domCanvas.linkShapes(this.mindMap.domCanvas.state.selection, shape, true);
        }
        this.mindMap.domCanvas.state.addShape(shape);
        this.mindMap.domCanvas.drawShape(shape);
    };
    MindmapComponent.prototype.saveMindMap = function () {
        var _this = this;
        this.mindMapModel.nodes = [];
        this.mindMap.domCanvas.state.shapes.forEach(function (s) {
            var newShape = __WEBPACK_IMPORTED_MODULE_7__app_model_node_model__["a" /* NodeModel */].parseDomShape(s);
            newShape.idMindMap = _this.mindMapModel.id;
            // newShape.setReferencedNodes();
            _this.mindMapModel.nodes.push(newShape);
        });
        this.mindMapService
            .deleteUnusedNodes(this.mindMapModel, this.nodesToRemove)
            .subscribe(function (result) {
            _this.mindMapService.updateMindMap(_this.mindMapModel).subscribe(function (res) {
                _this.snackBarService.snackBarSuccess('Mapa Mental Salvo!');
            }, function (error) {
                _this.snackBarService.snackBarError('Erro ao salvar Mapa Mental - Cód 1');
            });
        }, function (err) {
            _this.snackBarService.snackBarError('Erro ao salvar Mapa Mental - Cód 2');
        });
    };
    MindmapComponent.prototype.clearMindMap = function () {
        var _this = this;
        this.mindMap.domCanvas.state.shapes.forEach(function (shape) {
            if (shape.id) {
                _this.nodesToRemove.push({ nodeId: shape.id.toString() });
            }
        });
        this.mindMap.domCanvas.clearAll();
        this.snackBarService.snackBarInfo('Mapa Mental Limpo!');
    };
    MindmapComponent.prototype.catchNodeRemoval = function (shape) {
        if (shape.id) {
            this.nodesToRemove.push({ nodeId: shape.id.toString() });
        }
    };
    MindmapComponent.prototype.openAddNodeDialog = function (coordinates) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__app_project_redefinition_mindmap_new_node_form_dialog_new_node_form_dialog_component__["a" /* NewNodeFormDialogComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            // TODO
            if (result) {
                console.log(result);
                _this.newNode(coordinates.x, coordinates.y, 180, 60, result.label, result.textColor, result.nodeColor);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mindmap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_util_dom_canvas_dom_canvas_component__["a" /* DomCanvasComponent */])
    ], MindmapComponent.prototype, "mindMap", void 0);
    MindmapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mindmap',
            template: __webpack_require__("./src/app/project/redefinition/mindmap/mindmap.component.html"),
            styles: [__webpack_require__("./src/app/project/redefinition/mindmap/mindmap.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__app_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_5__app_project_redefinition_mindmap_mindmap_service__["a" /* MindmapService */],
            __WEBPACK_IMPORTED_MODULE_8__app_util_dom_snack_bar_dom_snack_bar_service__["a" /* DomSnackBarService */]])
    ], MindmapComponent);
    return MindmapComponent;
}());



/***/ }),

/***/ "./src/app/project/redefinition/mindmap/mindmap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MindmapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mindmap_component__ = __webpack_require__("./src/app/project/redefinition/mindmap/mindmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_project_redefinition_mindmap_mindmap_node_mindmap_node_module__ = __webpack_require__("./src/app/project/redefinition/mindmap/mindmap-node/mindmap-node.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_util_dom_canvas_dom_canvas_module__ = __webpack_require__("./src/app/util/dom-canvas/dom-canvas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_project_redefinition_mindmap_new_node_form_dialog_new_node_form_dialog_module__ = __webpack_require__("./src/app/project/redefinition/mindmap/new-node-form-dialog/new-node-form-dialog.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_util_dom_api_dom_api_module__ = __webpack_require__("./src/app/util/dom-api/dom-api.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_project_redefinition_mindmap_mindmap_service__ = __webpack_require__("./src/app/project/redefinition/mindmap/mindmap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_util_dom_snack_bar_dom_snack_bar_module__ = __webpack_require__("./src/app/util/dom-snack-bar/dom-snack-bar.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MindmapModule = /** @class */ (function () {
    function MindmapModule() {
    }
    MindmapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_util_dom_api_dom_api_module__["a" /* DomApiModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_project_redefinition_mindmap_mindmap_node_mindmap_node_module__["a" /* MindmapNodeModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_project_redefinition_mindmap_new_node_form_dialog_new_node_form_dialog_module__["a" /* NewNodeFormDialogModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_util_dom_snack_bar_dom_snack_bar_module__["a" /* DomSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_util_dom_canvas_dom_canvas_module__["a" /* DomCanvasModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__app_project_redefinition_mindmap_mindmap_service__["a" /* MindmapService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__mindmap_component__["a" /* MindmapComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mindmap_component__["a" /* MindmapComponent */]]
        })
    ], MindmapModule);
    return MindmapModule;
}());



/***/ }),

/***/ "./src/app/project/redefinition/mindmap/mindmap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MindmapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_util_dom_api_dom_api_service__ = __webpack_require__("./src/app/util/dom-api/dom-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__ = __webpack_require__("./src/app/util/read-only-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_parser_mindmap_parser__ = __webpack_require__("./src/app/model/parser/mindmap.parser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MindmapService = /** @class */ (function () {
    function MindmapService(domApi) {
        this.domApi = domApi;
    }
    MindmapService.prototype.getMindMap = function (projectId) {
        return this.domApi.get(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.MINDMAP + "/project/" + projectId);
    };
    MindmapService.prototype.deleteUnusedNodes = function (mindmap, nodesToRemove) {
        if (nodesToRemove === void 0) { nodesToRemove = []; }
        var body = JSON.stringify(nodesToRemove);
        console.log(body);
        return this.domApi.post(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.MINDMAP + "/delete-nodes/" + mindmap.id, body);
    };
    MindmapService.prototype.updateMindMap = function (mindmap) {
        var body = JSON.stringify(__WEBPACK_IMPORTED_MODULE_3__app_model_parser_mindmap_parser__["a" /* MindMapParser */].parseToJson(mindmap));
        return this.domApi.put(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.MINDMAP + "/u/" + mindmap.id, body);
    };
    MindmapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_util_dom_api_dom_api_service__["a" /* DomApiService */]])
    ], MindmapService);
    return MindmapService;
}());



/***/ }),

/***/ "./src/app/project/redefinition/mindmap/new-node-form-dialog/new-node-form-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    height: 40vh;\r\n    width: 30vw;    \r\n}\r\n\r\n.input-node-label {\r\n    width: 100%;\r\n}\r\n\r\n.action-button {\r\n    margin-right: 5px;\r\n}\r\n\r\n.dom-dialog-body {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 24px;\r\n    padding-right: 24px;\r\n    height: 75%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/project/redefinition/mindmap/new-node-form-dialog/new-node-form-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"dom-dialog-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    <h2 mat-dialog-title>\n      Adicionar</h2>\n  </div>\n  <div class=\"dom-dialog-body\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <mat-form-field class=\"input-node-label\">\n        <input matInput placeholder=\"Rótulo\" [(ngModel)]=\"nodeLabel\">\n      </mat-form-field>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <p class=\"mat-caption\">Selecione uma cor</p>\n        <app-selection-color-grid (colorSelection)=\"onColorSelectedListener($event)\"></app-selection-color-grid>\n      </div>\n    </div>\n    <div fxLayou=\"row\" fxLayoutAlign=\"end center\" class=\"dom-dialog-actions\">\n      <button mat-raised-button color=\"primary\" mat-dialog-close class=\"action-button\">\n        <mat-icon>cancel</mat-icon> Fechar</button>\n      <button mat-raised-button color=\"primary\" (click)=\"createNodeClick()\">\n        <mat-icon>add_circle</mat-icon> Criar</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/project/redefinition/mindmap/new-node-form-dialog/new-node-form-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewNodeFormDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewNodeFormDialogComponent = /** @class */ (function () {
    function NewNodeFormDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NewNodeFormDialogComponent.prototype.ngOnInit = function () { };
    NewNodeFormDialogComponent.prototype.onColorSelectedListener = function (selection) {
        this.nodeColors = selection;
    };
    NewNodeFormDialogComponent.prototype.createNodeClick = function () {
        if (this.nodeLabel && this.nodeColors) {
            this.dialogRef.close({
                label: this.nodeLabel,
                textColor: this.nodeColors.text,
                nodeColor: this.nodeColors.node
            });
        }
    };
    NewNodeFormDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-node-form-dialog',
            template: __webpack_require__("./src/app/project/redefinition/mindmap/new-node-form-dialog/new-node-form-dialog.component.html"),
            styles: [__webpack_require__("./src/app/project/redefinition/mindmap/new-node-form-dialog/new-node-form-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]])
    ], NewNodeFormDialogComponent);
    return NewNodeFormDialogComponent;
}());



/***/ }),

/***/ "./src/app/project/redefinition/mindmap/new-node-form-dialog/new-node-form-dialog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewNodeFormDialogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_node_form_dialog_component__ = __webpack_require__("./src/app/project/redefinition/mindmap/new-node-form-dialog/new-node-form-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_util_selection_color_grid_selection_color_grid_module__ = __webpack_require__("./src/app/util/selection-color-grid/selection-color-grid.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NewNodeFormDialogModule = /** @class */ (function () {
    function NewNodeFormDialogModule() {
    }
    NewNodeFormDialogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_util_selection_color_grid_selection_color_grid_module__["a" /* SelectionColorGridModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__new_node_form_dialog_component__["a" /* NewNodeFormDialogComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__new_node_form_dialog_component__["a" /* NewNodeFormDialogComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__new_node_form_dialog_component__["a" /* NewNodeFormDialogComponent */]]
        })
    ], NewNodeFormDialogModule);
    return NewNodeFormDialogModule;
}());



/***/ }),

/***/ "./src/app/project/redefinition/redefinition.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.mindmap-container {\r\n    width: 98.5%;\r\n  }"

/***/ }),

/***/ "./src/app/project/redefinition/redefinition.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dom-flex-container [leftSpace]=\"0\" [rightSpace]=\"0\" [centerSpace]=\"100\">\r\n    <app-mindmap class=\"mindmap-container\"></app-mindmap>\r\n</app-dom-flex-container>"

/***/ }),

/***/ "./src/app/project/redefinition/redefinition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinitionComponent; });
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

var RedefinitionComponent = /** @class */ (function () {
    function RedefinitionComponent() {
    }
    RedefinitionComponent.prototype.ngOnInit = function () {
    };
    RedefinitionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-redefinition',
            template: __webpack_require__("./src/app/project/redefinition/redefinition.component.html"),
            styles: [__webpack_require__("./src/app/project/redefinition/redefinition.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RedefinitionComponent);
    return RedefinitionComponent;
}());



/***/ }),

/***/ "./src/app/project/redefinition/redefinition.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedefinitionModule", function() { return RedefinitionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redefinition_component__ = __webpack_require__("./src/app/project/redefinition/redefinition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_project_redefinition_mindmap_mindmap_module__ = __webpack_require__("./src/app/project/redefinition/mindmap/mindmap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_project_redefinition_redefinition_routing__ = __webpack_require__("./src/app/project/redefinition/redefinition.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_util_dom_flex_container_dom_flex_container_module__ = __webpack_require__("./src/app/util/dom-flex-container/dom-flex-container.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RedefinitionModule = /** @class */ (function () {
    function RedefinitionModule() {
    }
    RedefinitionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_project_redefinition_mindmap_mindmap_module__["a" /* MindmapModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_util_dom_flex_container_dom_flex_container_module__["a" /* DomFlexContainerModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_project_redefinition_redefinition_routing__["a" /* redefinitionRouting */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__redefinition_component__["a" /* RedefinitionComponent */]]
        })
    ], RedefinitionModule);
    return RedefinitionModule;
}());



/***/ }),

/***/ "./src/app/project/redefinition/redefinition.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return redefinitionRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_project_redefinition_redefinition_component__ = __webpack_require__("./src/app/project/redefinition/redefinition.component.ts");


var redefinintionRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__app_project_redefinition_redefinition_component__["a" /* RedefinitionComponent */] }
];
var redefinitionRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(redefinintionRoutes);


/***/ }),

/***/ "./src/app/util/dom-canvas/dom-canvas.component.css":
/***/ (function(module, exports) {

module.exports = ".dom-canvas {\r\n    min-height:100%;\r\n    max-height: 100%;\r\n    width: 100%;\r\n    background-color: white;\r\n    border: 1px solid lightgray;\r\n     image-rendering: optimizeSpeed;             /* Older versions of FF          */\r\n  image-rendering: -moz-crisp-edges;          /* FF 6.0+                       */\r\n  image-rendering: -webkit-optimize-contrast; /* Safari                        */\r\n  image-rendering: -o-crisp-edges;            /* OS X & Windows Opera (12.02+) */\r\n  image-rendering: -o-pixelated;\r\n  image-rendering: pixelated;                 /* Awesome future-browsers       */\r\n  -ms-interpolation-mode: nearest-neighbor;   /* IE                            */\r\n}"

/***/ }),

/***/ "./src/app/util/dom-canvas/dom-canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas class=\"dom-canvas\" #domCanvas>\n</canvas>"

/***/ }),

/***/ "./src/app/util/dom-canvas/dom-canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomCanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_util_dom_canvas_dom_canvas_model__ = __webpack_require__("./src/app/util/dom-canvas/dom-canvas.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DomCanvasComponent = /** @class */ (function () {
    function DomCanvasComponent() {
        this.insertNode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.nodeRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DomCanvasComponent.prototype.ngOnInit = function () {
        this.adjustCanvasBounds();
    };
    DomCanvasComponent.prototype.ngAfterViewInit = function () {
        this.domCanvas = new __WEBPACK_IMPORTED_MODULE_1__app_util_dom_canvas_dom_canvas_model__["a" /* DomCanvas */](this.canvas.nativeElement);
        this.domCanvas.eventsCallback = this;
    };
    DomCanvasComponent.prototype.adjustCanvasBounds = function () {
        var previousBounds = this.canvas
            .nativeElement.getBoundingClientRect();
        this.canvas.nativeElement.width =
            Math.round(devicePixelRatio * previousBounds.right) -
                Math.round(devicePixelRatio * previousBounds.left);
        this.canvas.nativeElement.height =
            Math.round(devicePixelRatio * previousBounds.bottom) -
                Math.round(devicePixelRatio * previousBounds.top);
    };
    DomCanvasComponent.prototype.addNewNode = function (xAxis, yAxis) {
        this.insertNode.emit({ x: xAxis, y: yAxis });
    };
    DomCanvasComponent.prototype.removeNode = function (shape) {
        this.nodeRemoved.emit(shape);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('domCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DomCanvasComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DomCanvasComponent.prototype, "insertNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DomCanvasComponent.prototype, "nodeRemoved", void 0);
    DomCanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dom-canvas',
            template: __webpack_require__("./src/app/util/dom-canvas/dom-canvas.component.html"),
            styles: [__webpack_require__("./src/app/util/dom-canvas/dom-canvas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DomCanvasComponent);
    return DomCanvasComponent;
}());



/***/ }),

/***/ "./src/app/util/dom-canvas/dom-canvas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomCanvasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_canvas_component__ = __webpack_require__("./src/app/util/dom-canvas/dom-canvas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DomCanvasModule = /** @class */ (function () {
    function DomCanvasModule() {
    }
    DomCanvasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dom_canvas_component__["a" /* DomCanvasComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__dom_canvas_component__["a" /* DomCanvasComponent */]]
        })
    ], DomCanvasModule);
    return DomCanvasModule;
}());



/***/ }),

/***/ "./src/app/util/selection-color-grid/color-selector/color-selector.component.css":
/***/ (function(module, exports) {

module.exports = ".color-selector {\r\n    width: 100%;\r\n    border: 1px solid transparent;\r\n    border-radius: 5px;    \r\n    text-align: center;\r\n}\r\n\r\n.color-selector:hover {\r\n    border: 1px solid lightgray;\r\n}\r\n\r\n.check-icon {\r\n    fill-opacity: 0.8;\r\n    text-align: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/util/selection-color-grid/color-selector/color-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"color-selector\" [style.background]=\"backgroundColor\" (click)=\"checkColor()\">\n  <mat-icon class=\"check-icon\" [style.visibility]=\"isClicked ? 'visible' : 'hidden'\" [style.color]=\"textColor\">check_circle</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/util/selection-color-grid/color-selector/color-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorSelectorComponent; });
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

var ColorSelectorComponent = /** @class */ (function () {
    function ColorSelectorComponent() {
        this.backgroundColor = 'tomato';
        this.isClicked = false;
        this.textColor = 'white';
        this.colorSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ColorSelectorComponent.prototype.ngOnInit = function () {
        this.isClicked = false;
    };
    ColorSelectorComponent.prototype.checkColor = function () {
        this.isClicked = !this.isClicked;
        if (this.isClicked) {
            this.colorSelected.emit(this.backgroundColor);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ColorSelectorComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ColorSelectorComponent.prototype, "isClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ColorSelectorComponent.prototype, "textColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ColorSelectorComponent.prototype, "colorSelected", void 0);
    ColorSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-color-selector',
            template: __webpack_require__("./src/app/util/selection-color-grid/color-selector/color-selector.component.html"),
            styles: [__webpack_require__("./src/app/util/selection-color-grid/color-selector/color-selector.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ColorSelectorComponent);
    return ColorSelectorComponent;
}());



/***/ }),

/***/ "./src/app/util/selection-color-grid/color-selector/color-selector.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorSelectorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_selector_component__ = __webpack_require__("./src/app/util/selection-color-grid/color-selector/color-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ColorSelectorModule = /** @class */ (function () {
    function ColorSelectorModule() {
    }
    ColorSelectorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatIconModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__color_selector_component__["a" /* ColorSelectorComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__color_selector_component__["a" /* ColorSelectorComponent */]]
        })
    ], ColorSelectorModule);
    return ColorSelectorModule;
}());



/***/ }),

/***/ "./src/app/util/selection-color-grid/colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorList; });
var colorList = [
    {
        position: 2,
        color: '#8b4513',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 3,
        color: '#800000',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 4,
        color: '#ff0000',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 5,
        color: '#ffa500',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 6,
        color: '#daa520',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 7,
        color: '#ffd700',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 8,
        color: '#7cfc00',
        textColor: '#000000',
        isSelected: false
    },
    {
        position: 9,
        color: '#228b22',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 1,
        color: '#ff69b4',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 10,
        color: '#8b008b',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 14,
        color: '#4b0082',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 11,
        color: '#00008b',
        textColor: '#ffffff',
        isSelected: false
    },
    {
        position: 12,
        color: '#87cefa',
        textColor: '#000000',
        isSelected: false
    },
    {
        position: 13,
        color: '#808080',
        textColor: '#000000',
        isSelected: false
    },
    {
        position: 15,
        color: '#000000',
        textColor: '#ffffff',
        isSelected: false
    }
];


/***/ }),

/***/ "./src/app/util/selection-color-grid/selection-color-grid.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin: 0 auto;\r\n    min-height: 16vh;\r\n    min-width: 20vw;\r\n}\r\n\r\n\r\n.grid-item {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/util/selection-color-grid/selection-color-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <mat-grid-list cols=\"5\" rowHeight=\"30px\">\n    <mat-grid-tile *ngFor=\"let color of colors\">\n      <app-color-selector \n      [backgroundColor]=\"color.color\" \n      [isClicked]=\"color.isSelected\" \n      [textColor]=\"color.textColor\"\n      (colorSelected)=\"onColorSelectedListener($event)\" class=\"grid-item\"></app-color-selector>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/util/selection-color-grid/selection-color-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionColorGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_util_selection_color_grid_colors__ = __webpack_require__("./src/app/util/selection-color-grid/colors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectionColorGridComponent = /** @class */ (function () {
    function SelectionColorGridComponent() {
        this.colors = [];
        this.selectedColor = null;
        this.colorSelection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SelectionColorGridComponent.prototype.ngOnInit = function () {
        this.fillColors();
    };
    SelectionColorGridComponent.prototype.onColorSelectedListener = function (color) {
        if (this.selectedColor) {
            this.selectedColor.isSelected = false;
            // this.selectedColor = null;
        }
        this.selectedColor = this.colors.find(function (c) {
            return c.color === color;
        });
        this.selectedColor.isSelected = true;
        this.colorSelection.emit({
            node: this.selectedColor.color,
            text: this.selectedColor.textColor
        });
    };
    SelectionColorGridComponent.prototype.getIndex = function (colorToSearch) {
        return this.colors.findIndex(function (c) {
            return c.color === colorToSearch;
        });
    };
    SelectionColorGridComponent.prototype.fillColors = function () {
        this.colors = __WEBPACK_IMPORTED_MODULE_1__app_util_selection_color_grid_colors__["a" /* colorList */];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], SelectionColorGridComponent.prototype, "colorSelection", void 0);
    SelectionColorGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-selection-color-grid',
            template: __webpack_require__("./src/app/util/selection-color-grid/selection-color-grid.component.html"),
            styles: [__webpack_require__("./src/app/util/selection-color-grid/selection-color-grid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectionColorGridComponent);
    return SelectionColorGridComponent;
}());



/***/ }),

/***/ "./src/app/util/selection-color-grid/selection-color-grid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionColorGridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_color_grid_component__ = __webpack_require__("./src/app/util/selection-color-grid/selection-color-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_util_selection_color_grid_color_selector_color_selector_module__ = __webpack_require__("./src/app/util/selection-color-grid/color-selector/color-selector.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SelectionColorGridModule = /** @class */ (function () {
    function SelectionColorGridModule() {
    }
    SelectionColorGridModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_util_selection_color_grid_color_selector_color_selector_module__["a" /* ColorSelectorModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__selection_color_grid_component__["a" /* SelectionColorGridComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__selection_color_grid_component__["a" /* SelectionColorGridComponent */]]
        })
    ], SelectionColorGridModule);
    return SelectionColorGridModule;
}());



/***/ })

});
//# sourceMappingURL=redefinition.module.chunk.js.map
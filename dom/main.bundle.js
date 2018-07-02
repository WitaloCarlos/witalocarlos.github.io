webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/home/home.module": [
		"./src/app/home/home.module.ts",
		"common",
		"home.module"
	],
	"app/login/login.module": [
		"./src/app/login/login.module.ts",
		"login.module"
	],
	"app/project/interaction/interaction.module": [
		"./src/app/project/interaction/interaction.module.ts",
		"common",
		"interaction.module"
	],
	"app/project/opportunity/opportunity.module": [
		"./src/app/project/opportunity/opportunity.module.ts",
		"common",
		"opportunity.module"
	],
	"app/project/project.module": [
		"./src/app/project/project.module.ts",
		"common",
		"project.module"
	],
	"app/project/redefinition/redefinition.module": [
		"./src/app/project/redefinition/redefinition.module.ts",
		"common",
		"redefinition.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".dom-container {\r\n    width: 100%;\r\n    margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-app-background dom-container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_util_dom_api_dom_api_module__ = __webpack_require__("./src/app/util/dom-api/dom-api.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_util_dom_api_dom_api_module__["a" /* DomApiModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* appRouting */], { useHash: true })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__app_session_service__["a" /* SessionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });
var appRoutes = [
    { path: '', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: '**', redirectTo: '' }
];
var appRouting = appRoutes;


/***/ }),

/***/ "./src/app/model/class.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Class; });
var Class = /** @class */ (function () {
    function Class() {
    }
    Object.defineProperty(Class.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "className", {
        get: function () {
            return this._className;
        },
        set: function (v) {
            this._className = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Class.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (v) {
            this._description = v;
        },
        enumerable: true,
        configurable: true
    });
    return Class;
}());



/***/ }),

/***/ "./src/app/model/linkednode.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedNode; });
var LinkedNode = /** @class */ (function () {
    function LinkedNode() {
    }
    return LinkedNode;
}());



/***/ }),

/***/ "./src/app/model/mindmap.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MindMapModel; });
var MindMapModel = /** @class */ (function () {
    function MindMapModel() {
        this.nodes = [];
    }
    return MindMapModel;
}());



/***/ }),

/***/ "./src/app/model/node.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_util_dom_canvas_dom_canvas_model__ = __webpack_require__("./src/app/util/dom-canvas/dom-canvas.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_model_linkednode_model__ = __webpack_require__("./src/app/model/linkednode.model.ts");


var NodeModel = /** @class */ (function () {
    function NodeModel() {
        this.relations = [];
        this.linkedNodesReference = [];
    }
    NodeModel.parseDomShape = function (shape, withConnections) {
        var _this = this;
        if (withConnections === void 0) { withConnections = true; }
        var node = new NodeModel();
        node.id = shape.id;
        node.height = shape.height;
        node.width = shape.width;
        node.color = shape.colorCode;
        node.textColor = shape.textColor;
        node.label = shape.label;
        node.x = shape.xAxis;
        node.y = shape.yAxis;
        if (shape.connections && withConnections) {
            shape.connections.forEach(function (conn) {
                node.relations.push(_this.parseDomShape(conn, false));
            });
        }
        return node;
    };
    NodeModel.prototype.toDomShape = function () {
        var shape = new __WEBPACK_IMPORTED_MODULE_0__app_util_dom_canvas_dom_canvas_model__["b" /* DomShape */]();
        shape.build(this.x, this.y, this.width, this.height, this.color, this.label, this.textColor, this.id);
        this.relations.forEach(function (rel) {
            var parsed = rel.toDomShape();
            shape.connections.push(parsed);
        });
        // if (this.linkedNodes && this.linkedNodes.length > 0) {
        //   this.linkedNodes.forEach(linked => {
        //     shape.connections.push(linked.toDomShape());
        //   });
        // }
        return shape;
    };
    NodeModel.prototype.getConnectedNodes = function (list) {
        var _this = this;
        this.linkedNodesReference.forEach(function (linked) {
            if (linked.id) {
                _this.relations.push(list.find(function (item) { return item.id === linked.referenceNode; }));
            }
        });
    };
    NodeModel.prototype.setReferencedNodes = function () {
        var _this = this;
        this.relations.forEach(function (linked) {
            var alreadyExist = _this.linkedNodesReference.find(function (item) {
                return (item.referenceNode === _this.id && item.neighborNode === linked.id) ||
                    (item.neighborNode === _this.id && item.referenceNode === linked.id);
            });
            if (!alreadyExist) {
                var reference = new __WEBPACK_IMPORTED_MODULE_1__app_model_linkednode_model__["a" /* LinkedNode */]();
                reference.referenceNode = _this.id;
                reference.neighborNode = linked.id;
                _this.linkedNodesReference.push(reference);
            }
        });
    };
    return NodeModel;
}());



/***/ }),

/***/ "./src/app/model/opportunity.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Opportunity; });
var Opportunity = /** @class */ (function () {
    function Opportunity() {
    }
    Object.defineProperty(Opportunity.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Opportunity.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (v) {
            this._description = v;
        },
        enumerable: true,
        configurable: true
    });
    return Opportunity;
}());



/***/ }),

/***/ "./src/app/model/parser/class.parser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_class_models__ = __webpack_require__("./src/app/model/class.models.ts");

var ClassParser = /** @class */ (function () {
    function ClassParser() {
    }
    ClassParser.parse = function (json) {
        var obj = new __WEBPACK_IMPORTED_MODULE_0__app_model_class_models__["a" /* Class */]();
        if (json) {
            obj.id = json.id ? json.id : '';
            obj.description = json.description ? json.description : '';
            obj.className = json.className ? json.className : '';
            obj.createdAt = json.createdAt || '';
            obj.updatedAt = json.updatedAt || '';
        }
        else {
            throw new Error('Class - Não foi possível realizar a conversão.');
        }
        return obj;
    };
    ClassParser.parseToJson = function (object) {
        var json = {};
        if (object) {
            json['id'] = object.id;
            json['description'] = object.description;
            json['className'] = object.className;
            json['createdAt'] = object.createdAt;
            json['updatedAt'] = object.updatedAt;
        }
        else {
            throw new Error('Class - Não foi possível realizar a conversão JSON.');
        }
        return json;
    };
    return ClassParser;
}());



/***/ }),

/***/ "./src/app/model/parser/mindmap.parser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MindMapParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_mindmap_model__ = __webpack_require__("./src/app/model/mindmap.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_model_parser_node_parser__ = __webpack_require__("./src/app/model/parser/node.parser.ts");


var MindMapParser = /** @class */ (function () {
    function MindMapParser() {
    }
    MindMapParser.parse = function (json) {
        var obj = new __WEBPACK_IMPORTED_MODULE_0__app_model_mindmap_model__["a" /* MindMapModel */]();
        if (json) {
            obj.id = json.id ? json.id : '';
            obj.title = json.title ? json.title : '';
            obj.idProject = json.id_project ? json.id_project : '';
            obj.createdAt = json.createdAt || '';
            obj.updatedAt = json.updatedAt || '';
            if (json.Nodes) {
                json.Nodes.forEach(function (n) {
                    obj.nodes.push(__WEBPACK_IMPORTED_MODULE_1__app_model_parser_node_parser__["a" /* NodeParser */].parse(n));
                });
            }
        }
        else {
            throw new Error('MindMap - Não foi possível realizar a conversão.');
        }
        return obj;
    };
    MindMapParser.parseToJson = function (object) {
        var json = {};
        json['id'] = object.id;
        json['id_project'] = object.idProject;
        json['Nodes'] = [];
        json['title'] = object.title;
        json['createdAt'] = object.createdAt;
        json['updatedAt'] = object.updatedAt;
        if (object.nodes) {
            object.nodes.forEach(function (n) {
                json['Nodes'].push(__WEBPACK_IMPORTED_MODULE_1__app_model_parser_node_parser__["a" /* NodeParser */].parseToJson(n));
            });
        }
        return json;
    };
    return MindMapParser;
}());



/***/ }),

/***/ "./src/app/model/parser/node.parser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_node_model__ = __webpack_require__("./src/app/model/node.model.ts");

var NodeParser = /** @class */ (function () {
    function NodeParser() {
    }
    NodeParser.parse = function (json, withConnections) {
        var _this = this;
        if (withConnections === void 0) { withConnections = true; }
        var obj = new __WEBPACK_IMPORTED_MODULE_0__app_model_node_model__["a" /* NodeModel */]();
        if (json) {
            obj.id = json.id || '';
            obj.label = json.label || '';
            obj.shape = json.shape || '';
            obj.color = json.color || '';
            obj.createdAt = json.createdAt || '';
            obj.updatedAt = json.updatedAt || '';
            obj.idMindMap = json.idMindMap || '';
            obj.x = json.x || 0;
            obj.y = json.y || 0;
            obj.width = json.width || 0;
            obj.height = json.height || 0;
            obj.textColor = json.textColor || '';
            if (json.relations && withConnections) {
                json.relations.forEach(function (linked) {
                    obj.relations.push(_this.parse(linked));
                });
            }
        }
        else {
            throw new Error('Node - Não foi possível realizar a conversão.');
        }
        return obj;
    };
    NodeParser.parseToJson = function (object, withConnections) {
        var _this = this;
        if (withConnections === void 0) { withConnections = true; }
        var json = {};
        if (object.id && object.id !== '') {
            json['id'] = object.id;
        }
        json['label'] = object.label || '';
        json['shape'] = object.shape || '';
        json['color'] = object.color || '';
        json['id_mind_map'] = object.idMindMap || '';
        json['x'] = object.x || 0;
        json['y'] = object.y || 0;
        json['width'] = object.width || 0;
        json['height'] = object.height || 0;
        json['textColor'] = object.textColor || '';
        json['relations'] = [];
        if (object.relations && withConnections) {
            object.relations.forEach(function (linked) {
                json['relations'].push(_this.parseToJson(linked));
            });
        }
        return json;
    };
    NodeParser.parseLinkedNodeToJson = function (reference, linked) { };
    NodeParser.domShapeToModel = function (shape) {
        var _this = this;
        var obj = new __WEBPACK_IMPORTED_MODULE_0__app_model_node_model__["a" /* NodeModel */]();
        if (shape) {
            obj.id = shape.id || '';
            obj.label = shape.label || '';
            obj.color = shape.colorCode || '';
            obj.x = shape.xAxis || 0;
            obj.y = shape.yAxis || 0;
            obj.width = shape.width || 0;
            obj.height = shape.height || 0;
            obj.textColor = shape.textColor || '';
            if (shape.connections) {
                shape.connections.forEach(function (linked) {
                    obj.relations.push(_this.domShapeToModel(linked));
                });
            }
        }
        else {
            throw new Error('Node - Não foi possível realizar a conversão.');
        }
        return obj;
    };
    return NodeParser;
}());



/***/ }),

/***/ "./src/app/model/parser/opportunity.parser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_opportunity_model__ = __webpack_require__("./src/app/model/opportunity.model.ts");

var OpportunityParser = /** @class */ (function () {
    function OpportunityParser() {
    }
    OpportunityParser.parse = function (json) {
        var obj = new __WEBPACK_IMPORTED_MODULE_0__app_model_opportunity_model__["a" /* Opportunity */]();
        if (json) {
            obj.id = json.id ? json.id : '';
            obj.description = json.description ? json.description : '';
            obj.createdAt = json.createdAt || '';
            obj.updatedAt = json.updatedAt || '';
        }
        else {
            throw new Error('Opputunity - Não foi possível realizar a conversão.');
        }
        return obj;
    };
    OpportunityParser.parseToJson = function (object) {
        var json = {};
        if (json) {
            json['id'] = object.id;
            json['description'] = object.description;
            json['createdAt'] = object.createdAt;
            json['updatedAt'] = object.updatedAt;
        }
        else {
            throw new Error('Opputunity - Não foi possível realizar a conversão JSON.');
        }
        return json;
    };
    return OpportunityParser;
}());



/***/ }),

/***/ "./src/app/model/parser/project.parser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_project_model__ = __webpack_require__("./src/app/model/project.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_model_parser_student_parser__ = __webpack_require__("./src/app/model/parser/student.parser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_model_parser_opportunity_parser__ = __webpack_require__("./src/app/model/parser/opportunity.parser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_parser_mindmap_parser__ = __webpack_require__("./src/app/model/parser/mindmap.parser.ts");




var ProjectParser = /** @class */ (function () {
    function ProjectParser() {
    }
    ProjectParser.parse = function (json) {
        var obj = new __WEBPACK_IMPORTED_MODULE_0__app_model_project_model__["a" /* Project */]();
        if (json) {
            obj.id = json.id ? json.id : '';
            obj.title = json.title ? json.title : '';
            obj.description = json.description ? json.description : '';
            obj.startDate = json.start_date ? new Date(json.start_date) : new Date();
            obj.endDate = json.end_date ? new Date(json.end_date) : new Date();
            obj.student = __WEBPACK_IMPORTED_MODULE_1__app_model_parser_student_parser__["a" /* StudentParser */].parse(json.Student);
            obj.opportunity = __WEBPACK_IMPORTED_MODULE_2__app_model_parser_opportunity_parser__["a" /* OpportunityParser */].parse(json.Opportunity);
            obj.mindMap = __WEBPACK_IMPORTED_MODULE_3__app_model_parser_mindmap_parser__["a" /* MindMapParser */].parse(json.MindMap);
            obj.createdAt = json.createdAt || '';
            obj.updatedAt = json.updatedAt || '';
        }
        else {
            throw new Error('Project - Não foi possível realizar a conversão.');
        }
        return obj;
    };
    // TODO
    ProjectParser.parseToJson = function (object) {
        var json = {};
        if (object) {
            json['id'] = object.id ? object.id : '';
            json['title'] = object.title ? object.title : '';
            json['description'] = object.description ? object.description : '';
            json['start_date'] = object.startDate.toISOString();
            json['end_date'] = object.endDate.toISOString();
            json['Student'] = __WEBPACK_IMPORTED_MODULE_1__app_model_parser_student_parser__["a" /* StudentParser */].parseToJson(object.student);
            json['Opportunity'] = __WEBPACK_IMPORTED_MODULE_2__app_model_parser_opportunity_parser__["a" /* OpportunityParser */].parseToJson(object.opportunity);
            json['MindMap'] = __WEBPACK_IMPORTED_MODULE_3__app_model_parser_mindmap_parser__["a" /* MindMapParser */].parseToJson(object.mindMap);
            json['Audios'] = [];
            json['PDFs'] = [];
            json['PhotoBoards'] = [];
            json['Sketches'] = [];
            json['createdAt'] = object.createdAt;
            json['updatedAt'] = object.updatedAt;
        }
        else {
            throw new Error('Project - Não foi possível realizar a conversão JSON.');
        }
        return json;
    };
    return ProjectParser;
}());



/***/ }),

/***/ "./src/app/model/parser/student.parser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_student_model__ = __webpack_require__("./src/app/model/student.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_model_parser_class_parser__ = __webpack_require__("./src/app/model/parser/class.parser.ts");


var StudentParser = /** @class */ (function () {
    function StudentParser() {
    }
    StudentParser.parse = function (json) {
        var obj = new __WEBPACK_IMPORTED_MODULE_0__app_model_student_model__["a" /* Student */]();
        if (json) {
            obj.id = json.id ? json.id : '';
            obj.name = json.User.name ? json.User.name : '';
            obj.username = json.User.username ? json.User.username : '';
            obj.email = json.User.email ? json.User.email : '';
            obj.class = __WEBPACK_IMPORTED_MODULE_1__app_model_parser_class_parser__["a" /* ClassParser */].parse(json.Class);
            obj.createdAt = json.createdAt || '';
            obj.updatedAt = json.updatedAt || '';
        }
        else {
            throw new Error('Student - Não foi possível realizar a conversão.');
        }
        return obj;
    };
    // TODO
    StudentParser.parseToJson = function (object) {
        var json = {};
        if (object) {
            json['id'] = object.id;
            json['User'] = {};
            json['User']['createdAt'] = object.createdAt;
            json['User']['updatedAt'] = object.updatedAt;
            json['User']['name'] = object.name;
            json['User']['username'] = object.username;
            json['User']['email'] = object.email;
            json['createdAt'] = object.createdAt;
            json['updatedAt'] = object.updatedAt;
            json['Class'] = __WEBPACK_IMPORTED_MODULE_1__app_model_parser_class_parser__["a" /* ClassParser */].parseToJson(object.class);
        }
        else {
            throw new Error('Student - Não foi possível realizar a conversão para JSON.');
        }
        return json;
    };
    return StudentParser;
}());



/***/ }),

/***/ "./src/app/model/project.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    Object.defineProperty(Project.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (v) {
            this._title = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (v) {
            this._description = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (v) {
            this._startDate = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (v) {
            this._endDate = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "student", {
        get: function () {
            return this._student;
        },
        set: function (v) {
            this._student = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "opportunity", {
        get: function () {
            return this._opportunity;
        },
        set: function (v) {
            this._opportunity = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "mindMap", {
        get: function () {
            return this._mindMap;
        },
        set: function (v) {
            this._mindMap = v;
        },
        enumerable: true,
        configurable: true
    });
    return Project;
}());



/***/ }),

/***/ "./src/app/model/student.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_user_model__ = __webpack_require__("./src/app/model/user.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super.call(this) || this;
    }
    Object.defineProperty(Student.prototype, "class", {
        get: function () {
            return this._class;
        },
        set: function (v) {
            this._class = v;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(__WEBPACK_IMPORTED_MODULE_0__app_model_user_model__["a" /* User */]));



/***/ }),

/***/ "./src/app/model/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (v) {
            this._username = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (v) {
            this._email = v;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "./src/app/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_util_dom_api_dom_api_service__ = __webpack_require__("./src/app/util/dom-api/dom-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__ = __webpack_require__("./src/app/util/read-only-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_model_parser_project_parser__ = __webpack_require__("./src/app/model/parser/project.parser.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionService = /** @class */ (function () {
    function SessionService(domApi) {
        this.domApi = domApi;
    }
    SessionService.prototype.getSelectedProject = function () {
        return this.selectedProject;
    };
    SessionService.prototype.setSelectedProject = function (project) {
        this.selectedProject = project;
    };
    SessionService.prototype.getLoggedUser = function () {
        return this.loggedUser;
    };
    SessionService.prototype.setLoggedUser = function (user) {
        this.loggedUser = user;
    };
    //#region  Requests
    SessionService.prototype.getProjects = function () {
        return this.domApi.get(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.PROJECT);
    };
    SessionService.prototype.updateProject = function (project) {
        var body = __WEBPACK_IMPORTED_MODULE_3__app_model_parser_project_parser__["a" /* ProjectParser */].parseToJson(project);
        return this.domApi.patch(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.PROJECT + "/p/" + project.id, JSON.stringify(body));
    };
    SessionService.prototype.getProjectById = function (id) {
        return this.domApi.get(__WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.SERVER_ROOT + "/" + __WEBPACK_IMPORTED_MODULE_2__app_util_read_only_util__["a" /* ReadOnlyUtil */].RequestPaths.PROJECT + "/" + id);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_util_dom_api_dom_api_service__["a" /* DomApiService */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/util/dom-api/dom-api.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_util_dom_api_dom_api_service__ = __webpack_require__("./src/app/util/dom-api/dom-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DomApiModule = /** @class */ (function () {
    function DomApiModule() {
    }
    DomApiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3__app_util_dom_api_dom_api_service__["a" /* DomApiService */]],
            exports: []
        })
    ], DomApiModule);
    return DomApiModule;
}());



/***/ }),

/***/ "./src/app/util/dom-api/dom-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__read_only_util__ = __webpack_require__("./src/app/util/read-only-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line:import-blacklist



var DomApiService = /** @class */ (function () {
    function DomApiService(http) {
        this.http = http;
    }
    DomApiService.prototype.interceptor = function (isFormData) {
        // const authToken = this.authenticationService.getToken();
        // Caso o request seja do tipo formData, não deve se adicionar header de ContentType
        // TODO atualizar o módulo http do Angular e checar se esse bug foi resolvido.
        var headers = {
            params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
        };
        if (!isFormData) {
            headers.params.append('Content-Type', __WEBPACK_IMPORTED_MODULE_2__read_only_util__["a" /* ReadOnlyUtil */].RequestContentTypes.APPLICATION_JSON);
        }
        /*if (authToken) {
          headers.params.append('Authorization', authToken);
        }*/
        return headers;
    };
    DomApiService.prototype.get = function (url) {
        return this.http
            .get(url, this.interceptor())
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    DomApiService.prototype.post = function (url, body) {
        return this.http
            .post(url, body, { headers: { 'Content-Type': 'application/json' } })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    DomApiService.prototype.postMultiPart = function (url, formData) {
        return this.http
            .post(url, formData, { headers: { 'Content-Type': 'application/json' } })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    DomApiService.prototype.put = function (url, body) {
        return this.http
            .put(url, body, { headers: { 'Content-Type': 'application/json' } })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    DomApiService.prototype.patch = function (url, body) {
        return this.http
            .patch(url, body.toString(), { headers: { 'Content-Type': 'application/json' } })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    DomApiService.prototype.delete = function (url) {
        return this.http
            .delete(url, this.interceptor())
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error || 'Server error'); });
    };
    DomApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DomApiService);
    return DomApiService;
}());



/***/ }),

/***/ "./src/app/util/dom-canvas/dom-canvas.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DomShape; });
/* unused harmony export DomShapeBorder */
/* unused harmony export DomShapeConnector */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DomCanvas = /** @class */ (function () {
    /**
     * TODO refatorar toda a classe para remover duplicidades
     */
    function DomCanvas(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.state = new State();
        this.setupEvents();
    }
    DomCanvas.prototype.getRandomInt = function (min, max) {
        /**
         * Original: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
         */
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    DomCanvas.prototype.clearCanvas = function (context) {
        if (context === void 0) { context = this.context; }
        context.clearRect(0, 0, this.width, this.height);
        this.state.shapes.forEach(function (s) {
            s.border.isBorderShown = false;
            s.connectButton.isConnectorShown = false;
        });
    };
    DomCanvas.prototype.clearAll = function () {
        this.clearCanvas();
        this.state.shapes.length = 0;
    };
    DomCanvas.prototype.clearShape = function (shape, context) {
        if (context === void 0) { context = this.context; }
        shape.border.removeShapeBorder(context);
        shape.connectButton.removeConnector(context);
        shape.removeButton.removeConnector(context);
        context.clearRect(shape.xAxis, shape.yAxis, shape.width, shape.height);
    };
    DomCanvas.prototype.removeShape = function (shape, context) {
        var _this = this;
        if (context === void 0) { context = this.context; }
        shape.border.removeShapeBorder(context);
        shape.connectButton.removeConnector(context);
        shape.removeButton.removeConnector(context);
        this.clearShape(shape);
        if (shape === this.state.selection) {
            this.state.selection = null;
        }
        this.state.shapes.forEach(function (s) {
            if (s.connections.includes(shape)) {
                _this.removeFromArray(shape, s.connections);
            }
        });
        this.removeFromArray(shape, this.state.shapes);
        this.clearCanvas();
        this.drawAll();
    };
    DomCanvas.prototype.removeFromArray = function (itemToRemove, array) {
        var indexToRemove = array.indexOf(itemToRemove);
        array.splice(indexToRemove, 1);
    };
    DomCanvas.prototype.drawShape = function (shape, context) {
        var _this = this;
        if (context === void 0) { context = this.context; }
        context.fillStyle = shape.colorCode.toString();
        context.strokeStyle = shape.colorCode.toString();
        var cornerRadius = shape.cornerRadius;
        context.lineJoin = 'round';
        context.lineWidth = cornerRadius;
        context.strokeRect(shape.xAxis + cornerRadius / 2, shape.yAxis + cornerRadius / 2, shape.width - cornerRadius, shape.height - cornerRadius);
        context.fillRect(shape.xAxis + cornerRadius / 2, shape.yAxis + cornerRadius / 2, shape.width - cornerRadius, shape.height - cornerRadius);
        var middleX = shape.width / 2;
        var connector = new DomShapeConnector();
        connector.xAxis = shape.xAxis + middleX - middleX / 4;
        connector.yAxis = shape.yAxis + 5 + shape.height;
        connector.height = 32;
        connector.width = 32;
        connector.iconPath = 'assets/images/icons/add_shape_icon.png';
        connector.onActionClick = function () {
            _this.eventsCallback.addNewNode(_this.getRandomInt(0, _this.width), _this.getRandomInt(0, _this.height));
        };
        var removable = new DomShapeConnector();
        removable.xAxis = shape.xAxis + middleX + middleX / 4;
        removable.yAxis = shape.yAxis + 5 + shape.height;
        removable.height = 32;
        removable.width = 32;
        removable.iconPath = 'assets/images/icons/remove_shape_icon.png';
        removable.onActionClick = function () {
            _this.eventsCallback.removeNode(shape);
            _this.removeShape(shape);
        };
        shape.connectButton = connector;
        shape.removeButton = removable;
        if (shape.label) {
            context.fillStyle = shape.textColor.toString();
            context.textAlign = 'center';
            context.font = '14pt Roboto';
            context.fillText(shape.label, shape.xAxis + shape.width / 2, shape.yAxis + shape.height / 2, shape.width);
        }
    };
    DomCanvas.prototype.linkShapes = function (originShape, targetShape, repaintOrigin, context) {
        if (repaintOrigin === void 0) { repaintOrigin = false; }
        if (context === void 0) { context = this.context; }
        var originMiddle = originShape.getConnectionPoints();
        var targetMiddle = targetShape.getConnectionPoints();
        context.lineWidth = 2;
        context.strokeStyle = '#cccccc';
        context.beginPath();
        context.moveTo(originMiddle.center.x, originMiddle.center.y);
        context.lineTo(targetMiddle.center.x, targetMiddle.center.y);
        context.closePath();
        context.stroke();
        if (repaintOrigin) {
            this.clearShape(originShape);
            this.drawShape(originShape);
        }
    };
    DomCanvas.prototype.drawAll = function (state) {
        var _this = this;
        if (state === void 0) { state = this.state; }
        if (state && state.shapes) {
            state.shapes.forEach(function (s) {
                s.connections.forEach(function (c) {
                    var toConnect = state.shapes.find(function (i) {
                        if (c.id && i.id) {
                            return i.id === c.id;
                        }
                        else {
                            return i.label === c.label;
                        }
                    });
                    _this.linkShapes(s, toConnect);
                });
            });
            state.shapes.forEach(function (s) {
                if (s === state.selection) {
                    s.border.drawShapeBorder(_this.context);
                }
                _this.drawShape(s);
                if (s === state.selection) {
                    s.connectButton.drawIcon(_this.context);
                    s.removeButton.drawIcon(_this.context);
                }
            });
        }
    };
    DomCanvas.prototype.restore = function () {
        this.context.restore();
    };
    DomCanvas.prototype.getMousePosition = function (canvas, mouseEvent) {
        var bounds = canvas.getBoundingClientRect();
        var scaleX = canvas.width / bounds.width;
        var scaleY = canvas.height / bounds.height;
        return {
            x: (mouseEvent.clientX - bounds.left) * scaleX,
            y: (mouseEvent.clientY - bounds.top) * scaleY
        };
    };
    DomCanvas.prototype.setupEvents = function () {
        var _this = this;
        this.canvas.addEventListener('mousedown', function (e) {
            var mouse = _this.getMousePosition(_this.canvas, e);
            var mx = mouse.x;
            var my = mouse.y;
            var shapes = _this.state.shapes;
            if (_this.state.selection &&
                !_this.state.selection.contains(mx, my) &&
                !_this.state.selection.removeButton.contains(mx, my) &&
                !_this.state.selection.connectButton.contains(mx, my)) {
                _this.state.selection.border.removeShapeBorder(_this.context);
                _this.state.selection.connectButton.removeConnector(_this.context);
                _this.state.selection.removeButton.removeConnector(_this.context);
                _this.drawShape(_this.state.selection);
                _this.state.selection = null;
            }
            if (_this.state.selection &&
                _this.state.selection.connectButton.contains(mx, my)) {
                _this.state.selection.connectButton.onActionClick();
            }
            else if (_this.state.selection &&
                _this.state.selection.removeButton.contains(mx, my)) {
                _this.state.selection.removeButton.onActionClick();
            }
            else {
                shapes.filter(function (s) { return s.contains(mx, my); }).forEach(function (mySel) {
                    _this.state.xDragOff = mx - mySel.xAxis;
                    _this.state.yDragOff = my - mySel.yAxis;
                    _this.state.selection = mySel;
                    _this.state.isValid = false;
                    _this.state.isDragging = true;
                    _this.state.selection.border.removeShapeBorder(_this.context);
                    _this.clearShape(_this.state.selection);
                    _this.state.selection.connectButton.removeConnector(_this.context);
                    _this.state.selection.removeButton.removeConnector(_this.context);
                    _this.state.selection.border.drawShapeBorder(_this.context);
                    _this.drawShape(_this.state.selection);
                    _this.state.selection.connectButton.drawIcon(_this.context);
                    _this.state.selection.removeButton.drawIcon(_this.context);
                });
            }
        }, true);
        this.canvas.addEventListener('dblclick', function (e) {
            var mouse = _this.getMousePosition(_this.canvas, e);
            var mx = mouse.x;
            var my = mouse.y;
            var shapes = _this.state.shapes;
            var interserctions = shapes.filter(function (s) { return s.contains(mx, my); });
            if (interserctions.length === 0) {
                _this.eventsCallback.addNewNode(mx, my);
            }
        }, true);
        this.canvas.addEventListener('selectstart', function (e) {
            e.preventDefault();
            return false;
        }, false);
        this.canvas.addEventListener('mousemove', function (e) {
            var mouse = _this.getMousePosition(_this.canvas, e);
            if (_this.state.isDragging && _this.state.selection) {
                _this.state.selection.xAxis = mouse.x - _this.state.xDragOff;
                _this.state.selection.yAxis = mouse.y - _this.state.yDragOff;
                _this.state.selection.setConnectorCoordinates();
                _this.state.selection.setBorderCoordinates();
                _this.state.isValid = false; // Something's dragging so we must redraw
                _this.clearCanvas();
                _this.drawAll();
            }
        }, true);
        this.canvas.addEventListener('mouseup', function (e) {
            _this.state.isDragging = false;
        }, true);
    };
    return DomCanvas;
}());

var State = /** @class */ (function () {
    function State() {
        this.isValid = false;
        this.isDragging = false;
        this.shapes = [];
        this.selection = null;
    }
    State.prototype.addShape = function (shape) {
        this.shapes.push(shape);
        this.isValid = false;
    };
    return State;
}());
var DomShape = /** @class */ (function () {
    function DomShape() {
    }
    DomShape.prototype.build = function (x, y, w, h, color, label, textColor, id) {
        this.xAxis = x;
        this.yAxis = y;
        this.width = w;
        this.height = h;
        this.id = id || '';
        this.colorCode = color;
        this.connections = [];
        this.label = label || '';
        this.cornerRadius = 20; // Default value
        this.textColor = textColor ? textColor : '#000000'; // Default value
        this.border = new DomShapeBorder(this.xAxis, this.yAxis, this.width, this.height, this.cornerRadius + 5);
        return this;
    };
    DomShape.prototype.setBorder = function (context) { };
    DomShape.prototype.getConnectionPoints = function () {
        // Middle point
        var xCenter = this.xAxis + this.width / 2;
        var yCenter = this.yAxis + this.height / 2;
        var center = { x: xCenter, y: yCenter };
        // Left Side Center
        var xCenterLeft = this.xAxis;
        var yCenterLeft = yCenter;
        var leftSideCenter = { x: xCenterLeft, y: yCenterLeft };
        // Right Side Center
        var xCenterRight = this.xAxis + this.width;
        var yCenterRight = yCenter;
        var rightSideCenter = { x: xCenterRight, y: yCenterRight };
        // Top Side Center
        var xCenterTop = xCenter;
        var yCenterTop = this.yAxis + this.height;
        var topSideCenter = { x: xCenterTop, y: yCenterTop };
        // Bottom Side Center
        var xCenterBottom = xCenter;
        var yCenterBottom = this.yAxis;
        var bottomSideCenter = { x: xCenterBottom, y: yCenterBottom };
        // Left Top Corner
        var xTopLeft = this.xAxis;
        var yTopLeft = yCenter + this.height;
        var leftTopCorner = { x: xTopLeft, y: yTopLeft };
        // Left Bottom Corner
        var xBottomLeft = this.xAxis;
        var yBottomLeft = this.yAxis;
        var leftBottomCorner = { x: xBottomLeft, y: yBottomLeft };
        // Right Top Corner
        var xTopRight = xCenterRight;
        var yTopRight = yCenterTop;
        var rightTopCorner = { x: xTopRight, y: yTopRight };
        // Right Bottom Corner
        var xBottomRight = xCenterRight;
        var yBottomRight = this.yAxis;
        var rightBottomCorner = { x: xBottomLeft, y: yBottomLeft };
        return {
            center: center,
            leftSideCenter: leftSideCenter,
            rightSideCenter: rightSideCenter,
            topSideCenter: topSideCenter,
            bottomSideCenter: bottomSideCenter,
            leftBottomCorner: leftBottomCorner,
            rightBottomCorner: rightBottomCorner,
            leftTopCorner: leftTopCorner,
            rightTopCorner: rightTopCorner
        };
    };
    DomShape.prototype.setConnectorCoordinates = function () {
        var middle = this.width / 2;
        this.connectButton.xAxis = this.xAxis + middle - middle / 4;
        this.connectButton.yAxis = this.yAxis + this.height / 2;
        this.removeButton.xAxis = this.xAxis + middle + middle / 4;
        this.removeButton.yAxis = this.yAxis + this.height / 2;
    };
    DomShape.prototype.setBorderCoordinates = function () {
        this.border.xAxis = this.xAxis - 2;
        this.border.yAxis = this.yAxis - 2;
    };
    DomShape.prototype.contains = function (clickX, clickY) {
        return (this.xAxis <= clickX &&
            this.xAxis + this.width >= clickX &&
            this.yAxis <= clickY &&
            this.yAxis + this.height >= clickY);
    };
    return DomShape;
}());

var DomShapeBorder = /** @class */ (function (_super) {
    __extends(DomShapeBorder, _super);
    function DomShapeBorder(x, y, w, h, cornerRadius) {
        var _this = _super.call(this) || this;
        _this.cornerRadius = cornerRadius;
        _this.xAxis = x - 2;
        _this.yAxis = y - 2;
        _this.width = w + 5;
        _this.height = h + 5;
        _this.colorCode = '#80778899';
        return _this;
    }
    DomShapeBorder.prototype.removeShapeBorder = function (context, shape) {
        if (shape === void 0) { shape = this; }
        context.clearRect(shape.xAxis - 1, shape.yAxis - 1, shape.width + 2, shape.height + 2);
        this.isBorderShown = false;
    };
    DomShapeBorder.prototype.drawShapeBorder = function (context, shape) {
        if (shape === void 0) { shape = this; }
        context.fillStyle = shape.colorCode.toString();
        context.strokeStyle = shape.colorCode.toString();
        var cornerRadius = shape.cornerRadius;
        context.lineJoin = 'round';
        context.lineWidth = cornerRadius;
        if (this.isBorderShown) {
            return;
        }
        else {
            context.strokeRect(shape.xAxis + cornerRadius / 2, shape.yAxis + cornerRadius / 2, shape.width - cornerRadius, shape.height - cornerRadius);
            context.fillRect(shape.xAxis + cornerRadius / 2, shape.yAxis + cornerRadius / 2, shape.width - cornerRadius, shape.height - cornerRadius);
            this.isBorderShown = true;
        }
    };
    return DomShapeBorder;
}(DomShape));

var DomShapeConnector = /** @class */ (function (_super) {
    __extends(DomShapeConnector, _super);
    function DomShapeConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomShapeConnector.prototype.drawConnector = function (context) {
        if (this.isConnectorShown) {
            return;
        }
        else {
            context.fillStyle = '#80778899';
            context.lineWidth = 1;
            context.font = 'bold 10pt Roboto';
            context.fillRect(this.xAxis, this.yAxis, this.width, this.height);
            this.isConnectorShown = true;
        }
    };
    DomShapeConnector.prototype.drawIcon = function (context, shape) {
        if (shape === void 0) { shape = this; }
        var imageObj = new Image();
        imageObj.onload = function () {
            context.drawImage(imageObj, shape.xAxis, shape.yAxis, shape.width, shape.height);
        };
        imageObj.src = this.iconPath
            ? this.iconPath.toString()
            : 'assets/images/icons/add_node_icon.png';
        shape.isConnectorShown = true;
    };
    DomShapeConnector.prototype.removeConnector = function (context) {
        if (this.isConnectorShown) {
            context.clearRect(this.xAxis, this.yAxis, this.width + 1, this.height + 1);
        }
        this.isConnectorShown = false;
    };
    return DomShapeConnector;
}(DomShape));



/***/ }),

/***/ "./src/app/util/read-only-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadOnlyUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");

var ReadOnlyUtil = /** @class */ (function () {
    function ReadOnlyUtil() {
    }
    ReadOnlyUtil.RequestContentTypes = {
        FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
        MULTIPART_FORM_DATA: 'multipart/form-data',
        APPLICATION_JSON: 'application/json'
    };
    ReadOnlyUtil.RequestPaths = {
        SERVER_ROOT: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].server,
        SERVER_FILES: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].files,
        PROJECT: 'projects',
        STUDENT: 'students',
        CLASS: 'classes',
        MONITOR: 'monitors',
        MINDMAP: 'mindmap',
        PHOTOBOARD: 'photoboards',
        IMAGE: 'images'
    };
    return ReadOnlyUtil;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    server: 'http://127.0.0.1:9200/dom',
    files: 'http://127.0.0.1:9200/files'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
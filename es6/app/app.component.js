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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("./share/data.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = {
            chart: {
                // type: 'discreteBarChart',
                type: 'multiBarChart',
                height: 285,
                width: 485,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function (d) { return d.time; },
                y: function (d) { return d.value; },
                showValues: false,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                duration: 350,
                reduceXTicks: true,
                rotateLabels: 0,
                showControls: false,
                groupSpacing: 0.1,
                xAxis: {
                    axisLabel: ''
                },
                yAxis: {
                    axisLabel: '',
                    axisLabelDistance: -10
                }
            }
        };
        this.dataService.getData().then(function (r) {
            _this.data =
                [
                    {
                        "key": "Cumulative Return",
                        "values": r.values
                    }
                ];
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<h1>Hello world!</h1>\n    <ul>\n      <div>\n        <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n      </div>\n    </ul>\n    ",
            // styleUrls: ['../../node_modules/nvd3/build/nv.d3.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
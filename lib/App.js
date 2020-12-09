"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var componentGate_1 = require("./componentGate");
var App = (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            "...",
            React.createElement(componentGate_1.Fetch, null)));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var SecureRandomGenerator = /** @class */ (function (_super) {
    tslib.__extends(SecureRandomGenerator, _super);
    function SecureRandomGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureRandomGenerator.prototype.generateSecureRandom = function (noOfLen, randType) { return core.cordova(this, "generateSecureRandom", {}, arguments); };
    SecureRandomGenerator.pluginName = "SecureRandomGenerator";
    SecureRandomGenerator.plugin = "icp-secure-random-generator";
    SecureRandomGenerator.pluginRef = "cordova.plugins.SecureRandomGenerator";
    SecureRandomGenerator.repo = "";
    SecureRandomGenerator.install = "";
    SecureRandomGenerator.installVariables = [];
    SecureRandomGenerator.platforms = ["Android"];
    SecureRandomGenerator.decorators = [
        { type: core$1.Injectable }
    ];
    return SecureRandomGenerator;
}(core.AwesomeCordovaNativePlugin));

exports.SecureRandomGenerator = SecureRandomGenerator;

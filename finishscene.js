define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.FinishScene = void 0;
    var FinishScene = /** @class */ (function () {
        function FinishScene() {
            this.scene = this;
            this.sceneName = "Finish!!";
            document.getElementById("header").innerHTML = this.sceneName;
            document.getElementById("main").innerHTML = "";
        }
        FinishScene.prototype.renderer = function () {
            console.log(this.sceneName);
            return this.scene;
        };
        return FinishScene;
    }());
    exports.FinishScene = FinishScene;
});

define(["require", "exports", "./contentscene"], function (require, exports, contentscene_1) {
    "use strict";
    exports.__esModule = true;
    exports.TitleScene = void 0;
    var TitleScene = /** @class */ (function () {
        function TitleScene() {
            var _this = this;
            this.scene = this;
            this.sceneName = "Title!!";
            this.nextButton = document.createElement("button");
            this.nextButton.textContent = "次へ";
            this.nextButton.addEventListener("click", function (e) {
                _this.scene = new contentscene_1.ContentScene();
            });
            document.getElementById("header").innerHTML = this.sceneName;
            document.getElementById("main").innerHTML = "";
            document.getElementById("main").appendChild(this.nextButton);
        }
        TitleScene.prototype.renderer = function () {
            return this.scene;
        };
        return TitleScene;
    }());
    exports.TitleScene = TitleScene;
});

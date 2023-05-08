define(["require", "exports", "./finishscene", "./titlescene"], function (require, exports, finishscene_1, titlescene_1) {
    "use strict";
    exports.__esModule = true;
    exports.ContentScene = void 0;
    var ContentScene = /** @class */ (function () {
        function ContentScene() {
            var _this = this;
            this.time = 0.0;
            this.scene = this;
            this.sceneName = "Content!!";
            this.nextButton = document.createElement("button");
            this.nextButton.textContent = "次へ";
            this.nextButton.addEventListener("click", function (e) {
                _this.scene = new titlescene_1.TitleScene();
            });
            this.finishButton = document.createElement("button");
            this.finishButton.textContent = "終わり";
            this.finishButton.addEventListener("click", function (e) {
                _this.scene = new finishscene_1.FinishScene();
            });
            this.sceneNameElement = document.getElementById("header");
            this.sceneNameElement.innerHTML = this.sceneName;
            this.sceneNameElement.style.position = "absolute";
            document.getElementById("header").innerHTML = this.sceneName;
            document.getElementById("main").innerHTML = "";
            document.getElementById("main").appendChild(this.nextButton);
            document.getElementById("main").appendChild(this.finishButton);
        }
        ContentScene.prototype.renderer = function () {
            this.time += 0.04;
            this.sceneNameElement.style.left = 200 + 100 * Math.cos(this.time) + "px";
            this.sceneNameElement.style.top = 200 + 100 * Math.sin(this.time) + "px";
            return this.scene;
        };
        return ContentScene;
    }());
    exports.ContentScene = ContentScene;
});

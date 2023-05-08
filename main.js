define(["require", "exports", "./titlescene", "./finishscene"], function (require, exports, titlescene_1, finishscene_1) {
    "use strict";
    exports.__esModule = true;
    var scene = new titlescene_1.TitleScene();
    var loopId;
    function loop() {
        if (scene instanceof finishscene_1.FinishScene) {
            cancelAnimationFrame(loopId);
        }
        else {
            loopId = requestAnimationFrame(loop);
        }
        scene = scene.renderer();
    }
    loop();
});

import { BaseScene } from "./basescene";
import { TitleScene } from "./titlescene";
import { FinishScene } from "./finishscene";

/*
# 各シーンクラスをループして管理します。
## フィニッシュシーンが返り値で返ってきた場合はプログラムを終了します。
## それ以外は、ループを続けます。
*/
var scene: BaseScene = new TitleScene();
var loopId;
function loop(): void {
    if (scene instanceof FinishScene) {
        cancelAnimationFrame(loopId);
    } else {
        loopId = requestAnimationFrame( loop );
    }
    scene = scene.renderer();        
}
loop();

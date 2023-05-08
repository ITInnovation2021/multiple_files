import { BaseScene } from "./basescene";

/*
# フィニッシュシーンクラスは、ユーザーが最後に訪れるシーンです。
## ヘッダータグでタイトル名を表示させます。
## レンダラーメソッドがシーン変数を返しており、フィニッシュシーンに切り替わります。
*/
export class FinishScene implements BaseScene {
    scene: BaseScene;
    sceneName: string;
    constructor() {
        this.scene = this;
        this.sceneName = "Finish!!";
        
        (document.getElementById("header") as HTMLElement).innerHTML = this.sceneName;
        (document.getElementById("main") as HTMLElement).innerHTML = "";
    }
    renderer(): BaseScene {
        console.log(this.sceneName);
        return this.scene;
    }
}
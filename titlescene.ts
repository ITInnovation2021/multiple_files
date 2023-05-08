import { BaseScene } from "./basescene";
import { ContentScene } from "./contentscene";

/*
# タイトルシーンクラスは、ユーザーが最初に訪れるシーンです。
## ヘッダータグでタイトル名を表示させます。
## メインタグで「次へ」ボタンを表示させて、ボタンを押すとコンテンツシーンに切り替わります。
## レンダラーメソッドがシーン変数を返しており、返しているシーンによって、シーンが切り替わる場合があります。
*/
export class TitleScene implements BaseScene {
    scene: BaseScene;
    sceneName: string;
    nextButton: HTMLButtonElement;
    constructor() {
        this.scene = this;
        this.sceneName = "Title!!";
        this.nextButton = document.createElement("button");
        this.nextButton.textContent = "次へ";
        this.nextButton.addEventListener("click", (e) => {
            this.scene = new ContentScene();
        });
        (document.getElementById("header") as HTMLElement).innerHTML = this.sceneName;
        (document.getElementById("main") as HTMLElement).innerHTML = "";
        (document.getElementById("main") as HTMLElement).appendChild( this.nextButton );
    }
    renderer(): BaseScene {
        return this.scene;
    }
}
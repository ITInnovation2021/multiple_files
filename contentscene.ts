import { BaseScene } from "./basescene";
import { TitleScene } from "./titlescene";
import { FinishScene } from "./finishscene";

/*
# コンテンツシーンクラスは、アプリの主な内容が表示されるクラスです。
## ヘッダータグでタイトル名を表示させます。
## メインタグで「次へ」ボタンと「終わり」ボタンを表示させます。
### 「次へ」ボタンを押すとタイトルシーンに切り替わります。
### 「終わり」ボタンを押すとフィニッシュシーンに切り替わり、アプリが終了します。
## レンダラーメソッドがシーン変数を返しており、返しているシーンによって、シーンが切り替わる場合があります。
### レンダラーメソッド内でタイトル名を回転させています。
*/
export class ContentScene implements BaseScene {
    scene: BaseScene;
    sceneName: string;
    sceneNameElement: HTMLElement;
    nextButton: HTMLButtonElement;
    finishButton: HTMLButtonElement;
    time: number;
    constructor() {
        this.time = 0.0;
        this.scene = this;
        this.sceneName = "Content!!";
        this.nextButton = document.createElement("button");
        this.nextButton.textContent = "次へ";
        this.nextButton.addEventListener("click", (e) => {
            this.scene = new TitleScene();
        });

        this.finishButton = document.createElement("button");
        this.finishButton.textContent = "終わり";
        this.finishButton.addEventListener("click", (e) => {
            this.scene = new FinishScene();
        });

        this.sceneNameElement = (document.getElementById("header") as HTMLElement);
        this.sceneNameElement.innerHTML = this.sceneName;
        this.sceneNameElement.style.position = "absolute";

        (document.getElementById("header") as HTMLElement).innerHTML = this.sceneName;
        (document.getElementById("main") as HTMLElement).innerHTML = "";
        (document.getElementById("main") as HTMLElement).appendChild( this.nextButton );
        (document.getElementById("main") as HTMLElement).appendChild( this.finishButton );
    }
    renderer(): BaseScene {
        this.time += 0.04;
        this.sceneNameElement.style.left = 200 + 100 * Math.cos(this.time) + "px";
        this.sceneNameElement.style.top =  200 + 100 * Math.sin(this.time) + "px";

        return this.scene;
    }
}
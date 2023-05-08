export interface BaseScene {
    scene: BaseScene;
    sceneName: string;
    renderer(): BaseScene;
}
/// <reference path="_references.ts"/>
// IIFE -- Immediately Invoked Function Expression
(function () {
    //these should also be enclosed, but var's poorly behaved
    //var likes to hoist up everything to the top, make it GLOBAL
    //so we're using let instead so variables stay in-scope
    //and const, too
    //js types
    //number
    //string
    //boolean
    //object
    //any (loose typing - NEVER use)
    //and some others
    //js does type inference, it's all implicit
    /* STYLE GUIDE
     * we're using _varname to designate a constant
     */
    /* wouldn't it be nice if we could specify return types, etc. in
     * javascript?
     * that's where either Babel or Typescript come in
     * hence, change extension to .ts
     * problem: browsers don't understand Typescript
     * have to do transpile
     */
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    var assetManager;
    var assetManifest;
    assetManifest = [
        { id: "clickMeButton", src: "./Assets/images/clickMeButton.png" }
    ];
    // preloads assets
    function Init() {
        console.log("Initialization Started...");
        assetManager = new createjs.LoadQueue(); // creates the assetManager object
        assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons, very expensive
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update(); // redraws the stage
    }
    function clickMeButtonClick() {
        helloLabel.text = "Clicked!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }
    function Main() {
        console.log("Game Started...");
        helloLabel = new objects.Label("Hello, World!", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        clickMeButton = new objects.Button(assetManager, "clickMeButton", 320, 340);
        stage.addChild(clickMeButton);
        clickMeButton.on("click", clickMeButtonClick);
    }
    window.onload = Init; // Init is event handler
})();

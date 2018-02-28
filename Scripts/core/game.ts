/// <reference path="_references.ts"/>

// IIFE -- Immediately Invoked Function Expression
(function(){
    let canvas:HTMLElement = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:objects.Label;
    let clickMeButton:objects.Button;
    let assetManager:createjs.LoadQueue;
    let assetManifest:any[];

    assetManifest = [
        {id: "clickMeButton", src:"./Assets/images/clickMeButton.png"}
    ];

    // preloads assets
    function Init():void {
        console.log("Initialization Started...");
        assetManager = new createjs.LoadQueue(); // creates the assetManager object
        assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }

    function Start():void {
        console.log("Starting Application...");

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons, very expensive
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);

        objects.Game.currentScene = config.Scene.START;
        Main();
    }

    function Update():void {

        // if the scene that is playing returns another current scene
        // then call Main again and switch the scene
        
        stage.update(); // redraws the stage
    }

    function Main():void {
        switch(objects.Game.currentScene) {
            case config.Scene.START:
            // remove all current objects from the stage
            // instantiate a new scene object
            // add the new scene object to stage
            break;
            case config.Scene.PLAY:
            // do some other stuff
            break;
            case config.Scene.OVER:
            // do the final stuff
            break;
        }
    }

    window.onload = Init; // Init is event handler

})()
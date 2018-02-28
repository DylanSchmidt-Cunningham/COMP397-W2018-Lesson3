/// <reference path="_references.ts"/>

// IIFE -- Immediately Invoked Function Expression
(function(){
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
    let canvas:HTMLElement = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:objects.Label;
    let clickMeButton:objects.Button;

    function Init():void {
        console.log("Initialization Started...");

        Start();
    }

    function Start():void {
        console.log("Starting Application...");

        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons, very expensive
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }

    function Update():void {
        stage.update(); // redraws the stage
    }

    function clickMeButtonClick():void {
        helloLabel.text = "Clicked!";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }

    function Main():void {
        console.log("Game Started...");

        helloLabel = new objects.Label("Hello, World!", "40px",
         "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);

        clickMeButton = new objects.Button(
            "./Assets/images/clickMeButton.png", 320, 340);
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        stage.addChild(clickMeButton);
        clickMeButton.on("click", clickMeButtonClick);
    }

    window.onload = Init; // Init is event handler

})()
module scenes {
    export class PlayScene extends objects.Scene {
        // Private Instance Variables
        private _playLabel:objects.Label;
        private _nextButton:objects.Button;
        private _backButton:objects.Button;

        // Public Properties

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Private Methods
        private _nextButtonClick():void {
            objects.Game.currentScene = config.Scene.OVER;
        }

        private _backButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
        }
        
        // Public Methods

        // Initialize Game Variables and objects
        public Start():void {
            this._playLabel = new objects.Label(
             "Game Playing", "40px", "Consolas", "#000000", 320, 240, true);
            this._nextButton = new objects.Button(
             this.assetManager, "nextButton", 500, 340);
            this._backButton = new objects.Button(
             this.assetManager, "backButton", 140, 340);
            this.Main();
        }

        public Update():void {
        
        }

        // This is where the fun happens
        public Main():void {
            // add the play label to the scene
            this.addChild(this._playLabel);

            // add the nextButton to the scene
            this.addChild(this._nextButton);

            // add the backButton to the scene
            this.addChild(this._backButton);

            // event listeners
            this._nextButton.on("click", this._nextButtonClick);
            this._backButton.on("click", this._backButtonClick);
        }
    }
}
var Scene1 = (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Scene1,p=c.prototype;
    p.onAddToStage = function (event) {
        this.book = new Book();
        this.book.width = 681;
        this.book.anchorOffsetX = this.book.width / 2;
        this.book.x = Main.instance.stageW / 2;
        this.book.y = 60;
        this.book['_y'] = 60;
        this.addChild(this.book);
        this.title = Utils.createBitmapByName("title_png");
        this.title.anchorOffsetX = this.title.width / 2;
        this.title.x = Main.instance.stageW / 2;
        this.title.y = 488 + this.title.height / 2;
        this.title['_y'] = 488;
        this.title.alpha = 0;
        this.addChild(this.title);
        this.titleText = Utils.createBitmapByName("text_png");
        this.titleText.x = Main.instance.stageW / 2 - this.titleText.width / 4;
        this.titleText.anchorOffsetX = this.titleText.width / 2;
        this.titleText.y = 648 + this.titleText.height / 2;
        this.titleText['_y'] = 648;
        this.titleText.alpha = 0;
        this.addChild(this.titleText);
        this.arrowSprite = new egret.Sprite();
        this.addChild(this.arrowSprite);
        this.arrow = Utils.createBitmapByName('arrow_png');
        this.arrowSprite.addChild(this.arrow);
        this.arrowText = Utils.createBitmapByName('arrow_text_png');
        this.arrowText.y = 57;
        this.arrowText.anchorOffsetX = this.arrowText.width / 2;
        this.arrowText.x = 20;
        this.arrowSprite.addChild(this.arrowText);
        this.arrowSprite.x = Main.instance.stageW / 2;
        this.arrowSprite.anchorOffsetX = this.arrowSprite.width / 2;
        this.arrowSprite.y = 778;
        this.arrowSprite['_y'] = 778;
        this.setAnimaion();
    };
    p.setAnimaion = function () {
        egret.Tween.get(this.title).wait(300).to({ alpha: 1, y: 488 }, 800, egret.Ease.backInOut);
        egret.Tween.get(this.titleText).wait(800).to({ alpha: 1, y: 648 }, 800, egret.Ease.backInOut);
        var startY = this.arrow.y;
        var handler = function () {
            egret.Tween.get(this.arrow)
                .to({ y: startY + 30 }, 600, egret.Ease.circIn)
                .to({ y: startY }, 600, egret.Ease.circOut)
                .wait(200)
                .call(handler, this);
        };
        handler.call(this);
    };
    p.setScrollAnim = function (scrollTop) {
        var ratio = scrollTop / (Main.instance.stageH / 2);
        var opacity = Math.max(0, 1 - ratio);
        var scale = 1 + ratio * 0.5;
        var scrollDist = scrollTop * 0.6;
        this.book.scaleX = this.book.scaleY = scale;
        this.book.y = this.book['_y'] + scrollDist;
        this.title.alpha = opacity;
        this.title.y = this.title['_y'] + scrollDist;
        this.titleText.alpha = opacity;
        this.titleText.y = this.titleText['_y'] + scrollDist;
        this.arrowSprite.alpha = opacity;
        this.arrowSprite.y = this.arrowSprite['_y'] + scrollDist;
    };
    return Scene1;
}(egret.Sprite));
egret.registerClass(Scene1,'Scene1');


class Main extends GameState {
    intro: GameState;

    entry(args?: object): void {
        this.intro = new Intro({duration: 1500, fadeIn: 1000, fadeOut: 500});
    }
}   

class Intro extends GameState {
    select: GameState;

    entry(args?: {duration: number, fadeIn: number, fadeOut: number}) {
        let title = this.create(assets.image`IconSargeGames`, SpriteKind.Icon);
        scene.setBackgroundColor(Palette.Dark);

        color.startFade(color.Black, color.originalPalette, args.fadeIn);
        pause(args.duration);
        color.startFade(color.originalPalette, color.Black, args.fadeOut);
        pause(args.fadeOut + 500);

        color.startFade(color.Black, color.originalPalette, 0);
        scene.setBackgroundColor(Palette.Transparent);
        title.destroy();

        this.select = new LanguageSelect();
    }
}

class LanguageSelect extends GameState {
    index: number;
    lang: Language;
    flag: Sprite;
    text: TextSprite;
    leftArrow: Sprite;
    rightArrow: Sprite;

    entry(args?: object): void {
        scene.setBackgroundColor(Palette.Indigo);
        this.index = 0;
        this.lang = languages[this.index];
        
        this.flag = this.create(this.lang.flag);
        animation.runImageAnimation(this.flag, this.lang.anim, 100, true);
        this.flag.scale = 2;

        this.text = this.createText(this.lang.name, Palette.DarkPurple, Palette.Indigo);
        this.text.x = 80;
        this.text.top = this.flag.bottom + 4;

        this.leftArrow = this.create(assets.image`IconFlagArrowLeft`);
        this.leftArrow.right = this.flag.left - 8;
        this.leftArrow.y = this.flag.y;

        this.rightArrow = this.create(assets.image`IconFlagArrowRight`);
        this.rightArrow.left = this.flag.right + 8;
        this.rightArrow.y = this.flag.y;
    }
}
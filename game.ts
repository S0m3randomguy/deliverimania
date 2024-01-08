
class GameState {
    protected sprites: Sprite[];
    protected active: boolean;

    constructor(args: object) {
        this.sprites = [];
        this.active = true;

        timer.background(() => {
            this.entry(args);
        })

        game.onUpdate(() => {
            timer.background(() => {
                if (this.active) this.update();
            })
        })
    }

    entry(args?: object): void {
        // GameState entry point
    }

    protected update(): void {
        // GameState update method
    }

    protected create(img: Image, kind?: number): Sprite {
        let sprite = sprites.create(img, kind)
        this.sprites.push(sprite);
        return sprite;
    }

    close(): void {
        this.sprites.map((value) => value.destroy());
        this.active = false;
    }
}

class Main extends GameState {
    intro: GameState;

    entry(args: { version: string }): void {
        this.intro = new Intro({ duration: 1500, fadeIn: 1000, fadeOut: 500 });
    }
}

class Intro extends GameState {
    entry(args: {duration: number, fadeIn: number, fadeOut: number}) {
        let title = this.create(assets.image`IconSargeGames`, SpriteKind.Icon);
        scene.setBackgroundColor(Palette.Dark);

        color.startFade(color.Black, color.originalPalette, args.fadeIn);
        pause(args.duration);
        color.startFade(color.originalPalette, color.Black, args.fadeOut);
    }
}


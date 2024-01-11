
class GameState {
    protected sprites: Sprite[];
    protected active: boolean;

    constructor(args?: object) {
        this.sprites = [];
        this.active = true;

        this.entry(args);
        game.onUpdate(() => {
            if (this.active) this.update();
        })
    }

    entry(args?: object): void {
        // GameState entry point
    }

    protected update(): void {
        // GameState update method
    }

    protected create(img?: Image, kind?: number): Sprite {
        let sprite = sprites.create(img, kind)
        return this.createFrom(sprite);
    }

    protected createFrom(sprite: Sprite): Sprite {
        this.sprites.push(sprite);
        return sprite;
    }

    protected createText(text: string, bg: number, fg: number): TextSprite {
        let sprite = textsprite.create(text, bg, fg);
        this.sprites.push(sprite);
        return sprite;
    }

    close(): void {
        this.sprites.map((value) => value.destroy());
        this.active = false;
    }
}
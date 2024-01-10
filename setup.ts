
namespace SpriteKind {
    export const Icon = SpriteKind.create();
}

namespace scene {
    export function clearBackground(): void {
        scene.setBackgroundImage(
            image.create(scene.screenWidth(), scene.screenHeight())
        )
    }
}

enum Palette {
    Transparent,
    White,
    Red,
    Pink,
    Orange,
    Yellow,
    Turqoise,
    Green,
    Blue,
    LightBlue,
    Magenta,
    Indigo,
    DarkPurple,
    Grey,
    Bordeaux,
    Dark
}
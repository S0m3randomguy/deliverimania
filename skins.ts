
interface Skin {
    name: string;
    skin: Image;
    icon: Image;
    unlock: number;
    price: number;
}

const skins: Skin[] = [
    {
        name: "Red Paint",
        skin: assets.image`SkinRed`,
        icon: assets.image`IconSkinRed`,
        unlock: 0,
        price: 0
    },
    {
        name: "Yellow Paint",
        skin: assets.image`SkinYellow`,
        icon: assets.image`IconSkinYellow`,
        unlock: 0,
        price: 200
    },
    {
        name: "Blue Paint",
        skin: assets.image`SkinBlue`,
        icon: assets.image`IconSkinBlue`,
        unlock: 0,
        price: 200
    },
    {
        name: "Green Paint",
        skin: assets.image`SkinGreen`,
        icon: assets.image`IconSkinGreen`,
        unlock: 0,
        price: 200
    },
    {
        name: "Pink Paint",
        skin: assets.image`SkinPink`,
        icon: assets.image`IconSkinPink`,
        unlock: 100,
        price: 500
    },
    {
        name: "White Paint",
        skin: assets.image`SkinWhite`,
        icon: assets.image`IconSkinWhite`,
        unlock: 200,
        price: 500
    },
    {
        name: "Black Paint",
        skin: assets.image`SkinBlack`,
        icon: assets.image`IconSkinBlack`,
        unlock: 500,
        price: 750
    },
    {
        name: "Checkered",
        skin: assets.image`SkinCheckered`,
        icon: assets.image`IconSkinCheckered`,
        unlock: 750,
        price: 1000
    },
    {
        name: "Bee",
        skin: assets.image`SkinBee`,
        icon: assets.image`IconSkinBee`,
        unlock: 1000,
        price: 1500
    },
    {
        name: "USA Flag",
        skin: assets.image`SkinFlagUSA`,
        icon: assets.image`IconSkinFlagUSA`,
        unlock: 1500,
        price: 4000
    },
    {
        name: "Rainbow",
        skin: assets.image`SkinRainbow`,
        icon: assets.image`IconSkinRainbow`,
        unlock: 2000,
        price: 5000
    }
]
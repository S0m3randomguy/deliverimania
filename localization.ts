
interface Language {

    // Language properties
    name: string;
    code: string;
    flag: Image;
    anim: Image[];

    /**
     * Strings that label a value
     * (eg. Money: $100)
     */
    labels: {
        highscore: string;
        deliveries: string;
        money: string;
        unlock: string;
        cost: string;
    }

    /**
     * Strings that indicate a state
     * (eg. Locked, owned etc.)
     */
    indicators: {
        selected: string;
        owned: string;
        locked: string;
    }

    /**
     * Strings that provide help
     * (eg. Press A to start)
     */
    tooltips: {
        pressA: string;
        pressB: string;
        skins: string;
    }

    /**
     * Strings that appear after an action
     * (eg. New skin unlocked)
     */
    splashes: {
        notEnoughMoney: string;
        skinLocked: string;
        skinUnlocked: string;
    }

    /**
     * Strings that describe an action
     * (eg. on buttons)
     */
    actions: {
        buy: string;
    }
}
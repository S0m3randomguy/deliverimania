
const languages: Language[] = [
    // English (US)
    {
        name: "English (US)",
        code: "en-US",
        flag: assets.image`FlagUS`,
        anim: assets.animation`AnimatedFlagUS`,

        labels: {
            highscore: "Highscore",
            deliveries: "Deliveries",
            money: "Money",
            unlock: "Required",
            cost: "Cost"
        },

        indicators: {
            selected: "Selected",
            owned: "Owned",
            locked: "Locked"
        },

        tooltips: {
            pressA: "Press A",
            pressB: "Press B to return",
            skins: "Skins"
        },

        splashes: {
            notEnoughMoney: "Not enough money",
            skinLocked: "This skin is locked",
            skinUnlocked: "New skin unlocked!"
        },

        actions: {
            buy: "Buy"
        }
    },

    // Spanish (ES)
    {
        name: "Spanish",
        code: "es-ES",
        flag: assets.image`FlagES`,
        anim: assets.animation`AnimatedFlagES`,

        labels: {
            highscore: "Puntaje Récord",
            deliveries: "Entregas",
            money: "Dinero",
            unlock: "Requerido",
            cost: "Precio"
        },

        indicators: {
            selected: "Seleccionado",
            owned: "Propiedad",
            locked: "Bloqueado"
        },

        tooltips: {
            pressA: "Pulsa el botón A",
            pressB: "Toca B para volver",
            skins: "Trajes"
        },

        splashes: {
            notEnoughMoney: "Dinero insuficiente",
            skinLocked: "Este traje está cerrado",
            skinUnlocked: "Traje nuevo desbloqueado!"
        },

        actions: {
            buy: "Comprar"
        }
    },

    // Greek
    {
        name: "Greek",
        code: "el",
        flag: assets.image`FlagEL`,
        anim: assets.animation`AnimatedFlagEL`,

        labels: {
            highscore: "Υψηλή βαθμολογία",
            deliveries: "Παραδόθηκε",
            money: "χρήματα",
            unlock: "Απαιτείται",
            cost: "κόστος"
        },

        indicators: {
            selected: "επιλεγμένο",
            owned: "Ιδιοκτήτης",
            locked: "Κλειδωμένο"
        },

        tooltips: {
            pressA: "αφή A",
            pressB: "Πατήστε B για επιστροφή",
            skins: "Χρωματιστά"
        },

        splashes: {
            notEnoughMoney: "Οχι αρκετά χρήματα",
            skinLocked: "Αυτό το χρώμα είναι κλειδωμένο",
            skinUnlocked: "Ξεκλείδωτο νέο χρώμα!"
        },

        actions: {
            buy: "Αγορά"
        }
    },

    // Croatian
    {
        name: "Croatian",
        code: "hr",
        flag: assets.image`FlagHR`,
        anim: assets.animation`AnimatedFlagHR`,

        labels: {
            highscore: "Najbolji rezultat",
            deliveries: "Broj dostava",
            money: "Novac",
            unlock: "Potrebno",
            cost: "Cijena"
        },

        indicators: {
            selected: "Odabrano",
            owned: "U vlasništvu",
            locked: "Zaključano"
        },

        tooltips: {
            pressA: "Pritisni A",
            pressB: "Pritisni B za povratak",
            skins: "Izgledi"
        },

        splashes: {
            notEnoughMoney: "Nema dovoljno novaca",
            skinLocked: "Ovaj izgled je zaključan",
            skinUnlocked: "Novi izgled otključan!"
        },

        actions: {
            buy: "Kupi"
        }
    },

    // Chinese (Simplified)
    {
        name: "Chinese (Simplified)",
        code: "zh-CN",
        flag: assets.image`FlagCN`,
        anim: assets.animation`AnimatedFlagCN`,

        labels: {
            highscore: "最高分",
            deliveries: "配送",
            money: "钱",
            unlock: "解锁条件",
            cost: "价格"
        },

        indicators: {
            selected: "已选择",
            owned: "已获得",
            locked: "未解锁"
        },

        tooltips: {
            pressA: "按A键",
            pressB: "按B键返回",
            skins: "皮肤"
        },

        splashes: {
            notEnoughMoney: "金钱不足",
            skinLocked: "皮肤未解锁",
            skinUnlocked: "解锁新皮肤!"
        },

        actions: {
            buy: "买"
        }
    }
]
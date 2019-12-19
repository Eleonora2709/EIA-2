namespace FirstFantasy_4 {
    export interface DataInterface {
        name: string;
        sex: string;
        race: string;
        class: string;
        height: number;
        weight: number;
        
    }

    export interface Property {
        type: string;
        name: string;
        content?: string[];
        attributes?: Attribute[];
    }

    interface Attribute {
        key: string;
        value: string;
    }

    export let properties: Property[] = [
        { type: "text", name: "name" },
        { type: "radio", name: "sex", content: ["male", "female", "divers", "apache"] },
        //Select Race
        { type: "select", name: "race", content: ["Human", "Orc", "Elf", "Tauren", "Gnome"] },

        //Select Class
        { type: "select", name: "class", content: ["Warrior", "Shaman", "Bard", "Dragonknight", "Paladin"] },

        { type: "number", name: "height", attributes: [{ key: "min", value: "130" }, { key: "max", value: "210" }, { key: "value", value: "170" }] },
        { type: "range", name: "weight", attributes: [{ key: "min", value: "40" }, { key: "max", value: "180" }, { key: "value", value: "70" }, { key: "step", value: "1" }] },

    ];

}
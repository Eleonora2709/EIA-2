namespace editor {

    // Interface zu Zusatz wird erstellt
    export interface Additive {
        name: string;
        gewicht: number;
    }

    // Interface zu Gruppe von Zusätzen wird erstellt -> Interface Zusatz wird zugewiesen
    export interface GroupOfAdditives {
        [name: string]: Additive[]
    }

    // alle Gruppen von Zusätzen wird dem Interface zugewiesen
    export let groupsOfAdditives: GroupOfAdditives = {

        "waffen": [
            { name: "Dolch", gewicht: 3 },
            { name: "Schwert", gewicht: 6 },
            { name: "Pistole", gewicht: 4 },
            { name: "Zauberstab", gewicht: 1 },
            { name: "Axt", gewicht: 7.5 },
            { name: "Sperr", gewicht: 4 },
            { name: "Bogen", gewicht: 8 },
            { name: "Gewehr", gewicht: 13 }
        ],

        "accessoirs": [
            {name: "Hut", gewicht: 0.5},
            {name: "Rucksack", gewicht: 6.5},
            {name: "Ring", gewicht: 0.1},
            {name: "Kette", gewicht: 0.2}
        ]

    };

    export interface Range {
        category: string;
        min: number;
        max: number;
        step: number;
    }

    export interface GroupOfRanges {
        [name: string]: Range[]
    }

    export let groupsOfRanges: GroupOfRanges ={

        "gewicht": [
            {category:"slider", min: 50, max: 300, step: 0.5}
        ],
        "größe": [
            {category:"slider", min: 0.5, max: 3, step: 0.5}
        ]
    };

    export interface Selection {
        value:string;
    }
    export interface GroupOfSelections {
        [name: string]: Selection[]
    }
    export let groupsOfSelections: GroupOfSelections ={
        "Geschlecht": [
            {value:"Frau"},
            {value:"Mann"},
            {value:"Divers"}
        ],
        "Klasse": [
            {value:"Wahrsager"},
            {value:"Zauberer"},
            {value:"Helfer"},
            {value:"Dieb"},
            {value:"Krieger"}
        ],
        "Rasse": [
            {value:"Zwerg"},
            {value:"Elf"},
            {value:"Einhorn"},
            {value:"Fee"},
            {value:"Gnom"}
        ],
        "Begleitung":[
            {value:"Wolf"},
            {value:"Eichhörnchen"},
            {value:"Engel"},
            {value:"Drache"}
        ],
        "Feind": [
            {value:"Mensch"},
            {value:"Okr"},
            {value:"Schlange"},
            {value:"Eule"},
            {value:"Drache"}
        ],
        "Herkunft": [
            {value: "Mittelerde"},
            {value:"Zauberwald"},
            {value:"Regensdorf"},
            {value:"Blumenschlucht"}
        ]
    };

    export interface InputName {
        type:string;
    }
    export interface GroupOfInputs {
        [name: string]: InputName[]
    }
    export let groupsOfInputs: GroupOfInputs ={
        "backstory":[
            {type: "textfield"}
        ],
        "Geburtsdatum":[
            {type: "date"}
        ]
    };
    export interface Color {
        type:string;
    }
    export interface GroupOfColors {
        [name: string]: Color[]
    }
    export let groupsOfColors: GroupOfColors ={
};
}

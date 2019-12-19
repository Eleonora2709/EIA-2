var editor;
(function (editor) {
    // alle Gruppen von Zusätzen wird dem Interface zugewiesen
    editor.groupsOfAdditives = {
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
            { name: "Hut", gewicht: 0.5 },
            { name: "Rucksack", gewicht: 6.5 },
            { name: "Ring", gewicht: 0.1 },
            { name: "Kette", gewicht: 0.2 }
        ]
    };
    editor.groupsOfRanges = {
        "gewicht": [
            { category: "slider", min: 50, max: 300, step: 0.5 }
        ],
        "größe": [
            { category: "slider", min: 0.5, max: 3, step: 0.5 }
        ]
    };
    editor.groupsOfSelections = {
        "Geschlecht": [
            { value: "Frau" },
            { value: "Mann" },
            { value: "Divers" }
        ],
        "Klasse": [
            { value: "Wahrsager" },
            { value: "Zauberer" },
            { value: "Helfer" },
            { value: "Dieb" },
            { value: "Krieger" }
        ],
        "Rasse": [
            { value: "Zwerg" },
            { value: "Elf" },
            { value: "Einhorn" },
            { value: "Fee" },
            { value: "Gnom" }
        ],
        "Begleitung": [
            { value: "Wolf" },
            { value: "Eichhörnchen" },
            { value: "Engel" },
            { value: "Drache" }
        ],
        "Feind": [
            { value: "Mensch" },
            { value: "Okr" },
            { value: "Schlange" },
            { value: "Eule" },
            { value: "Drache" }
        ],
        "Herkunft": [
            { value: "Mittelerde" },
            { value: "Zauberwald" },
            { value: "Regensdorf" },
            { value: "Blumenschlucht" }
        ]
    };
    editor.groupsOfInputs = {
        "backstory": [
            { type: "textfield" }
        ],
        "Geburtsdatum": [
            { type: "date" }
        ]
    };
    editor.groupsOfColors = {};
})(editor || (editor = {}));
//# sourceMappingURL=L06_1.js.map
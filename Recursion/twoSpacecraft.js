const route1 = "AENR";
const route2 = "ENROe";

function rout1Index(gate) {
    if (gate === "Aurora" || gate === "A") return 0;
    else if (gate === "Ember" || gate === "E") return 1;
    else if (gate === "Nebula" || gate === "N") return 2;
    else if (gate === "Rift" || gate === "R") return 3;
}

function route2Index(gate) {
    if (gate === "Ember" || gate === "E") return 0;
    else if (gate === "Nebula" || gate === "N") return 1;
    else if (gate === "Rift" || gate === "R") return 2;
    else if (gate === "Obsidian" || gate === "O") return 3;
    else if (gate === "Eclipse" || gate === "e") return 4;
}

function meet(gate1, gate2) {
    start1 = rout1Index(gate1);
    start2 = route2Index(gate2);

    if (gate1 != gate2) {
        return 1 + meet(route1[(start1 + 1) % 4], route2[(start2 + 1) % 5]);
    } else {
        return 0;
    }
}

// console.log(`no of steps required to meet are ${meet("Aurora", "Ember")}`);
console.log(`no of steps required to meet are ${meet("", "")}`);
// console.log(`no of steps required to meet are ${meet("Nebula", "Eclipse")}`);

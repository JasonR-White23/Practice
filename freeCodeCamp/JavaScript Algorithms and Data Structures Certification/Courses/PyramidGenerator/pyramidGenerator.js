/*
console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");
*/

const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {

    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/* 
    For Loop syntax: 
    for ('iterator'; 'condition'; 'iteration') {} 
*/
// TODO: use a different kind of loop

for (let i = 1; i <= count; i++) {
    if (inverted) {
       rows.unshift(padRow(i, count)); 
    } 
    else {
        rows.push(padRow(i, count));
    }
}


/* 
    For ... Of Loop syntax:
    for ( const 'value' of 'iterable') {}; 
*/

/*while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}*/

// Inverted Pyramid Loop
/*for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}*/

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
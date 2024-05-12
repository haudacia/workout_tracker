item = document.getElementsByClassName('item1');
console.log(item);

let exercises = [
    { name: "seated calf raise", sets: 4, reps: 10},
    { name: "leg extension", sets: 3, reps: 8}
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

let table = document.querySelector("table");
let data = Object.keys(exercises[0])
generateTableHead(table, data);


import TableCsv from "./tableCSV.js";

const tableRoot = document.querySelector("#csvRoot");
const csvFileInput = document.querySelector("#csvFileUnput");
const tableCsv = new TableCsv(tableRoot); // On crée une instance de notre TableCsv

csvFileInput.addEventListener("change", e => {    
    Papa.parse(csvFileInput.files[0], {
        delimiter : ",",
        skipEmptyLines : true,
        complete: results => {
            tableCsv.update(results.data.slice(1), results.data[0]); // Slice saute le premier élément de la data qui représente les en-têtes
        } 
    });
});
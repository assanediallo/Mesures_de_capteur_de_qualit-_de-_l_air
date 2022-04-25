export default class {
    /**
     * @param {HTMLTableElement} root L'élément du tableau qui affichera les données CSV
     */
    constructor(root) {
        this.root = root;
    }

    /**
     * Efface les données actuelles du tableau HTML et le remplace par de nouvelles données
     * 
     * @param {*} data Un array 2D de données à utiliser comme corps de notre jolie tableau
     * @param {*} headerColumns liste les titres des colonnes 
     */
    update(data, headerColumns = []) {
        this.clear();
        this.setHeader(headerColumns);
        this.setBody(data);
    }

    /**
     * Efface tous les éléments de notre tableau HTML (y compris les en-têtes).
     */
    clear() {
        this.root.innerHTML = "";
    }

    /**
     * Crée les en-têtes
     * 
     * @param {string[]} headerColumns liste les titres des colonnes 
     */
    setHeader(headerColumns) {
        this.root.insertAdjacentHTML("afterbegin", `
            <thead>
                <tr>
                ${headerColumns.map((text) => `<th>${text}</th>`).join("")}
                </tr>
            </thead>
        `// On joint par un string vide notre liste d'en-têtes
        );
    };
    /**
     * Crée le corps (contenu) de notre tableau
     * 
     * @param {string[]} data Un array 2D de données à utiliser comme corps de notre jolie tableau
     */

    setBody(data) {
        const rowsHtml = data.map((row) => {
            return `
                <tr>
                    ${row.map((text) => `<td>${text}</td>`).join("")}
                </tr>
            `;
        });

        this.root.insertAdjacentHTML(
            "beforeend",
            `
                <tbody>
                    ${rowsHtml.join("")}
                </tbody>
            `
        );
    }
}



window.onload = function () {
    let capital = ["Paris", "Londres", "Roma", "Berlin", "Copenhaguen", "Viena" ,"Lisboa", "Washington_DC" ,"Otawa", "L'Havana", "Santiago", "Lima","Montevideo", "Canberra", "Wellington", "Monròvia" ,"Abuja", "Dakar" ,"Tunis", "Tokyo" ,"Seül", "Beijing", "Taipei"];
    let pais = ["França", "UK", "Itàlia", "Alemanya", "Dinamarca", "Àustria", "Portugal", "USA", "Canada", "Cuba", "Xile", "Perú", "Uruguay", "Austràlia", "Nova_" ,"Zelanda", "Libèria", "Nigèria" ,"Senegal", "Tunísia", "Japó" ,"Corea_Sud" ,"Xina", "Taiwan"];
    let continent = ["Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Amèrica", "Amèrica", "Amèrica", "Amèrica" ,"Amèrica", "Amèrica", "Oceania", "Oceania", "Àfrica", "Àfrica", "Àfrica", "Àfrica", "Àsia", "Àsia" ,"Àsia"];

    document.getElementById('mostraTaula').onclick = function () {
        let n1 = parseInt(document.getElementById('n1').value);
        for(let i=0;i<n1;i++){
            let rN = Math.floor(Math.random() * 23);
            document.getElementById('taula').innerHTML += 
            `<tr><td> ${capital[rN]} </td><td> ${pais[rN]} </td><td> ${continent[rN]} </td></tr>`;

        }
    }
}
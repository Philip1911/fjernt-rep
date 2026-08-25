document.getElementById("randomNum").addEventListener("click", () => {
    const tal1 = Math.floor(Math.random() * 100) + 1;
    const tal2 = Math.floor(Math.random() * 100) + 1;

    const operationer = ["+", "-", "*", "/", "%", "**"];
    const operation = operationer[Math.floor(Math.random() * operationer.length)];

    let resultat;
    switch(operation) {
    case "+":
        resultat = tal1 + tal2;
        break;
    case "-":
        resultat = tal1 - tal2;
        break;
    case "*":
        resultat = tal1 * tal2;
        break;
    case "/":
        resultat = tal1 / tal2;
        break;
    case "%":
        resultat = tal1 % tal2;
        break;
    case "**":
        resultat = tal1 ** tal2;
        break;
}

    document.getElementById("output").textContent =
    `${tal1} ${operation} ${tal2} = ${resultat}`
})
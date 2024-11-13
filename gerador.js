// Mantive o código que o professor passou para utilizar de comparação:

function gerarAleatoriosOriginal() {
    let vetor = [];

    while (vetor.length < 6) {
        let aleatorio = Math.floor(Math.random() * 60 + 1);

        if (!vetor.includes(aleatorio)) {
            vetor.push(aleatorio);
        }
    }
    return vetor;
}

// Esta é a minha possível melhora:

function gerarAleatoriosOtimizado() {
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }
    return numeros.slice(0, 6);
}

// Pra fins de comparação utilizei o time para verificar a diferença de tempo:

console.time("Original");
for (let i = 0; i < 100000; i++) {
    gerarAleatoriosOriginal();
}
console.timeEnd("Original");

console.time("Otimizado");
for (let i = 0; i < 100000; i++) {
    gerarAleatoriosOtimizado();
}
console.timeEnd("Otimizado");

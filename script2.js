class NumeroSerie {

    numero;

    constructor(numero) {
        this.numero = numero;
    }


    triangulares() {
        let valorGuardado = 1;
        let serie = 'La serie es: ';
        for (let i = 1; i < this.numero; i++) {
            let local = i;
            local++;
            const cpValorguardado = valorGuardado;


            valorGuardado = valorGuardado + local;
            serie += `${cpValorguardado} + ${local} = ${valorGuardado}, `;
        }
        return serie += '\n';
    }

    serieFibonnaci() {

        const diccionario = [];
        diccionario[0] = 0;
        diccionario[1] = 1;

        let serie = `La serie es: ${diccionario[0]}, ${diccionario[1]}`;

        for (let i = 2; i < this.numero; i++) {
            diccionario[i] = diccionario[i - 2] + diccionario[i - 1];

            serie += `, ${diccionario[i - 2]} + ${diccionario[i - 1]} = ${diccionario[i]}`


        }
        return serie += '\n';
    }


    isPrimo(valor) {

        for (let i = 2; i < valor; i++) {

            if (valor % i === 0) {
                return false;
            }

        }

        return valor !== 1;
    }

    primos() {
    
        let serie = 'La serie es: ';

        for (let i = 2; i < this.numero; i++) {

            if (this.isPrimo(i)) {
                serie += `${i}, `;
            }

        }
        return serie;
    }




}

const numeroSerie = new NumeroSerie(15);

console.log('Triangulares--> ', numeroSerie.triangulares());
console.log('Fibonacci--> ', numeroSerie.serieFibonnaci());
console.log('Primos--> ', numeroSerie.primos());
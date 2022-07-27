class GestionCalificaciones {
    listaCalificaciones = [];

    constructor(listaCalificaciones) {
        this.listaCalificaciones = listaCalificaciones;
    }


    //funcion que regresa lista de aprobados o reprobados apartir de una bandera (aprobados = boolean)

    calcularAprobadosReprobados(aprobados) {
        let suma = 0;

        this.listaCalificaciones.forEach((calificacion) => {
            if (calificacion >= 6 && aprobados) {
                suma++;
            } else if (calificacion <= 5 && !aprobados) {
                suma++;
            }
        });
        return suma;
    }

    calcularPromedio() {
        let sumaCalificaciones = 0;
        this.listaCalificaciones.forEach((calificacion) => {
            sumaCalificaciones += calificacion;
        });
        return sumaCalificaciones / this.listaCalificaciones.length;
    }

    calcularCalificacionAltaBaja(esAlta) {

        if (esAlta) {
            return Math.max(...this.listaCalificaciones);
        } else {
            return Math.min(...this.listaCalificaciones);
        }


    }

    getPromedio() {

        return this.calcularPromedio();
    }

    getAprobados() {

        return this.listaCalificaciones ? this.calcularAprobadosReprobados(true) : 'No hay calificaciones'

    }
    getReprobados() {

        return this.listaCalificaciones ? this.calcularAprobadosReprobados() : 'No hay calificaciones'

    }

    getCalificacionAlta() {
        return this.calcularCalificacionAltaBaja(true);
    }

    getCalificacionBaja() {
        return this.calcularCalificacionAltaBaja();
    }

}


const calificaciones = [7, 4, 6, 7, 4, 8, 9, 10];

const gestionCalificaciones = new GestionCalificaciones(calificaciones)

console.log('Aprovados--> ', gestionCalificaciones.getAprobados());
console.log('Reprobaron--> ', gestionCalificaciones.getReprobados());
console.log('Promedio salon--> ', gestionCalificaciones.getPromedio());
console.log('Calificacion mas Alta--> ', gestionCalificaciones.getCalificacionAlta());
console.log('Calificacion mas Baja--> ', gestionCalificaciones.getCalificacionBaja());
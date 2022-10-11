window.onload = () => {

    document.querySelector('#btnData').addEventListener('click', async () => {
        const data = document.querySelector('#inputData').value;
        const Cadena = [...data,'*'];
        const responseDB = await fetch('http://localhost:3000/consulta');
        const dataDB = await responseDB.json();

        let flagEmpty = 'Sin nada';
        let flagFinal = 'Aun no termina';
        
        dataDB.forEach(element => {
            if (element.Estado0 != null && element.Caracter == Cadena[0]) {
                flagEmpty = 'Valido';
            }
            else {
                if (flagEmpty != 'Valido') {
                    flagEmpty = 'Invalido';
                }
            }
        });

        //Hacer expresion regular para validar que solo sean letras y numeros
        

        const validarCadena = /^[A-Za-z0-9_.]+$/;
        console.log(Cadena);
        for (let i = 0; i < Cadena.length - 1; i++) {
            if (validarCadena.test(Cadena[i])) {
                console.log('Valido');
                flagFinal = 'Valido';
            }
            else {
                console.log('Invalido');
                flagFinal = 'Invalido';
                break;
            }
        }
        
        if (flagFinal == 'Valido') {

            for (let index = 1; index < Cadena.length; index++) {
                const element = Cadena[index];

                if (element == '*') {
                    flagFinal = 'Fin de cadena';
                    break;
                }
                else {
                    dataDB.forEach(char => {
                        if (char.Caracter == element) {
                            console.log('Caracter valido');
                        }
                    });
                }
            }
            if (flagFinal == 'Fin de cadena') {
                if (flagEmpty == 'Valido') {
                    alert('Cadena valida');
                }
                else {
                    alert('Cadena invalida');
                }
            }
        }
        else {
            alert('ERROR: LA CADENA NO ES VALIDA');
        }

    }); 
}
window.onload = () => {

    document.querySelector('#btnData').addEventListener('click', async () => {
        const data = document.querySelector('#inputData').value;
        const Cadena = [...data];
        const responseDB = await fetch('http://localhost:3000/consulta');
        const dataDB = await responseDB.json();

        let flagEmpty = 'Sin nada';
        
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
        
        if (flagEmpty == 'Valido') {

            for (let index = 1; index < Cadena.length; index++) {
                const element = Cadena[index];
                dataDB.forEach(char => {
                    if (char.Caracter == element) {
                        console.log('Caracter valido');
                        if (char.Caracter == ';') {
                            flagEmpty = 'DELIMITADOR ENCONTRADO';
                        } else {
                            if (flagEmpty != 'DELIMITADOR ENCONTRADO') {

                                flagEmpty = 'ERROR NO EXISTE DELIMITADOR';
                            }
                        }
                    }
                });
            }
            alert(flagEmpty);
        }
        else {
            alert('ERROR: AL INICIAR LA CADENA');
        }

    }); 
}
window.onload = () => {

    // Array de Alfabetos

    var arrayAlfabeto;
    var contador = 0;

    /* ==================================================> INICALIZACION DE LIMITES DE CINTA */
    
    document.querySelector('#slotInicial').value = '*';
    document.querySelector('#slotFinal').value = '*';
    
    /* ==================================================> INICALIZACION DE LIMITES DE CINTA */
    
    /* ==================================================> DIRECCIONES DE INPUTS */
    
    const Alfabeto = document.querySelector('#inputAlfabeto');
    const DataEnter = document.querySelector('#inputEnterData');

    /* ==================================================> DIRECCIONES DE INPUTS */

    /* ==================================================> DIRECCIONES DE CINTA */

    const ContainerCinta = document.querySelector('#cintaContainer');

    /* ==================================================> DIRECCIONES DE CINTA */

    /* ==================================================> FINAL DE CINTA */

    var slotFinal = document.createElement('input');
    slotFinal.setAttribute('type', 'text');
    slotFinal.setAttribute('id', 'slotFinal');
    slotFinal.setAttribute('value', '*');
    slotFinal.setAttribute('readonly', 'readonly');
    slotFinal.setAttribute('class', 'gridInput');

    /* ==================================================> FINAL DE CINTA */

    /* ==================================================> LISTENNERS DE FUNCIONALIDADES */
    
    Alfabeto.addEventListener('keyup', function () {
        let valueAlfabeto = Alfabeto.value;
        let LenghtAlfabeto = valueAlfabeto.length;
        LenghtAlfabeto >= 3 ? arrayAlfabeto = [...valueAlfabeto] : console.log('No Valida');
    })

    DataEnter.addEventListener('keyup', () => {
        let valueDataEnter = DataEnter.value;

        if (arrayAlfabeto.includes(valueDataEnter)) {

            ContainerCinta.removeChild(document.querySelector('#slotFinal'));
            var input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('class', 'gridInput');
            input.setAttribute('value', valueDataEnter);
            input.setAttribute('id', `slot${contador}`);
            ContainerCinta.appendChild(input);
            ContainerCinta.appendChild(slotFinal);
            contador++;
            DataEnter.value = '';

        }
        else {
            DataEnter.value = '';
        }
    })

    
    
    /* ==================================================> LISTENNERS DE FUNCIONALIDADES */

    
}
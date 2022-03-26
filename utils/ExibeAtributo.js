import classes from "./Classes.js"

function exibeAtributo() {

    let select = document.getElementById('classe')
    let texto = select.options[select.selectedIndex].text
    let valor = select.options[select.selectedIndex].value    
    let resposta = document.getElementById('atributos')
    
    if (texto == 'Warrior') {
        resposta.innerHTML = 
            `
            Força: ${classes.Warrior.força}               <br>
            Inteligência: ${classes.Warrior.inteligencia} <br>
            Agilidade: ${classes.Warrior.agilidade}       <br> 
            Vitalidade: ${classes.Warrior.vitalidade}     <br>

            `
    };

    if (texto == 'Paladin') {
        resposta.innerHTML = `
            Força: ${classes.Paladin.força} <br>
            Inteligência: ${classes.Paladin.inteligencia}<br>
            Agilidade: ${classes.Paladin.agilidade}<br>
            Vitalidade: ${classes.Paladin.força}<br> 
            `
    };

    if (texto == 'Druid') {
        resposta.innerHTML = `
            Força: ${classes.Druid.força} <br>
            Inteligência: ${classes.Druid.inteligencia}<br>
            Agilidade: ${classes.Druid.agilidade}<br> 
            Vitalidade: ${classes.Druid.vitalidade}<br>
            `
    };
    
    if (texto == 'Shaman') {
        resposta.innerHTML = `
            Força: ${classes.Shaman.força} <br>
            Inteligência: ${classes.Shaman.inteligencia}<br>
            Agilidade: ${classes.Shaman.agilidade}<br> 
            Vitalidade: ${classes.Shaman.vitalidade}<br>
            `
    };

    if (texto == 'Hunter') {
        resposta.innerHTML = `
            Força: ${classes.Hunter.força} <br>
            Inteligência: ${classes.Hunter.inteligencia}<br>
            Agilidade: ${classes.Hunter.agilidade}<br> 
            Vitalidade: ${classes.Hunter.vitalidade}<br>
            `
    };


    if(texto == 'Mage') {
        resposta.innerHTML = `
            Força: ${classes.Mage.força} <br>
            Inteligência: ${classes.Mage.inteligencia}<br>
            Agilidade: ${classes.Mage.agilidade}<br> 
            Vitalidade: ${classes.Mage.vitalidade}<br>
            `
    };
    if(valor == 'undefined'){
        resposta.innerHTML = ``
    }   
}
export default exibeAtributo
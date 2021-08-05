function selRaca() {

    let sex = document.getElementsByName('sex')
    let img = document.getElementById('foto')
    let seletor = document.querySelector('select#raca')
    let conteudo = seletor.options[seletor.selectedIndex].text // .text vem o texto   .value vem o valor da tag
    let valor = seletor.options[seletor.selectedIndex].value
    let resultado = document.querySelector('div#resraca')
    

    if (conteudo == 'Argo') {
        if (sex[0].checked) { // confere se é indice [0]= masculino ou [1] = feminino
            img.src = '../img/ArgoM.jpg'

        } else if (sex[1].checked) {
            img.src = '../img/ArgoF.jpg'
        }
    } else if (conteudo == 'Elfo') {
        if (sex[0].checked) { // confere se é indice [0]= masculino ou [1] = feminino
            img.src = '../img/elfoM.jpg'

        } else if (sex[1].checked) {
            img.src = '../img/elfaF.jpg'
        }
    } else if (conteudo == 'Troll') {
        if (sex[0].checked) { // confere se é indice [0]= masculino ou [1] = feminino
            
            img.src = '../img/troll.jpg'

        } else if (sex[1].checked) {
            img.src = '../img/trollesa.jpg'
        }
    } else if (conteudo == 'Drake') {
        if (sex[0].checked) { // confere se é indice [0]= masculino ou [1] = feminino
            img.src = '../img/drakeM.png'

        } else if (sex[1].checked) {
            img.src = '../img/drakeF.jpg'
        }
    } else if (conteudo == 'Vulper') {
        if (sex[0].checked) { // confere se é indice [0]= masculino ou [1] = feminino
            img.src = '../img/vulper.png'

        } else if (sex[1].checked) {
            img.src = '../img/vulpera.png'
        }
    } else if (conteudo == 'Demon') {
        if (sex[0].checked) { // confere se é indice [0]= masculino ou [1] = feminino
            img.src = '../img/demonM.jpg'

        } else if (sex[1].checked) {
            img.src = '../img/demonF.jpg'
        }
    }
    if(valor == 'undefined'){
        img.src= document.getElementById("foto")
    }
    
}

var classes = {
    Warrior: {
        força: 10,
        inteligencia: 2,
        agilidade: 4,
        vitalidade: 8
    },
    Paladin: {
        força: 7,
        inteligencia: 5,
        agilidade: 5,
        vitalidade: 7
    },
    Druid: {
        força: 2,
        inteligencia: 6,
        agilidade: 6,
        vitalidade: 10
    },
    Shaman: {
        força: 3,
        inteligencia: 9,
        agilidade: 7,
        vitalidade: 5
    },
    Hunter: {
        força: 5,
        inteligencia: 4,
        agilidade: 10,
        vitalidade: 5
    },
    Mage: {
        força: 1,
        inteligencia: 10,
        agilidade: 10,
        vitalidade: 3
    },
    exibeInf() {
        console.log(this.Mage)
    }
}


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


function armaduras() { 
    // area destinada aos elementos da DOM
    var selectClasse = document.getElementById('classe') //elemento select da classe
    var textSelect = selectClasse.options[selectClasse.selectedIndex].text




}

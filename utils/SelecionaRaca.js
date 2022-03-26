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
export default selRaca
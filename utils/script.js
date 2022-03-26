import exibeAtributo from "./ExibeAtributo.js"
import selRaca from "./SelecionaRaca.js"


var selectatributo = document.querySelector("#classe")
selectatributo.addEventListener("change", ()=> exibeAtributo())

var selectraca = document.querySelector("#raca")
var inputsexo = document.querySelector(".inputsexo")
selectraca.addEventListener("change", ()=> selRaca())
inputsexo.addEventListener("change", ()=> selRaca())

function armaduras() { 
    // area destinada aos elementos da DOM
    var selectClasse = document.getElementById('classe') //elemento select da classe
    var textSelect = selectClasse.options[selectClasse.selectedIndex].text
}

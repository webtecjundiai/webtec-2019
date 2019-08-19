document.body.style.backgroundColor = 'black'

function injetarDivs(elemento, quantidade, espacamento, cor) {

    for (let i = 0; i < quantidade; i++) {
        
        let mensagem = `Olá, eu sou a div n° ${i+1}`

        var div = document.createElement(`${elemento}`);
        
        div.textContent = mensagem;
        div.style.backgroundColor = cor;
        div.style.color = 'white';
        div.style.padding = espacamento
        div.style.margin = espacamento
        div.style.width = '250px'
        div.style.textJustify = 'center'
        div.style.fontSize = '30px'
        div.style.display = 'inline-block'

        document.body.appendChild(div);
    }
}

let elemento    = 'div'
let quantidade  = 10
let espacamento = '10px'
let cor         = 'green'

injetarDivs(elemento, quantidade, espacamento, cor);

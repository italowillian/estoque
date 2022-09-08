let btnEnviar = document.querySelector('#enviar')
let btnEditar = document.querySelector('.editar');

let nome = document.querySelectorAll('#wrap input')[0];
let categoria = document.querySelectorAll('#wrap input')[1];
let preco = document.querySelectorAll('#wrap input')[2];
let quantidade = document.querySelectorAll('#wrap input')[3];

let tabela = document.querySelector('.tabela table');

let BD = [];




var valor1 = document.getElementById('campo1').value;
var valor2 = document.getElementById('campo2').value;
var valor2 = document.getElementById('campo3').value;
var valor2 = document.getElementById('campo4').value;


const button1 = document.querySelector('.novoP');
const button2 = document.querySelector('.novoPr');

const popup1 = document.querySelector('.popup-wrapper');


const closeButton1 = document.querySelector('.popup-close');


button1.addEventListener('click', () => {
    popup1.style.display = 'block'
})

button2.addEventListener('click', () => {
    popup1.style.display = 'block'
})

closeButton1.addEventListener('click', () => {
    popup1.style.display = 'none'
})

/* Validação do formulario */

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');


/* form.addEventListener('submit',(event) => {

        event.preventDefault();
        nameValidate()
        CateValidate()
        PrecoValidate()
        QtdValidate()  
            
})*/

    form.addEventListener('submit',(event) => {

        let produto = new Object();
        produto.nome = nome.value;
        produto.categoria = categoria.value;
        produto.preco = preco.value;
        produto.quantidade = quantidade.value;
        produto.id = BD.length;
        BD.push(produto);
        tabela.innerHTML += `<tr><td>${produto.id}</td><td>${produto.nome}</td><td>${produto.categoria}</td><td>R$${preco.value}</td><td>${produto.quantidade}Und.</td><td><ion-icon name="trash-outline"></ion-icon></td><td><ion-icon class="editarL" name="pencil-outline"></ion-icon></td></tr>`;
        document.getElementById('campo1').value = ''
        document.getElementById('campo2').value = ''
        document.getElementById('campo3').value = ''
        document.getElementById('campo4').value = ''
        popup1.style.display = 'none'

        event.preventDefault();
        nameValidate()
        CateValidate()
        PrecoValidate()
        QtdValidate()  
  
 
            
    })



/* let produto = new Object();
        produto.nome = nome.value;
        produto.categoria = categoria.value;
        produto.preco = preco.value;
        produto.quantidade = quantidade.value;
        produto.id = BD.length;
        BD.push(produto);
        tabela.innerHTML += `<tr><td>${produto.id}</td><td>${produto.nome}</td><td>${produto.categoria}</td><td>R$${preco.value}</td><td>${produto.quantidade}Und.</td><td><ion-icon name="trash-outline"></ion-icon></td><td><ion-icon name="pencil-outline"></ion-icon></td></tr>`;
        document.getElementById('campo1').value = ''
        document.getElementById('campo2').value = ''
        document.getElementById('campo3').value = ''
        document.getElementById('campo4').value = ''
        popup1.style.display = 'none'*/


function setError(index) {
    campos[index].style.border = '1.8px solid #ba0404'
    spans[index].style.display = 'block'
}

function removeError(index) {
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}

function nameValidate() {
    if(campos[0].value.length < 3) {

        setError(0)

    } else {

        removeError(0)

    }
}

function CateValidate() {
    if(campos[1].value.length <= 0) {

        setError(1)

    } else {

        removeError(1)

    }
}

function PrecoValidate() {
    if(campos[2].value.length <= 0) {

        setError(2)

    } else {

        removeError(2)

    }
}

function QtdValidate() {
    if(campos[3].value.length <= 0) {

        setError(3)

    } else {

        removeError(3)

    }
}

/* montar tabela */

function montarTabela(){
    for (let i = 0; i < BD.length; i++){
        tabela.innerHTML += `<tr><td>${i}</td><td>${BD[i].nome}</td><td>${BD[i].categoria}</td><td>R$${BD[i].preco}</td><td>${BD[i].quantidade}Und.</td><td><ion-icon name="trash-outline"></ion-icon></td><td><ion-icon name="pencil-outline"></ion-icon></td></tr>`;
    }
}

/* Editar */




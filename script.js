class Contatos {
    constructor(nome, email, telefone, comentario) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.comentario = comentario;
    }
}

class Gerenciando {
	   constructor(){
        this.contatos = []
    }

    adicionarContato(contato){
        this.contatos.push(contato);
    }
    exibirContatos() {
        const listaContatos =document.getElementById
        ('contato-lista');

        listaContatos.innerHTML = '';

        for(const contato of this.contatos){
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`;
            listaContatos.appendChild(li)
        }
    
    }

    exibirContatos() {
        const listaContatos = document.getElementById('contato-lista');

        listaContatos.innerHTML = '';

        for (const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - Comentário: ${contato.comentario}`;
            listaContatos.appendChild(li)
        }
    }
}

const gerenciadorContatos = new Gerenciando();

const contatoForm = document.getElementById('contato-form');
const nomeF = document.getElementById('nome');
const emailF = document.getElementById('email');
const telefoneF = document.getElementById('telefone');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos')
const listaContato = document.getElementById('contato-lista')

contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = nomeF.value;
    const email = emailF.value;
    const telefone = telefoneF.value;
    const comentario = document.getElementById('comentario').value;  // Obter o comentário do textarea

    const contato = new Contatos(nome, email, telefone, comentario);

    gerenciadorContatos.adicionarContato(contato);

    nomeF.value = '';
    emailF.value = '';
    telefoneF.value = '';
    document.getElementById('comentario').value = '';  // Limpar o textarea
});

mostrarContatos.addEventListener('click', () => {
    gerenciadorContatos.exibirContatos();
    listaContato.style.display = 'block';
});

ocultarContatos.addEventListener('click', ()=>{
    listaContato.style.display = 'none'
})

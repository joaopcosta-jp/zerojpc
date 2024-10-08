const dataNascimento = new Date('2000-01-13');
const hoje = new Date();

let idade = hoje.getFullYear() - dataNascimento.getFullYear();
const mesNascimento = dataNascimento.getMonth();
const mesaAtual = hoje.getMonth();

if (mesaAtual < mesNascimento || (mesaAtual === mesNascimento && hoje.getDate() < dataNascimento.getDate())){
    idade--;
}

document.getElementById('idade').textContent = idade;
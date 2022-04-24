let nome = document.getElementById('nome');

let sobrenome = document.getElementById('sobrenome');

let idade = document.getElementById('idade');

let email = document.getElementById('email');

let sexo = document.getElementById('sexo');

let arquivo = document.getElementById('arquivo');

let pais = document.getElementById('pais');

let linguagem = document.getElementById('linguagem');

let area = document.getElementById('area');

let forms = document.getElementById('forms');

function verificar(){

    if(nome.value == ''){
        alert("Você não preencheu o campo 'Nome'");
        return false;
    }
    else if(sobrenome.value == ''){
        alert("Você não preencheu o campo 'Sobrenome'");
        return false;
    }
    else if(idade.value == ''){
        alert("Você não preencheu o campo 'Idade'");
        return false;
    }
    else if(email.value == ''){
        alert("Você não preencheu o campo 'Email'");
        return false;
    }
    else if(forms.sexo[0].checked == '' && forms.sexo[1].checked == ''){
        alert("Você não preencheu o campo 'Sexo'");
        return false;
    }
    else if(arquivo.value == ''){
        alert("Você não preencheu o campo 'Foto'");
        return false;
    }
    else if(pais.value == ''){
        alert("Você não preencheu o campo 'País'");
        return false;
    }
    else if(linguagem.value == ''){
        alert("Você não preencheu o campo 'Linguagem'");
        return false;
    }
    else if(forms.area[0].checked == '' && forms.area[1].checked == '' && forms.area[2].checked == '' ){
        alert("Você não preencheu o campo 'Área de atuação'");
        return false;
    }
    else{
        return true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems)
})
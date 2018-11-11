function validar() {
	var nome = document.getElementById('nome').value;
	var sexo = document.form3.sexo;
	var estado = document.getElementById('estado').value;
	var erro = document.getElementById('erro');
	
	if(nome=='') {
		erro.innerHTML = 'Preencha o campo de nome';
		document.getElementById('n').style.color = 'red';
		document.getElementById('nome').focus();
		return false;
	}else if(!sexo[0].checked && !sexo[1].checked) {
		erro.innerHTML = 'Selecione o sexo';
		document.getElementById('s').style.color = 'red';
		return false;
	}else if(estado=='vazio') {
		erro.innerHTML = 'Selecione o estado.';
		document.getElementById('e').style.color = 'red';
		return false;
	}else {
		return true;
	}
}

function newUser() {
	var nome = document.getElementById('nome').value.trim();
	var sobrenome = document.getElementById('sobrenome').value.trim();
	var user = document.getElementById('user');
	
	if(nome=='' || sobrenome=='') {
		user.innerHTML = 'Preencha os campos';
	} else {
		var usuario = nome+"."+sobrenome;
		user.innerHTML = usuario.toLowerCase();
	}
}
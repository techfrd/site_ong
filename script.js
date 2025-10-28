function copiarChave(event){
    event.preventDefault();


    const chaveElemento = document.getElementById('chavePixTexto');
    const textoParaCopiar = chaveElemento.textContent.replace('CNPJ -', '').trim();

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textoParaCopiar).then(()=>{
            const botao = document.getElementById('btnCopiar');
            const textoOriginal = botao.textContent;

            botao.textContent = 'Copiado!';

            setTimeout(() =>{
                botao.textContent = textoOriginal;
            }, 2000);
        })
        .catch(erro =>{
            console.error('Erro ao copiar: ', err);
            alert('Erro ao copiar a chave. Por favor, copie manualmente.')
        });
    }else{
        console.error('API não suportada')
        alert('Seu navegador não suporta cópia automática do texto, copie manualmente.');
    }


}
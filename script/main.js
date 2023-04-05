$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required:true
            }
        },
        messages: {
            nome: 'Por favor, Insira seu nome',
            email: 'Por favor, Insira seu melhor e-mail',
            mensagem: 'Deixe aqui a sua mensagem, nossa equipe retornará o contato em breve.'
        }
    })

})
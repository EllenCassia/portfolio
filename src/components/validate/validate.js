export const validate = (nome, email, mensagem) => {
    const errors = [];

    if (nome == '' || email == '' || mensagem == '') {
        errors.push('Preencha todos os campos');
    };
    if (email.indexOf('@') === -1) {
        errors.push('Email inválido');
    };
    if (mensagem.length < 10) {
        errors.push('Mensagem muito curta');
    };
    if (nome.length < 3) {
        errors.push('Nome muito curto');
    };
    if (nome.length > 40) {
        errors.push('Nome muito longo');
    };
    if (mensagem.length > 500) {
        errors.push('Mensagem muito longa');
    };
    return errors;
}
     
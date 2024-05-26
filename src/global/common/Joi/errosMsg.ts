

const msgErros = {
    'string.base': 'O campo {{#label}} deve ser uma string',
    'string.empty': 'O campo {{#label}} não pode ser vazio, remova o campo ou coloque algum caractere',
    'string.min': 'O campo {{#label}} deve ter pelo menos {{#limit}} caracteres',
    'string.max': 'O campo {{#label}} deve ter no máximo {{#limit}} caracteres',
    'any.required': 'O campo {{#label}} é obrigatório',
    'any.invalid': "Valor {{#value}} invalido para {{#label}}",
    'object.missing': "{{#label}} deve conter ao menos {{#peers}}",
    'string.email': "O e-mail deve ser válido",
    'array.includesRequiredUnknowns': 'Pelo menos um email deve ser fornecido',
    'cnpjInvalid': "O Cnpj é invalido",
    'cpfInvalid': "O cpf é invalido",
    'object.oxor': "{{#peers}} devem ser mutuamente exclusivos. Forneça apenas um dos campos.",
    'string.guid': "O uuid passado não é valido",
    'cardRequired': "Com opção de forma de pagamento sendo Cartão de crédito, é necessário ao menos passar um cartão"
};

export default msgErros;

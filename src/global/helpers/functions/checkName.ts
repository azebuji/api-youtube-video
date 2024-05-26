export function checkName(name: string) {
    switch (name) {
        case 'nameLogin':
            return "O login já existe, tente outro."
        case 'email':
            return "O email já existe, tente outro."
        case 'cnpj':
            return "O cnpj já existe."
        default:
            return "Atributo já existe"
    }
}

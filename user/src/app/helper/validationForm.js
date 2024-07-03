export const validations = (input) => {
    const errors = {}
    const emailRegExp = /\S+@\S+.\S+/;

    if(!input.name) {errors.name = 'Debe ingresar un nombre'}
    else if(input.name.length < 3) {errors.name = 'El nombre debe tener al menos 3 caracteres'}
    else if(!input.email) {errors.email = 'Debe ingresar un email'}
    else if(!emailRegExp.test(input.email)) {errors.email = 'Debe ingresar un email valido'}
    else if(!input.message) {errors.message = 'Debe ingresar un mensaje'}
    else if(input.message.length > 200) {errors.message = 'Superaste el limite de 200 caracteres'}

    return errors;
}
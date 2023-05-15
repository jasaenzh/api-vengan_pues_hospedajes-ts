interface LoginValues {
    email: string;
    password: string;
}

interface RegisterValues {
    email: string;
    password: string;
    cpassword: string;
    username: string;
}

export function login_validate(values: LoginValues) {

    const errors: Partial<LoginValues> = {};

    // Validacion de Email
    if (!values.email) {
        errors.email = "Email es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email invalido';
    }

    // Validacion de Password
    if (!values.password) {
        errors.password = "Password es obligatorio";
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = "Debe de tener mas de 8 y menos de 20 caracteres";
    } else if (values.password.includes(" ")) {
        errors.password = "Contraseña incorrecta";
    }

    return errors;
}


export function register_validate(values: RegisterValues) {

    const errors: Partial<RegisterValues> = {};

    // Validacion de Nombre
    if (!values.username) {
        errors.username = "Nombre es obligatorio";
    } else if (values.username.includes(" ")) {
        errors.username = "Nombre incorrecto";
    }

    // Validacion de Email
    if (!values.email) {
        errors.email = "Email es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email invalido';
    }

    // Validacion de Password
    if (!values.password) {
        errors.password = "Password es obligatorio";
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = "Debe de tener mas de 8 y menos de 20 caracteres";
    } else if (values.password.includes(" ")) {
        errors.password = "Contraseña incorrecta";
    }

    // Validacion de Confirmacion de Password
    if (!values.cpassword) {
        errors.cpassword = "Password es obligatorio";
    } else if (values.cpassword !== values.password) {
        errors.cpassword = "Contraseñas no coinciden";
    } else if (values.cpassword.includes(" ")) {
        errors.cpassword = "Confirmar contraseña incorrecta";
    }

    return errors;
}
export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function isValidPhone(phone) {
    // aceita apenas números, com ou sem traços ou espaços
    const regex = /^[0-9]{8,15}$/;
    // remove espaços, parênteses e traços antes de testar
    const cleaned = cleanPhoneNumber(phone)
    return regex.test(cleaned);
}

export function isValidCPF(cpf) {
    // remove qualquer caractere que não seja número
    const cleaned = cpf.replace(/\D/g, '');
    // verifica se tem exatamente 11 dígitos
    return /^[0-9]{11}$/.test(cleaned);
}

export function cleanPhoneNumber(phone_number) {
    return phone_number.replace(/[\s-()]/g, '')
}

export function isValidPassword(password) {
    return password.length > 8;
}

export function hasNoLetters(str) {
    return !/[a-zA-Z]/.test(str)
}
export function formatPhoneNumber(number) {
    // remove tudo que não for número
    const cleaned = number.replace(/\D/g, '');

    // se tiver menos de 3 dígitos, só retorna
    if (cleaned.length < 3) return cleaned;

    const ddd = cleaned.slice(0, 2);       // dois primeiros dígitos
    const rest = cleaned.slice(2);         // resto do número

    return `(${ddd}) ${rest}`;
}
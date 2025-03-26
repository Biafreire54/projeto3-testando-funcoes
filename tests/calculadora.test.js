const { contarCaracteres, ehPar, subtrai } = require('../src/calculadora');

test('A função contarCaracteres deve retornar que a string "Segurança" possui 9 caracteres', () => {
    expect(contarCaracteres("Segurança")).toBe("A string Segurança possui 9 caracteres");
});

test('A função ehPar deve afirmar que o número 6 é par', () => {
    expect(ehPar(6)).toBe("O número 6 é par");
});

test('A função ehPar deve afirmar que o número 9 não é par', () => {
    expect(ehPar(9)).toBe("O número 9 não é par");
});

test('A função subtrai deve retornar 4 ao subtrair 8 e 4', () => {
    expect(subtrai(8,4)).toBe(4);
});

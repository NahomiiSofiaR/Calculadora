const { sumar, restar, multiplicar, dividir } = require("./calculadora");

// ✅ Prueba unitaria
test("suma correcta de 2 + 3 = 5", () => {
  expect(sumar(2, 3)).toBe(5);
});

// 🔗 Prueba de integración (operaciones encadenadas)
test("operaciones encadenadas (2 + 3) * (10 - 4) = 30", () => {
  const resultado = multiplicar(sumar(2, 3), restar(10, 4)); // (2+3)*(10-4)=30
  expect(resultado).toBe(30);
});

// ⚡ Prueba de rendimiento (simulada)
test("rendimiento: ejecutar suma 100,000 veces sin errores", () => {
  for (let i = 0; i < 100000; i++) {
    sumar(10, 20);
  }
  expect(true).toBe(true); // Si el bucle termina sin fallar, la prueba pasa
});

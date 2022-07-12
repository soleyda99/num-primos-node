function obtenerPrimos(num) {
  if (typeof num === "number" && Number.isInteger(num)) {
    if (num >= 2) {
      let auxiliar = [];
      let primos = [];

      for (let i = 2; i <= num; i++) {
        if (!auxiliar[i]) {
          primos.push(i);

          for (let j = i << 1; j <= num; j += i) {
            auxiliar[j] = true;
          }
        }
      }

      return primos;
    } else {
      return "El número debe ser mayor o igual a 2.";
    }
  } else {
    return "El argumento debe ser un número entero.";
  }
}

console.log(obtenerPrimos(10)); // [2, 3, 5, 7]

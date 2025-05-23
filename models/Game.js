class Game {
  static levels = {
    facil: { max: 10, intentos: 5 },
    medio: { max: 20, intentos: 8 },
    avanzado: { max: 100, intentos: 15 },
    extremo: { max: 1000, intentos: 25 },
  };

  constructor(dificultad = "facil") {
    this.setDificultad(dificultad);
    this.historial = [];
  }

  setDificultad(dificultad) {
    const nivel = Game.levels[dificultad];
    if (!nivel) throw new Error("Nivel inválido");
    this.dificultad = dificultad;
    this.maxNumero = nivel.max;
    this.intentosPermitidos = nivel.intentos;
    this.reiniciarJuego();
  }

  reiniciarJuego() {
    this.numeroSecreto = this.generarNumero();
    this.intentosRestantes = this.intentosPermitidos;
    this.intentos = [];
    this.mayores = [];
    this.menores = [];
    this.finalizado = false;
    this.acertado = false;
  }

  generarNumero() {
    return Math.floor(Math.random() * this.maxNumero) + 1;
  }

  validar(numero) {
    if (isNaN(numero)) return "Ingresa un número válido";
    if (numero < 1 || numero > this.maxNumero)
      return `Debe estar entre 1 y ${this.maxNumero}`;
    return null;
  }

  intentar(numero) {
    if (this.finalizado) return "El juego ha finalizado";

    const error = this.validar(numero);
    if (error) return error;

    numero = Number(numero);
    this.intentos.push(numero);
    this.intentosRestantes--;

    if (numero > this.numeroSecreto) {
      this.mayores.push(numero);
    } else if (numero < this.numeroSecreto) {
      this.menores.push(numero);
    } else {
      this.acertado = true;
      this.finalizado = true;
    }

    if (this.intentosRestantes === 0 && !this.acertado) {
      this.finalizado = true;
    }

    if (this.finalizado) {
      this.historial.push({
        dificultad: this.dificultad,
        numeroSecreto: this.numeroSecreto,
        acertado: this.acertado,
        intentos: [...this.intentos],
        color: this.acertado ? "green" : "red",
      });
    }
  }

  getEstado() {
    return {
      dificultad: this.dificultad,
      numeroSecreto: this.finalizado ? this.numeroSecreto : null,
      intentosRestantes: this.intentosRestantes,
      intentos: this.intentos,
      mayores: this.mayores,
      menores: this.menores,
      historial: this.historial,
      finalizado: this.finalizado,
      acertado: this.acertado,
    };
  }
}

module.exports = Game;

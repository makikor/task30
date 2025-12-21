export class CheckingNumberCard {
  constructor() {
    this.numberCard = null;
    this.arrayTypesCard = {
      mir: {
        2: [16],
      },
      visa: {
        4: [13, 16, 19],
      },
      master: {
        5: [16],
      },
      amex: {
        3: [15],
      },
      discover: {
        6: [16, 17, 18, 19],
      },
      jsb: {
        3: [16, 17, 18, 19],
      },
      diners: {
        3: [14],
      },
    };
  }

  // Сборка проверок
  checkingCard(num) {
    const numberCard = num.trim();
    this.numberCard = Number(numberCard);
    if (
      numberCard.length > 13 &&
      numberCard.length < 20 &&
      !Number.isNaN(this.numberCard)
    ) {
      console.log("номер корректный");
      if (this.checkingLuna(numberCard)) {
        return this.checkingPaymentSystem(numberCard);
      }
    }
  }

  // Проверка по алгоритму Луна
  checkingLuna(numberCard) {
    const oddNumbers = numberCard
      .split("")
      .filter((_, index) => index % 2 === 0);
    const evenNumbers = numberCard
      .split("")
      .filter((_, index) => index % 2 === 1);
    let sumOddNumbers = oddNumbers.reduce((acc, item) => {
      item *= 2;
      if (item > 9) item -= 9;
      return acc + item;
    }, 0);
    let sumEvenNumbers = evenNumbers.reduce((a, b) => a + Number(b), 0);
    return (sumOddNumbers + sumEvenNumbers) % 10 === 0;
  }

  // проверка к какой платежной системе относится
  checkingPaymentSystem(numberCard) {
    const firstCode = numberCard[0];
    const length = numberCard.length;

    for (const [system, rules] of Object.entries(this.arrayTypesCard)) {
      if (rules[firstCode] && rules[firstCode].includes(length)) {
        return system;
      }
    }
    return null;
  }
}

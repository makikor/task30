import imgMir from "../img/mir.png";
import imgVisa from "../img/visa.png";
import imgMaster from "../img/mastercard.png";
import imgAmex from "../img/amex.png";
import imgDiscover from "../img/discover.png";
import imgJcb from "../img/jcb.png";
import imgDiners from "../img/diners.png";
import { CheckingNumberCard } from "./checkingNumberCard ";

export class WidgetCardRender {
  constructor(body) {
    this._body = body;
    this.checkingNumberCard = new CheckingNumberCard();
    this.imageCarts = {
      mir: imgMir,
      visa: imgVisa,
      master: imgMaster,
      amex: imgAmex,
      discover: imgDiscover,
      jcb: imgJcb,
      diners: imgDiners,
    };
  }

  renderWidget() {
    // Создаем общий виджет проверки номера карты
    const widget = document.createElement("div");
    widget.classList.add("widgetCart");
    this._body.append(widget);

    // Создаем блок "Карты с лэблами платежных систем"
    const boardCart = document.createElement("div");
    boardCart.classList.add("boardCart");
    widget.append(boardCart);

    // Перебираем картинки для вставки в блок "Карты с лэблами платежных систем"
    Object.keys(this.imageCarts).forEach((key) => {
      const cart = new Image();
      cart.src = this.imageCarts[key];
      cart.setAttribute("alt", `cart_${key}`);
      cart.classList.add("iconCart");
      boardCart.append(cart);
    });

    // Создаем блок для формы для отправки номера карты
    const boardForm = document.createElement("div");
    boardForm.classList.add("boardForm");
    widget.append(boardForm);

    // Создаем саму форму отправки номера карты
    const form = document.createElement("form");
    boardForm.append(form);

    const input = document.createElement("input");
    input.type = "text";
    input.name = "inputNumberCard";
    input.placeholder = "Введите номер карты";
    form.append(input);

    const button = document.createElement("button");
    button.type = "submit";
    button.name = "Click to Validate";
    button.textContent = "Click to Validate";
    form.append(button);

    // Вешаем обработчик события при плике по кнопке
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const forma = new FormData(form);
      let resultBank = this.checkingNumberCard.checkingCard(
        forma.get("inputNumberCard"),
      );

      document.querySelectorAll(".iconCart").forEach((icon) => {
        icon.classList.remove("active_icon");
      });
      const targetIcon = document.querySelector(
        `img[alt="cart_${resultBank}"]`,
      );
      if (targetIcon) {
        targetIcon.classList.add("active_icon");
      } else {
        console.error(`Иконка для системы "${resultBank}" не найдена`);
      }
    });
  }
}

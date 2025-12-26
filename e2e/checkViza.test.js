import puppeteer from "puppeteer";

jest.setTimeout(15000);

describe("Загрузка страницы проверки номера карты", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: false,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Проверка карты VIZA # 4556988791764513", async () => {
    await page.goto("http://localhost:9000");
    await page.waitForSelector("form", { timeout: 1000 }); // проверяю что загрузилась форма
    const input = await page.waitForSelector('input[name="inputNumberCard"]', {
      timeout: 1000,
    }); //
    const button = await page.waitForSelector('button[type="submit"]', {
      timeout: 1000,
    }); //
    await input.type("4556988791764513"); // вводим номер карты
    await button.click(); // кликаем по полю ввода номера карты
    await new Promise((resolve) => setTimeout(resolve, 1000)); // задержка чтоб dom  отрендился
    const isVisaActive = await page.$eval(
      'img[alt="cart_visa"]',
      (
        element, // результат проверки записал в isVisaActive булевым значением.
      ) => element.classList.contains("active_icon"),
    );
    expect(isVisaActive).toBe(true);
  });

  test("Проверка карты VIZA # 4024007189590572", async () => {
    await page.goto("http://localhost:9000");
    await page.waitForSelector("form", { timeout: 1000 }); // проверяю что загрузилась форма
    const input = await page.waitForSelector('input[name="inputNumberCard"]', {
      timeout: 1000,
    }); //
    const button = await page.waitForSelector('button[type="submit"]', {
      timeout: 1000,
    }); //
    await input.type("4024007189590572"); // вводим номер карты
    await button.click(); // кликаем по полю ввода номера карты
    await new Promise((resolve) => setTimeout(resolve, 1000)); // задержка чтоб dom  отрендился
    const isVisaActive = await page.$eval(
      'img[alt="cart_visa"]',
      (
        element, // результат проверки записал в isVisaActive булевым значением.
      ) => element.classList.contains("active_icon"),
    );
    expect(isVisaActive).toBe(true);
  });

  test("Проверка карты VIZA # 4556286090239596", async () => {
    await page.goto("http://localhost:9000");
    await page.waitForSelector("form", { timeout: 1000 }); // проверяю что загрузилась форма
    const input = await page.waitForSelector('input[name="inputNumberCard"]', {
      timeout: 1000,
    }); //
    const button = await page.waitForSelector('button[type="submit"]', {
      timeout: 1000,
    }); //
    await input.type("4556286090239596"); // вводим номер карты
    await button.click(); // кликаем по полю ввода номера карты
    await new Promise((resolve) => setTimeout(resolve, 1000)); // задержка чтоб dom  отрендился
    const isVisaActive = await page.$eval(
      'img[alt="cart_visa"]',
      (
        element, // результат проверки записал в isVisaActive булевым значением.
      ) => element.classList.contains("active_icon"),
    );
    expect(isVisaActive).toBe(true);
  });
});

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

  test("Проверка карты Discover # 6011237475975688", async () => {
    await page.goto("http://localhost:9000");
    await page.waitForSelector("form", { timeout: 1000 }); // проверяю что загрузилась форма
    const input = await page.waitForSelector('input[name="inputNumberCard"]', {
      timeout: 1000,
    }); //
    const button = await page.waitForSelector('button[type="submit"]', {
      timeout: 1000,
    }); //
    await input.type("6011237475975688"); // вводим номер карты
    await button.click(); // кликаем по полю ввода номера карты
    await new Promise((resolve) => setTimeout(resolve, 1000)); // задержка чтоб dom  отрендился
    const isVisaActive = await page.$eval(
      'img[alt="cart_discover"]',
      (
        element, // результат проверки записал в isVisaActive булевым значением.
      ) => element.classList.contains("active_icon"),
    );
    expect(isVisaActive).toBe(true);
  });

  test("Проверка карты Discover # 6011153358763531", async () => {
    await page.goto("http://localhost:9000");
    await page.waitForSelector("form", { timeout: 1000 }); // проверяю что загрузилась форма
    const input = await page.waitForSelector('input[name="inputNumberCard"]', {
      timeout: 1000,
    }); //
    const button = await page.waitForSelector('button[type="submit"]', {
      timeout: 1000,
    }); //
    await input.type("6011153358763531"); // вводим номер карты
    await button.click(); // кликаем по полю ввода номера карты
    await new Promise((resolve) => setTimeout(resolve, 1000)); // задержка чтоб dom  отрендился
    const isVisaActive = await page.$eval(
      'img[alt="cart_discover"]',
      (
        element, // результат проверки записал в isVisaActive булевым значением.
      ) => element.classList.contains("active_icon"),
    );
    expect(isVisaActive).toBe(true);
  });

  test("Проверка карты Discover # 6011227373816472", async () => {
    await page.goto("http://localhost:9000");
    await page.waitForSelector("form", { timeout: 1000 }); // проверяю что загрузилась форма
    const input = await page.waitForSelector('input[name="inputNumberCard"]', {
      timeout: 1000,
    }); //
    const button = await page.waitForSelector('button[type="submit"]', {
      timeout: 1000,
    }); //
    await input.type("6011227373816472"); // вводим номер карты
    await button.click(); // кликаем по полю ввода номера карты
    await new Promise((resolve) => setTimeout(resolve, 1000)); // задержка чтоб dom  отрендился
    const isVisaActive = await page.$eval(
      'img[alt="cart_discover"]',
      (
        element, // результат проверки записал в isVisaActive булевым значением.
      ) => element.classList.contains("active_icon"),
    );
    expect(isVisaActive).toBe(true);
  });
});

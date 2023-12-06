import { browser, $ } from "@wdio/globals";

const TextBox = require("../pageObjects/TextBox.page");
const textBox = new TextBox();

const validName = "test123";
const validEmail = "test123@gmail.com";
const validCurrent = "Daugavpils";
const validPermanent = "Riga";

describe("Testing of Text box example", () => {
  beforeEach(async () => {
    await browser.url("./text-box");
  });
  it("fill the form with valid data", async () => {
    await textBox.login(validName, validEmail, validCurrent, validPermanent);
    await textBox.checkCredentials(
      validName,
      validEmail,
      validCurrent,
      validPermanent
    );
  });
  it("fill the form with not valid data", async () => {
    await textBox.login(
      validName,
      "invalidEmail",
      validCurrent,
      validPermanent
    );
    await expect($(".field-error")).toBeExisting();
  });
  it("asd", async () => {});
});

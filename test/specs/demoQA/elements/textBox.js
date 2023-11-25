const TextBox = require("./pageObjects/TextBox.page");
const textBox = new TextBox();

const validName = "test123";
const validEmail = "test123@gmail.com";
const validCurrent = "Daugavpils";
const validPermanent = "Riga";

describe("Testing of Text box example", () => {
  beforeEach(async () => {
    // Navigation
    await browser.url("./text-box");
  });
  it("fill the form with valid data", async () => {
    // Set data
    await textBox.login(validName, validEmail, validCurrent, validPermanent);

    // Checking
    await textBox.check(validName, validEmail, validCurrent, validPermanent);
  });
  it("fill the form with not valid data", async () => {
    // Set values
    await textBox.login(
      validName,
      "invalidEmail",
      validCurrent,
      validPermanent
    );

    // Checking
    await expect($(".field-error")).toBeExisting();
  });
});

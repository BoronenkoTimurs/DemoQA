const NAME = "p[id=name]";
const EMAIL = "p[id=email]";
const CURRENTADDRESS = "p[id=currentAddress]";
const PERMANENTADDRESS = "p[id=permanentAddress]";

const INPUTNAME = "input[type=text]";
const INPUTEMAIL = "input[type=email]";
const INPUTCURRENTADDRESS = "#currentAddress";
const INPUTPERMANENTADDRESS = "#permanentAddress";
const SUBMITBUTTON = "button[id=submit]";

describe("Testing of Text box example", () => {
  it("fill the form with valid data", async () => {
    // Navigation
    await browser.url("./");
    await $("h5=Elements").click();
    await $$("li")[0].click();

    // Set data
    await $(INPUTNAME).setValue("test123");
    await $(INPUTEMAIL).setValue("test123@gmail.com");
    await $(INPUTCURRENTADDRESS).setValue("Daugavpils");
    await $(INPUTPERMANENTADDRESS).setValue("Riga");
    await $(SUBMITBUTTON).click();

    // Checking
    await expect($(".field-error")).not.toBeExisting();
    await expect($("div[id=output]")).toBeDisplayed();
    await expect($(NAME)).toHaveText("Name:test123");
    await expect($(EMAIL)).toHaveText("Email:test123@gmail.com");
    await expect($(CURRENTADDRESS)).toHaveText("Current Address :Daugavpils");
    await expect($(PERMANENTADDRESS)).toHaveText("Permananet Address :Riga");
  });
  it("fill the form with not valid data", async () => {
    // Navigation
    await browser.url("./");
    await $("h5=Elements").click();
    await $("span=Text Box").click();

    // Set values
    await $(INPUTNAME).setValue("test123");
    await $(INPUTEMAIL).setValue("invalidEmail");
    await $(INPUTCURRENTADDRESS).setValue("Daugavpils");
    await $(INPUTPERMANENTADDRESS).setValue("Riga");
    await $(SUBMITBUTTON).click();

    // Checking
    await expect($(".field-error")).toBeExisting();
  });
});

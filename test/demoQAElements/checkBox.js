const CheckBox = require("../pageObjects/CheckBox.page");

const checkBox = new CheckBox();

describe("Testing of Check box example", () => {
  beforeEach(async () => {
    await browser.url("./checkbox");
  });
  it("+, -, arrow left works properly", async () => {
    await checkBox.$expandAll.click();
    await checkBox.$collapseAll.click();

    await expect(checkBox.$SelectedElements).not.toBeExisting();
  });
  it("should show selected elements", async () => {
    await checkBox.openListEl();
    await checkBox.checkDestkopBox();
  });
});

describe("Testing of Check box example", () => {
  it("+, -, arrow left works properly", async () => {
    // Functions
    async function checkDestkopBox() {
      const TEXT = "span=You have selected :";

      $("span=Desktop").click();
      expect($$(".rct-text")[0].$(".rct-icon-half-check")).toBeExisting();
      expect($(TEXT).toHaveAttribute("span=desktop")).toBeExisting();
      expect($(TEXT).toHaveAttribute("span=notes")).toBeExisting();
      expect($(TEXT).toHaveAttribute("span=commands")).toBeExisting();
    }

    // Navigation
    await browser.url("./");
    await $("h5=Elements").click();
    await $$("li")[1].click();

    //Acions
    for (let i = 0; i < 5; i++) {
      await $$(".rct-icon-expand-close")[0].click();
    }
    await $(".rct-icon-collapse-all").click();
    await $(".rct-icon-expand-all").click();

    // Checking
    await browser.call(checkDestkopBox);
  });
});

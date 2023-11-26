describe("Testing of Check box example", () => {
  it("+, -, arrow left works properly", async () => {
    // Functions
    async function checkDestkopBox() {
      await $("span=Desktop").click();

      await expect($$(".rct-text")[0].$(".rct-icon-half-check"));
      await expect($("span=You have selected :")).toBeExisting();
      await expect($("span=desktop")).toBeExisting();
      await expect($("span=notes")).toBeExisting();
      await expect($("span=commands")).toBeExisting();
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

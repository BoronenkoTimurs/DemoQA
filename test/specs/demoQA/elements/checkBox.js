describe("Testing of Check box example", () => {
  it("+, -, arrow left works properly", async () => {
    // Navigation
    await browser.url("./");
    await $("h5=Elements").click();
    await $$("li")[1].click();

    //Acions
    for (let i = 0; i < 5; i++) {
      await $$(".rct-icon-expand-close")[0].click();
    }

    // Checking
  });
});

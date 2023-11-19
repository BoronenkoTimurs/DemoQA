describe("Testing of Radio Button example", () => {
  it("click on the buttons", async () => {
    // Navigation
    await browser.url("./");
    await $("h5=Elements").click();
    await $$("li")[2].click();

    // Action
    await expect($("div=No").toHaveElementClass("disabled"));

    await $("div=Yes").click();
    await expect($("span=Yes")).toBeExisting();
    await $("div=Impressive").click();
    await expect($("span=Impressive")).toBeExisting();
  });
});

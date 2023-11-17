describe("Testing the box form", () => {
  it("fill the form with valid date", async () => {
    await browser.url("./");

    const TITLE = await browser.getTitle();
    console.log(TITLE);
  });
});

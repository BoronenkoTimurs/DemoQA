class CheckBox {
  get $Desktop() {
    return $("span=Desktop");
  }
  get $Home() {
    return $("span=Home");
  }
  get $Notes() {
    return $("span=notes");
  }
  get $Commands() {
    return $("span=commands");
  }
  get $SelectedElements() {
    return $("#result");
  }
  get $collapseAll() {
    return $(".rct-icon-collapse-all");
  }
  get $expandAll() {
    return $(".rct-icon-expand-all");
  }
  get $$checkBoxIcons() {
    return $$(".rct-icon-expand-close");
  }
  async openListEl() {
    for (let i = 0; i < 6; i++) {
      await this.$$checkBoxIcons[0].click();
    }
  }
  async checkDestkopBox() {
    await this.$Home.click();
    await expect(this.$SelectedElements).toBeExisting();
    await expect(this.$Desktop).toBeExisting();
    await expect(this.$Notes).toBeExisting();
    await expect(this.$Commands).toBeExisting();
  }
}
module.exports = CheckBox;

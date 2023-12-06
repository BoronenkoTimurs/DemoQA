class TextBox {
  get $inputName() {
    return $("#userName");
  }
  get $inputEmail() {
    return $("#userEmail");
  }
  get $inputCurrent() {
    return $('textarea[id="currentAddress"]');
  }
  get $inputPermanent() {
    return $('textarea[id="permanentAddress"]');
  }
  get $submit() {
    return $("#submit");
  }
  get $answerName() {
    return $("#name");
  }
  get $answerEmail() {
    return $("#email");
  }
  get $answerCurrent() {
    return $('p[id="currentAddress"]');
  }
  get $answerPermanent() {
    return $('p[id="permanentAddress"]');
  }

  async login(name, email, current, permanent) {
    await this.$inputName.setValue(name);
    await this.$inputEmail.setValue(email);
    await this.$inputCurrent.setValue(current);
    await this.$inputPermanent.setValue(permanent);
    await this.$submit.click();
  }
  async checkCredentials(name, email, current, permanent) {
    await expect(this.$answerName).toHaveText(new RegExp(".*" + name));
    await expect(this.$answerEmail).toHaveText(new RegExp(".*" + email));
    await expect(this.$answerCurrent).toHaveText(new RegExp(".*" + current));
    await expect(this.$answerPermanent).toHaveText(
      new RegExp(".*" + permanent)
    );
  }
}

module.exports = TextBox;

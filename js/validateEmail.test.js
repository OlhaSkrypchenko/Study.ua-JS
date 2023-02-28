let assert = chai.assert;

describe("validateEmail", function () {
  describe("valid string", function () {
    it("not an empty string", function () {
      assert.equal(validateEmail(""), false);
    });
    it("typeof string", function () {
      assert.equal(validateEmail(222), false, "number error");
      assert.equal(validateEmail(true), false, "boolean error");
      assert.equal(validateEmail({}), false, "object error");
    });
    it("not all spaces", function () {
      assert.equal(validateEmail("     "), false);
    });
    it("Has length of characters < 5", function () {
      assert.equal(
        validateEmail("em@a"),
        false,
        "string has length less than 5"
      );
    });
  });
  describe("valid data", function () {
    it("Don't have the @ or @ the first character", function () {
      assert.isFalse(validateEmail("emailgmail.com"), "Don't have the @");
      assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
    });

    it("has more than two @", function () {
      assert.equal(
        validateEmail("sem@ail@gmail.com"),
        false,
        "string has more than two @"
      );
    });
    it("dot  stands after and does not stands before", function () {
      assert.equal(validateEmail("e.mail@gmail.com"), true, "");
      assert.equal(validateEmail("e.mail@gmailcom"), false, "");
      assert.equal(validateEmail("e.mail.@gmail.com"), false, "");
    });
  });
});

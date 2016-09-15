var app = require('../js-22/js/dist/test.js');

describe("app", function() {
  it("pow", function() {
      var result;
      result = app.pow(4,2);
      expect(true).toBe(16);
  });
});
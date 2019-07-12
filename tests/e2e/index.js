module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('http://www.localhost:3000/render')
      .waitForElementVisible('body')
      .setValue('input[type=email]', 'ntaylor@uship.com')
      .setValue('input[type=password]', 'password')
      .waitForElementVisible('button[type=submit]')
      //.click('button[type=submit]')
      .pause(1000)
      .assert.containsText('h1', 'Forms with Formik + TypeScript')
      .end();
  }
};
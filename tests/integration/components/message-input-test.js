import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('message-input', 'Integration | Component | message input', {
  integration: true
});

test('it renders', function(assert) {
  const testVal = "foo";
  this.set("inputText", testVal);

  // Test render
  this.render(hbs`{{message-input messageText=inputText }}`);
  assert.equal(this.$("input").val(), testVal, "Renders message text passed in");
});

test("it should trigger onSubmit action on form submit", function(assert) {
  const userEnteredText = "baz";
  
  this.set("submitAction", (messageText) => {
    assert.equal(messageText, userEnteredText, "User input is passed to submit action");
  });

  this.render(hbs`{{message-input onSubmit=(action submitAction)}}`);
  this.$("input").val(userEnteredText);
  this.$("input").change();
  this.$("form").submit();
});

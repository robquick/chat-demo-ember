import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('message-list', 'Integration | Component | message list', {
  integration: true
});

test('it renders', function(assert) {
  const testMessages = [
    { userName: "first", text: "Hello!" },
    { userName: "second", text: "Goodbye!" }
  ];
  
  this.set("testMessages", testMessages);
  this.render(hbs`{{message-list messages=testMessages}}`);
  
  // Verify that two messages were rendered
  assert.equal(this.$(".message").length, 2, "Correct number of message elements rendered");

  // Verify that the message details are rendered
  assert.equal(this.$(".user-name:eq(0)").text(), testMessages[0].userName, "Username from message 1 rendered");
  assert.equal(this.$(".user-name:eq(1)").text(), testMessages[1].userName, "Username from message 2 rendered");
  assert.equal(this.$(".msg-text:eq(0)").text(), testMessages[0].text, "Text from message 1 rendered");
  assert.equal(this.$(".msg-text:eq(1)").text(), testMessages[1].text, "Text from message 2 rendered");
});

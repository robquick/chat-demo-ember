import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('message-item', 'Integration | Component | message item', {
  integration: true
});

test('it renders', function(assert) {
  const testMessage = { userName: "UN", text: "Hello World!" };
  this.set("testMessage", testMessage);

  this.render(hbs`{{message-item message=testMessage}}`);

  // Verify username and message text were populated
  assert.equal(this.$(".user-name").text(), testMessage.userName, "Username is rendered correctly");
  assert.equal(this.$(".msg-text").text(), testMessage.text, "Message text is rendered correctly");
});

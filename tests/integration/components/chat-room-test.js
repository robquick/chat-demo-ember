import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chat-room', 'Integration | Component | chat room', {
  integration: true
});

test('it renders', function(assert) {
  const testUsers = [
    { name: "one" },
    { name: "two" }
  ];
  const testMessages = [
    { userName: "one", text: "hey" },
    { userName: "two", text: "sup?" },
    { userName: "one", text: "nothin" }
  ];
  this.set("testUsers", testUsers);
  this.set("testMessages", testMessages);

  this.render(hbs`{{chat-room users=testUsers messages=testMessages}}`);

  assert.equal(this.$(".user-item").length, 2, "Renders the correct number of users");
  assert.equal(this.$(".message").length, 3, "Renders the correct number of mesages");
});


test("it receives message text when message input component fires event", function(assert) {
  const userEnteredText = "foo";
  this.set("submitAction", (msgText) => {
    assert.equal(msgText, userEnteredText, "Message text is passed from message-input to this parent");
  });

  this.render(hbs`{{chat-room submitMessage=(action submitAction)}}`);
  this.$("input").val(userEnteredText);
  this.$("input").change();
  this.$("form").submit();
});
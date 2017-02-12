import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-list', 'Integration | Component | user list', {
  integration: true
});

test('it renders', function(assert) {

  const testUsers = [
    { name: "ABC" },
    { name: "123" }
  ];
  this.set("testUsers", testUsers);

  this.render(hbs`{{user-list users=testUsers}}`);

  // Verify 2 users were rendered
  assert.equal(this.$(".user-item").length, 2, "Correct number of users rendered");

  // Verify each user's name was rendered
  assert.equal(this.$(".user-item:eq(0)").text().trim(), testUsers[0].name, "Username of user 1 rendered");
  assert.equal(this.$(".user-item:eq(1)").text().trim(), testUsers[1].name, "Username of user 2 rendered");
});

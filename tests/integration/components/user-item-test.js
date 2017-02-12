import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-item', 'Integration | Component | user item', {
  integration: true
});

test('it renders', function(assert) {
  const testUser = { name: "Dr. User Name, MD" };
  this.set("testUser", testUser);

  this.render(hbs`{{user-item user=testUser}}`);

  assert.equal(this.$(".user-item").attr("title"), testUser.name, "Username set as title of div");
  assert.equal(this.$(".user-item").text().trim(), testUser.name, "Username rendered as text within div");
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('login-form', 'Integration | Component | login form', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{login-form}}`);

  assert.equal(this.$("label").text().trim(), "Who are you?", "Renders correct label");
  assert.equal(this.$("button").text().trim(), "Log In", "Renders correct button text");
});

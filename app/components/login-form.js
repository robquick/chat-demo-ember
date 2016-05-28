import Ember from 'ember';

export default Ember.Component.extend({
    userName: null,
    
    didInsertElement() {
        this._super(...arguments);
        this.$("input").focus();
    },
    
    actions: {
        onSubmit() {
            const userName = this.get("userName");
            this.get("onLogin")(userName);
        }
    }
});

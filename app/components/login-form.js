import Ember from 'ember';

export default Ember.Component.extend({
    userName: null,
    
    didInsertElement() {
        this._super(...arguments);
        this.$("input").focus();
    },
    
    actions: {
        save() {
            const userName = this.get("userName");
            console.log(userName);
        }
    }
});

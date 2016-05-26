import Ember from 'ember';

export default Ember.Component.extend({
    messageText: null,
    
    didInsertElement() {
        this._super(...arguments);
        this.$("input").focus();
    },
    
    actions: {
        save() {
            const msgText = this.get("messageText");
            console.log(msgText);
        }
    }
});

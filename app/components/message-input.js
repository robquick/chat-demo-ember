import Ember from 'ember';

export default Ember.Component.extend({
    messageText: null,
    
    didInsertElement() {
        this._super(...arguments);
        this.$("input").focus();
    },
    
    actions: {
        sendMessage() {
            const msgText = this.get("messageText");
            this.get("onSubmit")(msgText);
            this.set("messageText", "");
        }
    }
});

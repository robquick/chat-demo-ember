import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["chat-room", "container-fluid"],
    actions: {
        onMessageSubmit(msgText) {
            this.get("submitMessage")(msgText);
        }
    }
});

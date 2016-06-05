import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["message-list"],
    shouldScrollToBottom: false,
    
    scrollToBottom() {
        const scrollHeight = this.$()[0].scrollHeight;
        this.$().scrollTop(scrollHeight);
    },
    
    didInsertElement() {
        this._super(...arguments);
        this.scrollToBottom();
    },
    
    willUpdate() {
        const div = this.$();
        const shouldScroll = (div.scrollTop() + div.height()) === div[0].scrollHeight;
        this.set("shouldScrollToBottom", shouldScroll);
    },
    
    didUpdate() {
        this._super(...arguments);
        if (this.get("shouldScrollToBottom")) {
            this.scrollToBottom();
        }
    }
});

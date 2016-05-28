import Ember from 'ember';

export default Ember.Service.extend({
    userName: null,
    isActive: Ember.computed.bool("userName"),
    start(user) {
        const name = user.get("name");
        this.set("userName", name);
    }
});

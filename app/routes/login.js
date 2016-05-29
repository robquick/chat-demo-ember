import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    actions: {
        loginUser(name) {
            const user = this.store.createRecord("user", { name });
            user.save().then(u => {
                this.get("session").start(u);
                u.ref().onDisconnect().remove();
                this.transitionTo("index");
            });
        }
    }
});

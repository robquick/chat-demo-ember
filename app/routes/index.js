import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Route.extend({
    
    session: Ember.inject.service(),
    
    beforeModel() {
        let session = this.get("session");
        if (!session.get("isActive")) {
            this.transitionTo("login");
        }
    },
    
    model() {
        return RSVP.hash({
            users: this.store.findAll("user"),
            messages: this.store.findAll("message")
        });
    }
    
});

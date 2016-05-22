import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    beforeModel() {
        let session = this.get("session");
        if (!session.get("isActive")) {
            this.transitionTo("login");
        }
    }
});

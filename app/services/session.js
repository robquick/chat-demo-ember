import Ember from 'ember';

export default Ember.Service.extend({
    userName: null,
    isActive: Ember.computed.bool("userName")
});

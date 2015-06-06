import Ember from 'ember';

var Room = Ember.Object.extend({
  addMessage: function(sender, msg) {
    var messages = this.get('messages');

    messages.addObject(msg);
  },

  userJoin: function(user) {
    var users = this.get('users');
    users.addObject(user);
  }  
});

Room.buildNew = function(users, messages) {
  return Room.create({
    users: users,
    messages: messages
  });
};

export default Room;

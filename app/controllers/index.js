import Ember from 'ember';

import Room from 'chatr/models/chat-room';

import Message from 'chatr/models/chat-message';

export default Ember.Controller.extend({
  
  initRoom: function(users, messages) {
    var room = Room.buildNew(users, messages);

    this.set('room', room);
  },

  addMessage: function(sender, msg) {
    var room = this.get('room');

    msg = Message.buildNew(sender, msg);

    room.addMessage(sender, msg);
  },

  actions: {
    sendChat: function(msg) {
      this.addMessage('ME', msg);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    sendChat: function() {
      var msg = this.get('chatInput');
      this.set('chatInput', "");
      this.sendAction("onSendChat", msg);
    }
  }
});


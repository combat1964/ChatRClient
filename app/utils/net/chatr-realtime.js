import Ember from 'ember';

import LobbyCallbacks from 'chatr/utils/net/lobby-callbacks';

class SignalRConnection {
  constructor(url) {
    this.connection = Ember.$.connection;

    this.connection.hub.url = url;
  }


  configureHubs(ctrl) {
    this.OnLobby = new LobbyCallbacks(this, ctrl);

    var lobby = this.connection.lobby;
    this.lobby = lobby;    

    this.addLobbyClientBinding('lobbyEntered');
  }

  addLobbyClientBinding(fn) {
    var lobby = this.connection.lobby;
    lobby.client[fn] = this.OnLobby[fn].bind(this.OnLobby);
  }


  start() {
    var self = this;

    var hub = this.connection.hub;

    hub.error(function(reason) {
      console.log('connection error: ' + reason);
    });

    return hub.start({
      withCredentials: false
    }).then(function() {
      self.lobby.server.join();
    });
  }
}

export default SignalRConnection;

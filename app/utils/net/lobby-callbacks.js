
class LobbyCallbacks {
  constructor(signalr, ctrl) {
    this.signalr = signalr;
    this.ui = ctrl;
  }

  lobbyEntered() {
    console.log('lobby entered');
  }
}

export default LobbyCallbacks;

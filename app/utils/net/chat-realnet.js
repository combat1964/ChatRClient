
class RealNet {
  constructor(signalr) {
    this.signalr = signalr;
  }


  netAction(fn, args, hub) {
    var server = this.signalr[hub].server;

    if (server[fn] === undefined) {
      console.log('bad network action ' + fn);
      return;
    }

    server[fn].apply(null, args);
  }


  sendLobbyRequest(fn, args) {
    this.netAction(fn, args, 'lobby');
  }
}

export default RealNet;

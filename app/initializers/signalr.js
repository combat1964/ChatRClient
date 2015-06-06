import SignalRConnection from 'chatr/utils/net/chatr-realtime';

export function initialize(container, application) {
  var realtime = new SignalRConnection('http://localhost:53246/signalr');

  application.register('realtime:signalr', realtime, { instantiate: false });

  application.inject('route:index', 'signalr', 'realtime:signalr');
}

export default {
  name: 'signalr',
  initialize: initialize
};

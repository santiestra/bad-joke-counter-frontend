class WebSocketConnection {
  constructor(uri, onMessageCallback) {
    this.ws = new WebSocket(uri);
    this.wsTimeout = null;
    this.onMessageCallback = onMessageCallback;
    this.ping = this.ping.bind(this);
    this.pong = this.pong.bind(this);

    this.ws.onopen = () => {
      console.log('Connected');
      setInterval(this.ping, 30000);
    }

    this.ws.onmessage = ({ data }) => {
      console.log(data);
      if (data === 'pong') {
        this.pong();
      } else {
        this.onMessageCallback(data)
      }
    }
  }

  ping() {
    this.ws.send('ping');
    this.wsTimeout = setTimeout(() => console.log('Connection closed'), 5000);
  }

  pong() {
    clearTimeout(this.wsTimeout);
  }
}

export default WebSocketConnection;

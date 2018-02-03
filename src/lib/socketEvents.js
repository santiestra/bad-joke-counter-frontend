import { increment } from "../actions";

const ws = new WebSocket(process.env.REACT_APP_WS_URI);

ws.onopen = () => console.log('Connected');
ws.onmessage = (message) => {
  console.log(message);
  const { user } = JSON.parse(message.data);
  increment(user);
}

export default ws;

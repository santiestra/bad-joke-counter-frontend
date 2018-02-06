import WebSocketConnection from './WebSocketConnection';
import { increment } from "../actions";

const onEvent = (data) => {
  const { user } = JSON.parse(data);
  increment(user);
}
const ws = new WebSocketConnection(process.env.REACT_APP_WS_URI, onEvent);

export default ws;

// https://github.com/pladaria/reconnecting-websocket
import ReconnectingWebSocket from 'reconnecting-websocket';
import { baseUrl, } from 'axios/axios';

const rws = new ReconnectingWebSocket(`wss://${baseUrl}/ws/api/dynamic_data/${token}`);
rws.onmessage = event => {
  let action = JSON.parse(event.data);

};
rws.send(JSON.stringify(action));
rws.

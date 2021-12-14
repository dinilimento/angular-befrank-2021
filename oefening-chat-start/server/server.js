import express from 'express';
import expressWs from 'express-ws';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
expressWs(app);
app.use(cors());
app.use(bodyParser.json());

const clients = [];

app.get('/', (req, res) => res.send('Hi there. Go ahead and send WebSocket requests to /chat.'));

app.post('/api/admin/announce', (req, res) => {
	let message = JSON.stringify({
		sender: 'Admin',
		type: 'announcement',
		content: req.body.message,
		timestamp: Date.now()
	});
	clients.forEach(c => c.send(message));
	res.status(204).send();
});

app.ws('/chat', ws => {
	// let the new client know which users he's chatting with
	console.log('nieuwe socket');
	clients.forEach(c => {
		console.log('-- user opsturen:', c.chatName);
		ws.send(JSON.stringify({
			type: 'user-connect',
			sender: c.chatName
		}));
	});

	clients.push(ws);

	ws.on('message', message => {
		// when users connect, register the name on the websocket so that we 
		// can broadcast who's leaving on disconnect
		let msgObj = JSON.parse(message);
		if (msgObj.type === 'user-connect') {
			ws.chatName = msgObj.sender;
			console.log('user geconnect:', msgObj.sender);
		}

		// all other messages, simply broadcast
		clients.forEach(c => c.send(message));
	});
	ws.on('close', () => {
		console.log('user disconnect:', ws.chatName);

		// remove socket from list of socket connection
		clients.splice(clients.indexOf(ws), 1);

		// broadcast disconnect message
		let message = JSON.stringify({
			sender: ws.chatName,
			type: 'user-disconnect',
			timestamp: Date.now()
		});
		clients.forEach(c => c.send(message));
	});
});

app.listen(1337, () => console.log('Chatserver is spinning @ :1337'));
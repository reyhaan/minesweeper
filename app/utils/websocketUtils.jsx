import io from 'socket.io-client'

const websocketUrl = 'http://shuttleup-kafka-server.herokuapp.com/socket.io/'

const socket = io(websocketUrl, {
  forceNew: true,
  jsonp: false,
  reconnection: true,
  transports: ['websocket'],
})

socket.on('connect', () => {
  socket.emit('join', 'game')
  console.log('SOCKET CONNECTED!')
})

socket.on('disconnect', () => {
  console.log('##### DISCONNECTED')
})

export default socket

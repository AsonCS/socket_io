import { createServer } from 'http'
import * as express from 'express'
import { Server } from 'socket.io'
import { join } from 'path'

//import route from './route'

const app = express()
app.use(express.json())

//app.use(route())

app.use(express.static(join(__dirname, 'public')))

const server = createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    /*
    // eslint-disable-next-line no-console
    console.log('a user connected')
    socket.on('test', (msg) => {
        // eslint-disable-next-line no-console
        console.log('message: ' + msg)
        socket.emit('test', image)
    })
    socket.on('disconnect', () => {
        // eslint-disable-next-line no-console
        console.log('user disconnected')
    })
    */
    socket.on('screencast', (actionId, fps, quality, scale, playback) => {
        socket.broadcast.emit('screencast', actionId, fps, quality, scale, playback)
    })
    socket.on('image64', (image) => {
        socket.broadcast.emit('image64', image)
    })
})

server.listen(3000, '0.0.0.0', () => {
    // eslint-disable-next-line no-console
    console.log('server running at http://localhost:3000')
})

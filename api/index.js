import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import chalk from 'chalk'
import router from './src/routes/indexRoutes.js'

const server = express()
const PORT = process.env.PORT || 3001

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))


//server.use('/', router)

server.use( (err, req, res, next) => {
    const message = err.message || err
    const status = err.status || 500
    res.status(status).json({
        estate:'error',
        message 
    })
})



server.listen(PORT, console.log(`server is listeng in port  ${chalk.green( PORT)} ${chalk.yellow('http://localhost:3001')}`))
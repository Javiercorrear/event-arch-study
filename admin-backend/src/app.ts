import * as express from 'express'
import * as cors from 'cors'
import { createConnection } from 'typeorm'

createConnection().then( db => {
    const app = express()

    app.use( cors() )
    app.use( express.json() )
    
    console.log( 'Server running on port 3001' )
    app.listen( 3001 )
} )

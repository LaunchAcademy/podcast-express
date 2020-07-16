import express from 'express'
import path from 'path'
import fs from 'fs'
import logger from 'morgan'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';
import expressSession from 'express-session'
import flash from 'flash'
import hbsMiddleware from 'express-handlebars'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '../public')))

app.set('views', path.join(__dirname, '../views'))
app.engine(
  'hbs',
  hbsMiddleware({
    defaultLayout: 'default',
    extname: '.hbs'
  })
)
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(express.json())
app.use(
  expressSession({
    secret: 'Launch Academy',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
)
app.use(flash())
// -------------------------------------------------------

const podcastsPath = path.join(__dirname, '../podcasts.json')
const getPodcasts = () => {
  const fileContents = fs.readFileSync(podcastsPath).toString()
  return JSON.parse(fileContents)
}







export default app

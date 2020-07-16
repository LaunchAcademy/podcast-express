import express from 'express'
import path from 'path'
import fs from 'fs'
import logger from 'morgan'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

app.use(logger("dev"))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "../public")))

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

// -------------------------------------------------------

const podcastList = [
  "The Daily",
  "MBMBAM",
  "Reply All",
  "This American Life",
  "Mission to Zyx"
]


app.get("/test", (req, res) => {
  // res.status(200).send(`<h1>${product.title}</h1><p>${product.description}</p>`)

  res.contentType("text/html")
  .status(200)
  .send("Hi")
})

app.get("/", (req, res) => {
  res.send("/podcasts")
})




export default app

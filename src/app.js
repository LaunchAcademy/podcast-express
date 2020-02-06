const express = require("express")
const path = require("path")
const fs = require("fs")
const logger = require("morgan")
const bodyParser = require("body-parser")
const app = express()
const hbsMiddleware = require("express-handlebars")

app.use(logger("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "../public")))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
// view engine setup
app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)
app.set("view engine", "hbs")

const podcastPath = path.join(__dirname, "../podcast.json")

const getPodcastList = () => {
  let fileContents = fs.readFileSync(podcastPath).toString()
  return JSON.parse(fileContents)
}


// -------------------------------------------------------



app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening on port 3000...")
})

module.exports = app

const express = require("express")
const path = require("path")
const fs = require("fs")
const logger = require("morgan")
const bodyParser = require("body-parser")

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

const podcastDetails = {
    "the-daily": {
        title: "The Daily",
        description: "The way daily news should sound. The most important subjects you need to know.",
        network: "New York Times"
    },
    "mbmbm": {
        title: "My Brother, My Brother, and Me",
        description: "Three comedic brothers, too many strange questions, endless funnies.",
        network: "Maximum Fun"
    },
    "reply-all": {
        title: "Reply All",
        description: "A podcast about the internet that is actually an unfailingly original exploration of modern life and how to survive it.",
        network: "Gimlet"
    },
    "this-american-life": {
        title: "This American Life",
        description: "This American Life is a weekly public radio show, heard by 2.2 million people on more than 500 stations.",
        network: "NPR"
    },
    "mission-to-zyx": {
        title: "Mission to Zyx",
        description: "TMISSION TO ZYXX is an improvised science fiction podcast following a team of ambassadors as they attempt to establish diplomatic relations with planets in the remote and chaotic ZYXX QUADRANT",
        network: "Maximum Fun"
    }
  }

app.get("/test", (req, res) => {
  // res.status(200).send(`<h1>${product.title}</h1><p>${product.description}</p>`)

  res.contentType("text/html")
  .status(200)
  .send("Hi")
})

// app.get("/", (req, res) => {
//   res.redirect("/podcasts")
// })




module.exports = app

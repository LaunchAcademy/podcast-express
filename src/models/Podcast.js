import fs from "fs"

const podcastsPath = "podcasts.json"

const podcastsJSON = () => {
  return JSON.parse(fs.readFileSync(podcastsPath))
}

class Podcast {}

export default Podcast

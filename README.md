Welcome to Podcast Express, your one stop shop for all of the coolest podcasts. We'll need to utilize your web development skills to help prepare the site for our new users!

**Tips:** _Note you will need to navigate to these endpoints by editing the url in your browser directly._ We'll need to use dynamic routing, queries, and params to accomplish these tasks. Focus first on defining your endpoint, then on rendering the required data at that route, and lastly on being able to handle for "data not found" cases.
> Your HTML can be written out as strings and passed into your send method. See [the res.send docs](https://expressjs.com/en/4x/api.html#res.send)

### Core User Stories

#### Part 1

```no-highlight

```

Acceptance Criteria:

- When I visit `/`, I am redirected to `/groceries`"


#### Part 2

```no-highlight

```

Acceptance Criteria:
- `podcast.json` has all of our podcasts. Make sure they make their way to our webpage!
- When I visit `/podcasts` I should see a list of podcasts on the networks

#### Part 3

```no-highlight

```

Acceptance Criteria:
- `podcastList` in `podcast.json` has all of our podcasts. Make sure they make their way to our webpage!
- When I visit `/podcasts` I should see a list of podcasts names
- When I visit `/podcasts` I should see a form on the same page to add new podcasts with fields for `title`, `description`, `network`
- On submission the page should refresh and my new podcast should show up in the list as well as be saved in our `podcast.json`

#### Part 4

```no-highlight

```

Acceptance Criteria:
- all of the podcast names on `/podcasts` should be links to the podcast's individual `showpage`
- visiting `/podcasts/:podcastTitle` should show that podcasts `title`, `description`, and `network`

#### Part 5

```no-highlight

```

Acceptance Criteria:
- if a podcast is submitted without a title an error is displayed and the podcast is not added to the JSON or the list

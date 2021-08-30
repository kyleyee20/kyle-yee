export const PersonalProjectData = [
  {
    title: "Simon-Says Game",
    description:
      "In this game, you have to mimick the pattern of the tiles! Each round, a new tile is added to the pattern and indicated by a flashing light. I programmed this game using JavaScript and JQuery to control on-screen clicks and store user input into arrays in order to keep track of patterns.",

    hosted: true,
    hostedLink: "https://cameron327.github.io/simon-says-game/",
    code: "https://github.com/Cameron327/simon-says-game",
  },
  {
    title: "Drum Simulator",
    description:
      "This website simulates drums! The drum buttons are activated with keyboard clicks or mouse clicks. The user input is detected with JQuery and stores them into variables. Once stored, it calls a function that plays the respective drum sounds.",
    hosted: true,
    hostedLink: "https://cameron327.github.io/DrumKit/",
    code: "https://github.com/Cameron327/DrumKit",
  },
  {
    title: "Weather App",
    description:
      "A multipurpose weather app that shows current forecasts while also showing wind speed and humidity! The data is fetched from a third-party source (A Weather API) using axios, an http client used to make API calls. This allows users to access information about the weather through their source and use it however. I displayed the data on the front-end using React.js.",
    hosted: true,
    hostedLink: "https://camweatherapp2.herokuapp.com/",
    code: "https://github.com/Cameron327/weatherapp2",
  },
  {
    title: "Slack Apps/Bots",
    description:
      "Slack is a popular messaging platform used in the work industry. A Slack App is a feature you add to Slack where you integrate different kinds of technologies to create a variety of features. Created multiple Slack Apps over the span of 5 weeks including a Translator App (translates Slack messages to any langauage by communicating with the Google Translate API), a GitHub notifier (notifies you through Slack if someone interacts with your GitHub profile), a Poll Creater (able to create polls and send to group chats), etc. Used JavaScript, axios, express.js, webhooks, and node.js to implement these different features.",
    hosted: false,
    hostedLink: "",
    code: "https://github.com/Cameron327/creating-slack-apps",
  },
];

export const HackathonProjectData = [
  {
    title: "Apartment-Finder Prototype",
    description:
      "Built apartment-finder prototype that won first place out of 400+ participants for Best Use of UiPath. Quickly adapted to learn and implement data-scraping, python and its libraries, and k-means clustering to build a working apartment-finder in under 24 hours.",

    devpostLink: "https://devpost.com/software/apartment-value-estimator",
  },
  {
    title: "Smart and Safe Security System",
    description:
      "Designed a web page to use the webcam to survey an area and gather data on the number of people and relays said data to a database to determine whether an area is too crowded for comfort. Quickly adapted to learn and utilize React.js, Node.js, HTML, CSS, and JavaScript to build the security web page while also utilizing the machine learning capabilities of tensorflow.js to detect people in frame.",
    devpostLink: "https://devpost.com/software/ai-on-you",
  },
  {
    title: "Learning Resource Library",
    description:
      "Developed web app that acts as a learning resource library for college students by compiling notes on classes, learning guides, etc. including a search system using tags and keywords. Implemented SQL CockroachDB to store the table containing the tag mappings to the files, Google Firebase to store the files for backend, and implemented React.js and Material.ui for frontend.",
    devpostLink: "https://devpost.com/software/lurn-sfn5g3",
  },
];

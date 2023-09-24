/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let path = 1;
let userName;

// Movie Arrays
const randomMovies = [
  "The Shawshank Redemption (1994)",
  "The Godfather (1972)",
  "The Dark Knight (2008)",
];
const adventureFantasy = [
  "Labyrinth (1986)",
  "Jumanji (1995)",
  "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005)",
];
const adventureSciFi = [
  "The Matrix (1999)",
  "Interstellar (2014)",
  "Wall-E (2008)",
];
const horrorFake = ["Sinister (2012)", "Get Out (2017)", "The Ring (2002)"];
const horrorReal = [
  "The Conjuring (2013)",
  "The Exorcist (1973)",
  "Zodiac (2007)",
];

const getBotReply = (msg) => {
  const lowercaseUserInput = msg.toLowerCase();
  const lowercaseUserInputIsReset = lowercaseUserInput === "reset";
  const lowercaseUserInputIsRestart = lowercaseUserInput === "restart";
  const validInputs = [
    "yes",
    "no",
    "adventure",
    "fantasy",
    "sci-fi",
    "horror",
    "real",
    "fake",
  ];

  // Reset option
  if (lowercaseUserInputIsReset) {
    path = 2;
    return "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
  }
  // Restart Option
  if (lowercaseUserInputIsRestart) {
    path = 1;
    return `Hello, ${userName}! Lets find a movie to watch! Shall we? (input: yes | no)`;
  }
  // First level of the bot
  if (path === 1) {
    if (lowercaseUserInput === "no") {
      path = 8;
      return "O.K. I see how it is...";
    }
    if (lowercaseUserInput === "yes") {
      path = 2;
      return "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    }
  }
  // For the random selector
  if (path === 2) {
    if (lowercaseUserInput === "yes") {
      return "Pick a number, 1, 2, or 3?";
    }
  }
  if (path === 2) {
    if (lowercaseUserInput === "1") {
      path = 8;
      return `I think you should  watch ${randomMovies[0]}. Enjoy, ${userName}!`;
    } else if (lowercaseUserInput === "2") {
      path = 8;
      return `I think you should  watch ${randomMovies[1]}. Enjoy, ${userName}!`;
    } else if (lowercaseUserInput === "3") {
      path = 8;
      return `I think you should  watch ${randomMovies[2]}. Enjoy, ${userName}!`;
    }
  }

  // For the Genre selector
  if (path === 2) {
    if (lowercaseUserInput === "no") {
      path = 3;
      return "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    }
  }
  // For the adventure paths
  if (path === 3) {
    if (lowercaseUserInput === "adventure") {
      path = 4;
      return "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)";
    }
  }
  // Adventure Fantasy
  if (path === 4) {
    if (lowercaseUserInput === "fantasy") {
      return "Pick a number, 1, 2, or 3?";
    }
  }
  if (path === 4) {
    if (lowercaseUserInput === "1") {
      path = 8;
      return `I think you should  watch ${adventureFantasy[0]}. Enjoy, ${userName}!`;
    } else if (lowercaseUserInput === "2") {
      path = 8;
      return `I think you should  watch ${adventureFantasy[1]}. Enjoy, ${userName}!`;
    } else if (lowercaseUserInput === "3") {
      path = 8;
      return `I think you should  watch ${adventureFantasy[2]}. Enjoy, ${userName}!`;
    }
  }
  // Adventure Sci-fi
  if (path === 4) {
    if (lowercaseUserInput === "sci-fi") {
      path = 5;
      return "Pick a number, 1, 2, or 3?";
    }
  }
  if (path === 5) {
    if (lowercaseUserInput === "1") {
      path = 8;
      return `I think you should  watch ${adventureSciFi[0]}. Enjoy, ${userName}!`;
    } else if (lowercaseUserInput === "2") {
      path = 8;
      return `I think you should  watch ${adventureSciFi[1]}. Enjoy, ${userName}!`;
    } else if (lowercaseUserInput === "3") {
      path = 8;
      return `I think you should  watch ${adventureSciFi[2]}. Enjoy, ${userName}!`;
    }
  }
  // For the horror paths
  if (path === 3) {
    if (lowercaseUserInput === "horror") {
      path = 6;
      return "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    }
  }
  // Horror Fake
  if (path === 6) {
    if (lowercaseUserInput === "fake") {
      return "Pick a number, 1, 2, or 3?";
    }
  }
  if (path === 6) {
    if (lowercaseUserInput === "1") {
      path = 8;
      return `I think you should  watch ${horrorFake[0]}. Enjoy, ${userName}!`;
    } else if (lowercaseUserInput === "2") {
      path = 8;
      return `I think you should  watch ${horrorFake[1]}. Enjoy, ${userName}!`;
    } else if (lowercaseUserInput === "3") {
      path = 8;
      return `I think you should  watch ${horrorFake[2]}. Enjoy, ${userName}!`;
    }
  }
  // Horror Real
  if (path === 6) {
    if (lowercaseUserInput === "real") {
      path = 7;
      return "Pick a number, 1, 2, or 3?";
    }
  }
  if (path === 7) {
    if (lowercaseUserInput === "1") {
      path = 8;
      return `I think you should  watch ${horrorReal[0]}. Enjoy, ${userName}!`;
    } else if (lowercaseUserInput === "2") {
      path = 8;
      return `I think you should  watch ${horrorReal[1]}. Enjoy, ${userName}!`;
    } else if (lowercaseUserInput === "3") {
      path = 8;
      return `I think you should  watch ${horrorReal[2]}. Enjoy, ${userName}!`;
    }
  }
  if (path === 8) {
    return "This is the end of the road. To find a different movie, type 'restart' to go back to the begining of the paths, or 'reset' to go back to the movie selectors.";
  }
  // Invalid option
  if (path > 1) {
    if (lowercaseUserInput !== validInputs) {
      return "Please enter a valid input.";
    }
  }
  // Greeting Message
  userName = msg;
  return `Hello, ${msg}! Lets find a movie to watch! Shall we? (input: yes | no)`;
};

export { getBotReply };

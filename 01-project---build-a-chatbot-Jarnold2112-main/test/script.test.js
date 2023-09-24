// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should reply with Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
  });
  it("should reply with O.K. I see how it is...", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("no");
    const expectedReply2 = "O.K. I see how it is...";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
  });
  it("should reply with Would you like me to pick someting or would you like to be more specific (inputs: yes = random | no = specific)", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
  });

  // Random movie tests
  it("should reply with Pick a number, 1, 2, or 3?", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("yes");
    const expectedReply3 = "Pick a number, 1, 2, or 3?";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply with I think you should  watch The Shawshank Redemption (1994). Enjoy, userName!", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("yes");
    const expectedReply3 = "Pick a number, 1, 2, or 3?";
    const botReply4 = getBotReply("1");
    const expectedReply4 =
      "I think you should  watch The Shawshank Redemption (1994). Enjoy, ${userName}!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply with I think you should  watch The Godfather (1972). Enjoy, userName!", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("yes");
    const expectedReply3 = "Pick a number, 1, 2, or 3?";
    const botReply4 = getBotReply("2");
    const expectedReply4 =
      "I think you should  watch The Godfather (1972). Enjoy, ${userName}!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply with I think you should  watch The Dark Knight (2008). Enjoy, userName!", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("yes");
    const expectedReply3 = "Pick a number, 1, 2, or 3?";
    const botReply4 = getBotReply("3");
    const expectedReply4 =
      "I think you should  watch The Dark Knight (2008). Enjoy, ${userName}!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
  });

  // Adventire movie tests
  it("should reply with So, what would you prefer, Adventure or Horror? (input: adventure | horror) (input: adventure | horror)", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply with Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("adventure");
    const expectedReply4 =
      "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });

  // Adventure Fantasy
  it("should reply with Pick a number, 1, 2, or 3", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("adventure");
    const expectedReply4 =
      "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)";
    const botReply5 = getBotReply("fantasy");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });
  it("should reply with I think you should  watch Labyrinth (1986). Enjoy, userName!", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("adventure");
    const expectedReply4 =
      "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)";
    const botReply5 = getBotReply("fantasy");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("1");
    const expectedReply6 =
      "I think you should  watch Labyrinth (1986). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should reply with I think you should  watch Jumanji (1995). Enjoy, userName!", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("adventure");
    const expectedReply4 =
      "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)";
    const botReply5 = getBotReply("fantasy");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("2");
    const expectedReply6 =
      "I think you should  watch Jumanji (1995). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should reply with I think you should  watch The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005). Enjoy, userName!", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("adventure");
    const expectedReply4 =
      "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)";
    const botReply5 = getBotReply("fantasy");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("3");
    const expectedReply6 =
      "I think you should  watch The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Adventure Sci-fi
  it("should reply with Pick a number, 1, 2, or 3", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("adventure");
    const expectedReply4 =
      "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)";
    const botReply5 = getBotReply("sci-fi");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });
  it("should reply with I think you should  watch The Matrix (1999). Enjoy, userName!", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("adventure");
    const expectedReply4 =
      "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)";
    const botReply5 = getBotReply("sci-fi");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("1");
    const expectedReply6 =
      "I think you should  watch The Matrix (1999). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should reply with I think you should  watch Interstellar (2014). Enjoy, userName!", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("adventure");
    const expectedReply4 =
      "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)";
    const botReply5 = getBotReply("sci-fi");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("2");
    const expectedReply6 =
      "I think you should  watch Interstellar (2014). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should reply with I think you should  watch Wall-E (2008). Enjoy, userName!", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("adventure");
    const expectedReply4 =
      "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure? (inputs: fantasy | sci-fi)";
    const botReply5 = getBotReply("sci-fi");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("3");
    const expectedReply6 =
      "I think you should  watch Wall-E (2008). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Horror movie tests
  it("should reply with Horror, huh? Ok then... Are we thinking something fake or real?  (inputs: real | fake)", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("horror");
    const expectedReply4 =
      "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });

  // Horror Fake tests
  it("should reply with Pick a number, 1, 2, or 3", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("horror");
    const expectedReply4 =
      "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    const botReply5 = getBotReply("fake");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });
  it("should reply with I think you should watch Sinister (2012). Enjoy, Jack", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("horror");
    const expectedReply4 =
      "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    const botReply5 = getBotReply("fake");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("1");
    const expectedReply6 =
      "I think you should  watch Sinister (2012). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should reply with I think you should watch Get Out (2017). Enjoy, Jack", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("horror");
    const expectedReply4 =
      "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    const botReply5 = getBotReply("fake");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("2");
    const expectedReply6 =
      "I think you should  watch Get Out (2017). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should reply with I think you should watch The Ring (2002). Enjoy, Jack", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("horror");
    const expectedReply4 =
      "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    const botReply5 = getBotReply("fake");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("3");
    const expectedReply6 =
      "I think you should  watch The Ring (2002). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  // Horror Real tests
  it("should reply with Pick a number, 1, 2, or 3", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("horror");
    const expectedReply4 =
      "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    const botReply5 = getBotReply("real");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
  });
  it("should reply with I think you should watch The Conjuring (2013). Enjoy, Jack", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("horror");
    const expectedReply4 =
      "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    const botReply5 = getBotReply("real");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("1");
    const expectedReply6 =
      "I think you should  watch The Conjuring (2013). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should reply with I think you should watch The Exorcist (1973). Enjoy, Jack", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("horror");
    const expectedReply4 =
      "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    const botReply5 = getBotReply("real");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("2");
    const expectedReply6 =
      "I think you should  watch The Exorcist (1973). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should reply with I think you should watch Zodiac (2007). Enjoy, Jack", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("horror");
    const expectedReply4 =
      "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    const botReply5 = getBotReply("real");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("3");
    const expectedReply6 =
      "I think you should  watch Zodiac (2007). Enjoy, Jack!";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });

  //Restart, reset and invalid input tests
  it("should reply with Would you like me to pick someting or would you like to be more specific (inputs: yes = random | no = specific)", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("reset");
    const expectedReply4 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  it("should reply with Hello, Jack! Lets find a movie to watch! Shall we?", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("restart");
    const expectedReply4 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
  });
  it("should reply with Please enter a valid input.", () => {
    const botReply1 = getBotReply("Jack");
    const expectedReply1 =
      "Hello, Jack! Lets find a movie to watch! Shall we? (input: yes | no)";
    const botReply2 = getBotReply("yes");
    const expectedReply2 =
      "Would you like me to pick someting or would you like to be more specific? (inputs: yes = random | no = specific)";
    const botReply3 = getBotReply("no");
    const expectedReply3 =
      "So, what would you prefer, Adventure or Horror? (input: adventure | horror)";
    const botReply4 = getBotReply("horror");
    const expectedReply4 =
      "Horror, huh? Ok then... Are we thinking something fake or real? (inputs: real | fake)";
    const botReply5 = getBotReply("real");
    const expectedReply5 = "Pick a number, 1, 2, or 3?";
    const botReply6 = getBotReply("5");
    const expectedReply6 = "Please enter a valid input.";
    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
    expect(botReply2).toEqual(expectedReply2);
    expect(botReply3).toEqual(expectedReply3);
    expect(botReply4).toEqual(expectedReply4);
    expect(botReply5).toEqual(expectedReply5);
    expect(botReply6).toEqual(expectedReply6);
  });
});

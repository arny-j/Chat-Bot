# Chatbot

This chatbot will give the user a movie/show suggestion based on the users inputs.

## Problem statement

The chatbot will give the user a suggesting for a movie to watch. It will first ask if the user wants soething random or mor specific. Then based on the input the bot will either give the user a random movie to watch, or will proceed to ask the user to pick a genre, either adventure or horror. The user will then get a movie based on their input.

## Inputs, processes and outputs

### Inputs:

- randomMovie array. (1, 2, 3)
- adventureFantasy and adventureSciFi arrays (1, 2, 3)
- realHorror and fakeHorror arrays (1, 2, 3)

### Processes and Outputs:

- The user is asked for their name.
- The user is then asked if they would like a random suggestion, or if they want to be more specific.
  - If the user chooses random, they will be asked to pick a number between 1 and 3, what ever they input will be the movie suggested to them, and the path will end.
- If the user chooses to be more specific, they will then be asked to pick between Adventure and Horror.
- If the user picks adventure, the bot will then ask oif they want the movie to have a fantasy or sci-fi setting. Based on what they pick, the bot will ask them to pick a number between 1 and 3, then give them a suggestion based on their choice.
- If the user picks horror, they will be asked if they want something made up, or based on real life, then they will be asked to pick a number between 1 and 3, and be given a suggestion based on the input.

## Test scenarios

### Greating Paths

Start: "Hello! First off, what's your name?"
Input: "Jack"
Output: "Hello, Jack! Lets find a movie to watch! Shall we?"
Input: "Yes"
Output Would you like me to pick something or would you like to be more specific?"

Start: "Hello! First off, what's your name?"
Input: "Jack"
Output: "Hello, Jack! Lets find a movie to watch! Shall we?"
Input: "No"
Output "O.K. I see how it is..."

### Random Option

Start: "Hello! First off, what's your name?"
Input: "Jack"
Output: "Hello, Jack! Lets find a movie to watch! Shall we?"
Input: "Yes"
Output Would you like me to pick something or would you like to be more specific? (random/specific)"
Input: "random"
Output: "Pick a number, 1, 2, or 3?"
Input: "1"
Output: "I thin you should watch randomMovie1. Hope you enjoy!"

Output Would you like me to pick something or would you like to be more specific? (random/specific)"
Input: "random"
Output: "Pick a number, 1, 2, or 3?"
Input: "2"
Output: "I thin you should watch randomMovie3. Hope you enjoy!"

Output Would you like me to pick something or would you like to be more specific? (random/specific)"
Input: "random"
Output: "Pick a number, 1, 2, or 3?"
Input: "3"
Output: "I thin you should watch randomMovie3. Hope you enjoy!"

### Adventure Paths

Start: "Hello! First off, what's your name?"
Input: "Jack"
Output: "Hello, Jack! Lets find a movie to watch! Shall we?"
Input: "Yes"
Output Would you like me to pick something or would you like to be more specific? (random/specific)"
Input: "specific"
Output: "So, what would you prefer, Adventure or Horror?"

Output: "So, what would you prefer, Adventure or Horror?"
Input: "Adventure"
Output: "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure?"

Output: "So, what would you prefer, Adventure or Horror?"
Input: "Adventure"
Output: "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure?"
Input: "fantasy"
Output: "Pick a number, 1, 2, or 3?"
Input: "1"
Output: "I think you will enjoy adventureFantasy1. Hope you enjoy!"

Output: "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure?"
Input: "fantasy"
Output: "Pick a number, 1, 2, or 3?"
Input: "2"
Output: "I think you will enjoy adventureFantasy2. Hope you enjoy!"

Output: "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure?"
Input: "fantasy"
Output: "Pick a number, 1, 2, or 3?"
Input: "3"
Output: "I think you will enjoy adventureFantasy3. Hope you enjoy!"

Output: "So, what would you prefer, Adventure or Horror?"
Input: "Adventure"
Output: "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure?"
Input: "sci-fi"
Output: "Pick a number, 1, 2, or 3?"
Input: "1"
Output: "I think you will enjoy adventureSciFi1. Hope you enjoy!"

Output: "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure?"
Input: "fantasy"
Output: "Pick a number, 1, 2, or 3?"
Input: "2"
Output: "I think you will enjoy adventureSciFi2. Hope you enjoy!"

Output: "Adventure, interesting... would you like a fantasy or sci-fi setting for your adventure?"
Input: "fantasy"
Output: "Pick a number, 1, 2, or 3?"
Input: "3"
Output: "I think you will enjoy adventureSciFi3. Hope you enjoy!"

### Horror Paths

Output Would you like me to pick something or would you like to be more specific? (random/specific)"
Input: "specific"
Output: "So, what would you prefer, Adventure or Horror?"
Input: "horror"
Output: "Horror, huh? Ok then... Are we thinking something fake or real?"

Output: "So, what would you prefer, Adventure or Horror?"
Input: "horror"
Output: "Horror, huh? Ok then... Are we thinking something fake or real?"
Input: "fake"
Output: "Pick a a number, 1, 2, or 3?"
Input: "1"
Output: "I think you should watch horrorFake1. Enjoy!"

Output: "Horror, huh? Ok then... Are we thinking something fake or real?"
Input: "fake"
Output: "Pick a a number, 1, 2, or 3?"
Input: "2"
Output: "I think you should watch horrorFake2. Enjoy!"

Output: "Horror, huh? Ok then... Are we thinking something fake or real?"
Input: "fake"
Output: "Pick a a number, 1, 2, or 3?"
Input: "3"
Output: "I think you should watch horrorFake3. Enjoy!"

Output: "So, what would you prefer, Adventure or Horror?"
Input: "horror"
Output: "Horror, huh? Ok then... Are we thinking something fake or real?"
Input: "real"
Output: "Pick a a number, 1, 2, or 3?"
Input: "1"
Output: "I think you should watch horrorReal1. Enjoy!"

Output: "Horror, huh? Ok then... Are we thinking something fake or real?"
Input: "real"
Output: "Pick a a number, 1, 2, or 3?"
Input: "2"
Output: "I think you should watch horrorReal2. Enjoy!"

Output: "Horror, huh? Ok then... Are we thinking something fake or real?"
Input: "real"
Output: "Pick a a number, 1, 2, or 3?"
Input: "3"
Output: "I think you should watch horrorReal3. Enjoy!"

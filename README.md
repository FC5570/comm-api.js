# comm-api.js

A wrapper for [my api](https://api.fc5570.ml).

## Installation

NPM -

```
npm i comm-api.js
```

Yarn -

```
yarn add comm-api.js
```

## Examples

#### Joke endpoint:

```
const api = require('comm-api.js')
api.joke().then(m => console.log(m))
```

#### Chatbot endpoint:

```
const api = require('comm-api.js')
api.chatbot('hey').then(m => console.log(m)) // hello!
```

### List of all the functions:

### Animals

| Functions    | Required Parameters | Description                            |
| ------------ | ------------------- | -------------------------------------- |
| `bird()`     | none                | Returns random bird images (4k).       |
| `cat()`      | none                | Provides random cat facts and images.  |
| `dog()`      | none                | Provides randomg dog facts and images. |
| `duck()`     | none                | Returns random duck images.            |
| `monkey()`   | none                | Returns random monkey images (4k).     |
| `squirrel()` | none                | Returns random squirrel images (4k).   |

### GIFs

| Functions | Required Paramters | Description                                                                                       |
| --------- | ------------------ | ------------------------------------------------------------------------------------------------- |
| `gif()`   | type               | Gives a random gif of the specified type, available types: hug, pat, blush, slap, stare, trigger. |

#### Image Manipulation:

| Functions         | Required Paramters | Description                                                                        |
| ----------------- | ------------------ | ---------------------------------------------------------------------------------- |
| `ad()`            | image              | Puts the provided image on an advertisement board.                                 |
| `alwaysHasBeen()` | text1, text2       | Puts the provided text on an always has been meme.                                 |
| `captcha()`       | text               | Puts the provided text on a reCaptcha.                                             |
| `delete()`        | image              | Deletes a given image.                                                             |
| `greyscale()`     | image              | Applies the greyscale filter on the provided image.                                |
| `slap()`          | image1, image2     | Slap someone, image1 is the person slapping, image2 is the person getting slapped. |
| `woah()`          | text               | Puts the provided text on a "woah! thats worthless" meme.                          |
| `wasted()`        | image              | Applies the GTA5 Wasted overlay on the image.                                      |

### Info:

| Functions           | Required Parameters     | Description                                                                                                                                                                      |
| ------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `calendar`          | month, year, table      | Returns the calendar of a specified month and year, an optional "table" parameter can be provided to get the calendar in Ascii format.                                           |
| `country()`         | country                 | Returns the info about a country.                                                                                                                                                |
| `countryFlag()`     | country                 | Provides the flag of the provided country.                                                                                                                                       |
| `covid19`           | country, all (optional) | Provides Covid19 stats of a country, an optional `all` param can be provided (must be true) to get global Covid19 stats.                                                         |
| `emojiInfo()`       | emoji                   | Provides info of an emoji (name or unicode can be provided)                                                                                                                      |
| `fivemplayers()`    | ip                      | Shows all the players playing on a fivem server.                                                                                                                                 |
| `fivemserverinfo()` | ip                      | Provides info of a fivem server                                                                                                                                                  |
| `ipLookup()`        | ip                      | The IP or the host name to get info about.                                                                                                                                       |
| `mcServerStats()`   | server                  | Gets info about a certain minecraft server.                                                                                                                                      |
| `mcUserStats()`     | username                | Gets info of a certain minecraft player.                                                                                                                                         |
| `time()`            | timezone                | Gets the time of a certain timezone.                                                                                                                                             |
| `timezones()`       | none                    | Provides an array of all the timezones.                                                                                                                                          |
| `weather()`         | location, degreeType    | Returns the weather of a specified location, an optinal "degreeType" parameter with the degree type of the weather can be provided, defaults to C, available degree types: C, F. |

#### Others:

| Functions         | Required Paramters                                             | Description                                                                       |
| ----------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `ascii()`         | text                                                           | Converts text to ascii.                                                           |
| `chatbot()`       | text                                                           | Something that talks to you like a human.                                         |
| `doesnotexist()`  | none                                                           | Provides images of people who dont exist.                                         |
| `emojiInfo`       | emoji                                                          | Gets info about an emoji.                                                         |
| `insult()`        | none                                                           | Provides random insult.                                                           |
| `joke()`          | none                                                           | Provides a joke.                                                                  |
| `meme()`          | none                                                           | Provides random memes.                                                            |
| `number()`        | none                                                           | Generates random numbers.                                                         |
| `password()`      | length                                                         | Generates a random password of the provided length.                               |
| `postToWebhook()` | webhookURL, username (optional), avatarURL (optional), message | Posts a message to the provided Discord Webhook URL. Webhook URLs are not stored. |
| `quote()`         | none                                                           | Generates a random quote.                                                         |
| `translate()`     | to, text                                                       | Translates the given text to the given language, defaults to english.             |
| `word()`          | none                                                           | Generates a random word.                                                          |

#### Text Manipulation:

| Functions     | Required Paramters         | Description                                                                |
| ------------- | -------------------------- | -------------------------------------------------------------------------- |
| `base64()`    | type (encode/decode), text | Converts text to and from base64.                                          |
| `binary()`    | type (encode/decode), text | Converts text to and from binary.                                          |
| `morse()`     | type (encode/decode), text | Converts text to and from morse.                                           |
| `owofy()`     | text                       | Converts text to some kind of text some kind of people use, hello -> hewwo |
| `reverse()`   | text                       | Reverses text.                                                             |
| `sarcastic()` | text                       | Turns text to SaRCAStIC text.                                              |
| `shuffle()`   | text                       | Shuffles the given text.                                                   |
| `zalgo()`     | type (encode/decode), text | Converts text to some weird and glitchy text.                              |

#### All the functions return a promise, resolve the promise by either awaiting it or using .then(). All the Image Manipulation endpoints (except woah and alwaysHasBeen) require an image thats either a png, jpg or a gif. A webp doesn't work. The endpoints return a buffer.

#### Made by FC#5104 on Discord. [Click Here](https://discord.gg/yuKfuCg7Zx) to join the Support Server of the API. [Click Here](https://docs.fc5570.ml) for the documentation of the API. Any suggestions are welcome.

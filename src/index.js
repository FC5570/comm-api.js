const fetch = require("node-fetch");
const baseURL = "https://api.fc5570.ml";

module.exports = {
  /**
   * main request function
   * @param endpoint: the endpoint to make a request to.
   * @param params: the parameters of the endpoint
   * @private
   */

  async request(endpoint, params) {
    const data = await fetch(`${baseURL}/${endpoint}?${params}`);
    if (data.status !== 200) {
      const error = await data.json();
      throw new Error(
        `An error occured with the ${endpoint} endpoint: ${error.message} (${error.code})`
      );
    }
    return data;
  },

  /**
   * Animal Endpoints
   */

  /**
   * bird endpoint
   */
  async bird() {
    const data = await this.request("bird");
    const json = await data.json();
    return json;
  },

  /**
   * cat endpoint
   */
  async cat() {
    const data = await this.request("cat");
    const json = await data.json();
    return json;
  },

  /**
   * dog endpoint
   */
  async dog() {
    const data = await this.request("dog");
    const json = await data.json();
    return json;
  },

  /**
   * duck endpoint
   */
  async duck() {
    const data = await this.request("duck");
    const json = await data.json();
    return json;
  },

  /**
   * monkey endpoint
   */
  async monkey() {
    const data = await this.request("monkey");
    const json = await data.json();
    return json;
  },

  /**
   * squirrel endpoint
   */
  async squirrel() {
    const data = await this.request("squirrel");
    const json = await data.json();
    return json;
  },

  /**
   * GIF Endpoints
   */

  /**
   * gif endpoint
   * @param type: The type of the gif
   */
  async gif(type) {
    const data = await this.request("gif", `type=${type}`);
    const json = await data.json();
    return json;
  },

  /**
   * Image Manipulation Endpoints
   */

  /**
   * ad endpoint
   * @param image: The image to put on the advertisement
   */
  async ad(image) {
    const data = await this.request("ad", `image=${image}`);
    return data.buffer();
  },

  /**
   * alwaysHasBeen endpoint
   * @param text1: Text to put over the astronaut pointing towards the Earth.
   * @param text2: Text to put over the astronaut pointing a gun towards the first one.
   */
  async alwaysHasbeen(text1, text2) {
    const data = await this.request(
      "alwaysHasBeen",
      `text1=${text1}&text2=${text2}`
    );
    return data.buffer();
  },

  /**
   * captcha endpoint
   * @param text: The text to put on the captcha
   */
  async captcha(text) {
    const data = await this.request("captcha", `text=${text}`);
    return data.buffer();
  },

  /**
   * delete endoiint
   * @param image: The image to delete
   */
  async delete(image) {
    const data = await this.request("delete", `image=${image}`);
    return data.buffer();
  },

  /**
   * greyscale endpoint
   * @param image: The image to apply the greyscale filter on.
   */
  async greyscale(image) {
    const data = await this.request("greyscale", `image=${image}`);
    return data.buffer();
  },

  /**
   * pepeSign endpoint
   * @param text: The text to draw over the sign
   */
  async pepeSign(text) {
    return await (await this.request("pepeSign", `text=${text}`)).buffer();
  },

  /**
   * shit endpoint
   * @param image: The image to draw over the meme.
   */
  async shit(image) {
    return await (await this.request("shit", `image=${image}`)).buffer();
  },

  /**
   * slap endpoint
   * @param image1: The image of the person slapping the other.
   * @param image2: The image of the person to slap.
   */
  async slap(image1, image2) {
    const data = await this.request(
      "slap",
      `image1=${image1}&image2=${image2}`
    );
    return data.buffer();
  },

  /**
   * snipe endpoint
   * @param image: The image to snipe
   */
  async snipe(image) {
    return await (await this.request("snipe", `image=${image}`)).buffer();
  },

  /**
   * surprised endpoint
   * @param text: The text to draw over the meme
   */
  async surprised(text) {
    return await (await this.request("surprised", `text=${text}`)).buffer();
  },

  /**
   * wasted endpoint
   * @param image: The image to apply the wasted overlay on.
   */
  async wasted(image) {
    const data = await this.request("wasted", `image=${image}`);
    return data.buffer();
  },

  /**
   * woah endpoint
   * @param text: The text to put on the paper.
   */
  async woah(text) {
    const data = await this.request("woah", `text=${text}`);
    return data.buffer();
  },

  /**
   * Info Endpoints
   */

  /**
   * calendar endpoint
   * @param month: The month to generate a calendar of
   * @param year: The year to generate a calendar of
   * @param table: Whether to return a calendar in ascii or not.
   */
  async calendar(month, year, table) {
    if (table) {
      const data = await this.request(
        "calendar",
        `year=${parseInt(year)}&month=${parseInt(month)}&table=true`
      );
      const json = await data.json();
      return json;
    } else {
      const data = await this.request(
        "calendar",
        `month=${parseInt(month)}&year=${parseInt(year)}`
      );
      const json = await data.json();
      return json;
    }
  },

  /**
   * country endpoint
   * @param country: The country to get the info about.
   */
  async country(country) {
    const data = await this.request("country", `country=${country}`);
    const json = await data.json();
    return json;
  },
  /**
   * countryFlag endpoint
   * @param country: The country to get the flag of
   */
  async countryFlag(country) {
    const data = await this.request("countryFlag", `country=${country}`);
    return data.buffer();
  },

  /**
   * covid19 endpoint
   * @param country: The country to get the stats of
   * @param all: Whether to get global covid19 stats (must be true if yes)
   */
  async covid19(country, all) {
    const data = await this.request(
      "covid19",
      `${all ? `all=true` : `country=${encodeURIComponent(country)}`}`
    );
    const json = await data.json();
    return json;
  },

  /**
   * emojiInfo endpoint
   * @param emoji: The emoji to get info of
   */
  async emojiInfo(emoji) {
    return await (await this.request("emojiInfo", `emoji=${emoji}`)).json();
  },

  /**
   * fivemplayers endpoint
   * @param ip: The IP:Port to get the players of
   */
  async fivemplayers(ip) {
    return await (await this.request("fivemplayers", `ip=${ip}`)).json();
  },

  /**
   * fivemserverinfo endpoint
   * @param ip: The IP:Port to get the info of
   */
  async fivemserverinfo(ip) {
    return await (await this.request("fivemserverinfo", `ip=${ip}`)).json();
  },

  /**
   * ipLookup endpoint
   * @param ip: The ip to get info about
   */
  async ipLookup(ip) {
    const data = await this.request("ipLookup", `ip=${ip}`);
    const json = await data.json();
    return json;
  },

  /**
   * mcServerStats endpoint
   * @param server: The server to get info about
   */
  async mcServerStats(server) {
    const data = await this.request("mcServerStats", `server=${server}`);
    const json = await data.json();
    return json;
  },

  /**
   * mcUserStats endpoint
   * @param username: The username of the player to get stats of
   */
  async mcUserStats(username) {
    const data = await this.request("mcUserStats", `username=${username}`);
    const json = await data.json();
    return json;
  },

  /**
   * time endpoint
   * @param timezone: The timezone to get the time of.
   */
  async time(timezone) {
    const data = await this.request("time", `timezone=${timezone}`);
    const json = await data.json();
    return json;
  },

  /**
   * timezones endpoint
   */
  async timezones() {
    const data = await this.request("timezones");
    const json = await data.json();
    return json;
  },

  /**
   * weather endpoint
   * @param location: The location to get the weather of
   * @param degreeType: The degree type of the weather, can be either C (Celsius) or F (Fahrenheit), defaults to C
   */
  async weather(location, degreeType) {
    const data = await this.request(
      "weather",
      `location=${location}&degreeType=${degreeType}`
    );
    const json = await data.json();
    return json;
  },

  /**
   * Other Endpoints
   */

  /**
   * ascii endpoint
   * @param text: The text to convert to ascii
   */
  async ascii(text) {
    const data = await this.request("ascii", `text=${text}`);
    const json = await data.json();
    return json;
  },

  /**
   * chatbot endpoint
   * @param text: The text to send to the chatbot
   */
  async chatbot(text) {
    const data = await this.request("chatbot", `text=${text}`);
    const json = await data.json();
    return json;
  },

  /**
   * doesNotExist endpoint
   */
  async doesNotExist() {
    const data = await this.request("doesnotexist");
    return data.buffer();
  },

  /**
   * insult endpoint
   */
  async insult() {
    const data = await this.request("insult");
    const json = await data.json;
    return json;
  },

  /**
   * joke endpoint
   */
  async joke() {
    const data = await this.request("joke");
    const json = await data.json();
    return json;
  },

  /**
   * meme endpoint
   */
  async meme() {
    const data = await this.request("meme");
    const json = await data.json();
    return json;
  },

  /**
   *
   */
  async number() {
    const data = await this.request("number");
    const json = await data.json();
    return json;
  },

  /**
   * password endpoint
   * @param length: The length of the password
   */
  async password(length) {
    const data = await this.request("password", `length=${length}`);
    const json = await data.json();
    return json;
  },

  /**
   * postToWebhook endpoint
   * @param webhookURL: The webhookURL to post a message to
   * @param username: The username of the webhook (optional)
   * @param avatarURL: The avatarURL of the webhook (optional)
   * @param message: The message to send to the webhook
   */
  async postToWebhook(webhookURL, username, avatarURL, message) {
    const data = await this.request(
      "postToWebhook",
      `webhookURL=${webhookURL}&username=${username}&avatarURL=${avatarURL}&message=${message}`
    );
    const json = await data.json();
    return json;
  },

  /**
   * quote endpoint
   */
  async quote() {
    const data = await this.request("quote");
    const json = await data.json();
    return json;
  },

  /**
   * translate endpoint
   * @param text: The text to translate
   * @param to: The text to translate to (optional, defaults to english)
   */
  async translate(text, to) {
    const data = await this.request("translate", `text=${text}&to=${to}`);
    const json = await data.json();
    return json;
  },

  /**
   * word endpoint
   */
  async word() {
    const data = await this.request("word");
    const json = await data.json();
    return json;
  },

  /**
   * Text Manipulation Endpoints
   */

  /**
   * base64 endpoint
   * @param type: Whether to encode or decode text to and from base64
   * @param text: The text to encode or decode
   */
  async base64(type, text) {
    const data = await this.request(`base64`, `type=${type}&text=${text}`);
    const json = await data.json();
    return json;
  },

  /**
   * binary endpoint
   * @param type: Whether to encode or decode text to and from binary
   * @param text: The text to encode or decode
   */
  async binary(type, text) {
    const data = await this.request(`binary`, `type=${type}&text=${text}`);
    const json = await data.json();
    return json;
  },

  /**
   * morse endpoint
   * @param type: Whether to encode or decode text to and from morse
   * @param text: The text to encode or decode
   */
  async morse(type, text) {
    const data = await this.request(`morse`, `type=${type}&text=${text}`);
    const json = await data.json();
    return json;
  },

  /**
   * owofy endpoint
   * @param text: the text to convert to owofied text
   */
  async owofy(text) {
    const data = await this.request(`owofy`, `text=${text}`);
    const json = await data.json();
    return json;
  },

  /**
   * reverse endpoint
   * @param text: The text to reverse
   */
  async reverse(text) {
    const data = await this.request(`reverse`, `text=${text}`);
    const json = await data.json();
    return json;
  },

  /**
   * sarcastic endpoint
   * @param text: the text to convert to sarcastic text
   */
  async sarcastic(text) {
    const data = await this.request(`sarcastic`, `text=${text}`);
    const json = await data.json();
    return json;
  },

  /**
   * shuffle endpoint
   * @param text: the text to shuffle
   */
  async shuffle(text) {
    const data = await this.request("shuffle", `text=${text}`);
    const json = await data.json();
    return json;
  },

  /**
   * zalgo endpoint
   * @param type: Whether to encode or decode text to anf from zalgo.
   * @param text: The text to encode or decode
   */
  async zalgo(type, text) {
    const data = await this.request(`zalgo`, `type=${type}&text=${text}`);
    const json = await data.json();
    return json;
  },
};

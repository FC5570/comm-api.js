const fetch = require("node-fetch");
const baseURL = "https://api.fc5570.ml";
const types = ["encode", "decode"];

class APIWrapperClient {
  constructor() {}

  /**
   * The function to make requests to the api
   * @param endpoint: the endpoint
   * @param parameters: the parameters the endpoint needs
   */
  async request(endpoint, parameters) {
    const data = await fetch(`${baseURL}/${endpoint}?${parameters}`);
    if (data.status !== 200) {
      const msg = await data.json();
      throw new Error(
        `An error occured with the ${endpoint} endpoint: ${msg.message} (code: ${msg.code})`
      );
    }
    return data;
  }

  /**
   * Text Manipulation Endpoints -
   */

  /**
   * sarcastic endpoint
   * @param text: the text to convert to sarcastic text
   */
  async sarcastic(text) {
    const req = await this.request("sarcastic", `text=${text}`);
    return req.json();
  }

  /**
   * owofy endpoint
   * @param text: the text to owofy
   */
  async owofy(text) {
    const req = await this.request("owofy", `text=${text}`);
    return req.json();
  }

  /**
   * reverse endpoint
   * @param text: the text to reverse
   */
  async reverse(text) {
    const req = await this.request("reverse", `text=${text}`);
    return req.json();
  }

  /**
   * zalgo endpoint
   * @param type: whether to encode or decode text to or from zalgo
   * @param text: the text to encode or decode
   */
  async zalgo(type, text) {
    if (!types.join("").toLowerCase().includes(type.toLowerCase()))
      throw new Error(
        "An error occured with the zalgo endpoint: type can only be encode or decode."
      );
    const req = await this.request("zalgo", `type=${type}&text=${text}`);
    return req.json();
  }

  /**
   * binary endpoint
   * @param type: whether to encode or decode text to or from binary
   * @param text: the text to encode or decode
   */
  async binary(type, text) {
    if (!types.join("").toLowerCase().includes(type.toLowerCase()))
      throw new Error(
        "An error occured with the binary endpoint: type can only be encode or decode."
      );
    const req = await this.request("binary", `type=${type}&text=${text}`);
    return req.json();
  }

  /**
   * base64 endpoint
   * @param type: whether to encode or decode text to or from binary
   * @param text: the text to encode or decode
   */
  async base64(type, text) {
    if (!types.join("").toLowerCase().includes(type.toLowerCase()))
      throw new Error(
        "An error occured with the base64 endpoint: type can only be encode or decode."
      );
    const req = await this.request("base64", `type=${type}&text=${text}`);
    return req.json();
  }

  /**
   * morse endpoint
   * @param type: whether to encode or decode text to or from morse
   * @param text: the text to encode or decode
   */
  async morse(type, text) {
    if (!types.join("").toLowerCase().includes(type.toLowerCase()))
      throw new Error(
        "An error occured with the base64 endpoint: type can only be encode or decode."
      );
    const req = await this.request("type", `type=${type}&text=${text}`);
    return req.json();
  }

  /**
   * Image Manipulation endpoints -
   */

  /**
   * ad endpoint
   * @param image: the image to put on the advertisement
   */
  async ad(image) {
    const req = await this.request("ad", `image=${image}`);
    return req.buffer();
  }

  /**
   * alwaysHasBeen endpoint
   * @param text1: Text to put over the astronaut pointing towards the Earth.
   * @param text2: Text to put over the astronaut pointing a gun towards the first one.
   */
  async alwaysHasBeen(text1, text2) {
    const req = await this.request(
      `/alwaysHasBeen`,
      `text1=${text1}&text2=${text2}`
    );
    return req.buffer();
  }

  /**
   *
   */
  async captcha(text) {
    const req = await this.request(`/captcha`, `text=${text}`);
    return req.buffer();
  }
  /**
   * greyscale endpoint
   * @param image: the image to apply the grey filter on
   */
  async greyscale(image) {
    const req = await this.request(`/greyscale`, `image=${image}`);
    return req.buffer();
  }

  /**
   * slap endpoint
   * @param image1: the first image (the person whos slapping the other)
   * @param image2: the second image (the person whos getting slapped)
   * @returns
   */
  async slap(image1, image2) {
    const req = await this.request(
      "/slap",
      `image1=${image1}&image2=${image2}`
    );
    return req.buffer();
  }

  /**
   * woah endpoint
   * @param text: the text to put on the paper
   */
  async woah(text) {
    const req = await this.request("woah", `text=${text}`);
    return req.buffer();
  }

  /**
   * wasted endpoint
   * @param image: the image to apply the wasted filter on
   */
  async wasted(image) {
    const req = await this.request("wasted", `image=${image}`);
    return req.buffer();
  }

  /**
   * Other Endpoints -
   */

  /**
   * ascii endpoint
   * @param text: the text to convert to ascii
   */
  async ascii(text) {
    const req = await this.request("ascii", `text=${text}`);
    return req.json();
  }

  /**
   * chatbot endpoint
   * @param text: the text to talk to the chatbot
   */
  async chatbot(text) {
    const req = await this.request("chatbot", `text=${text}`);
    return req.json();
  }

  /**
   * doesnotexist endpoint
   */
  async doesnotexist() {
    const req = await fetch(`${baseURL}/doesnotexist`);
    return req.buffer();
  }

  /**
   * ipLookup endpoint
   * @param ip: the ip or the host name to get info about
   */
  async ipLookup(ip) {
    const req = await this.request("ipLookup", `ip=${ip}`);
    return req.json();
  }

  /**
   * joke endpoint
   */
  async joke() {
    const req = await fetch(`${baseURL}/joke`);
    return req.json();
  }

  /**
   * mcServerStats endpoint
   * @param server: the server to get info about
   */
  async mcServerStats(server) {
    const req = await this.request("mcServerStats", `server=${server}`);
    return req.json();
  }

  /**
   * msUserStats endpoint
   * @param username: the username of the player to get info about
   */
  async mcUserStats(username) {
    const req = await this.request("mcUserStats", `username=${username}`);
    return req.json();
  }

  /**
   * password endpoint
   * @param length: the length of the password
   */
  async password(length) {
    const req = await this.request("password", `length=${length}`);
    return req.json();
  }

  /**
   * postToWebhook endpoint, sends a message to a discord webhook
   * @param webhookURL: the url of the webhook
   * @param username: the username of the webhook (optional)
   * @param avatarURL: the avatarURL of the webhook (optional)
   * @param message: the message to post to the webhook.
   */
  async postToWebhook(webhookURL, username, avatarURL, message) {
    const req = this.request(
      "postToWebhook",
      `webhookURL=${webhookURL}&${username ? username : null}&${
        avatarURL ? avatarURL : null
      }&${message}`
    );
    return req.json();
  }

  /**
   * quote endpoint
   */
  async quote() {
    const req = await fetch(`${baseURL}/quote`);
    return req.json();
  }

  /**
   * time endpoint
   * @param timezone: the timezone to get info about
   */
  async time(timezone) {
    const req = await this.request("time", `timezone=${timezone}`);
    return req.json();
  }

  /**
   * timezones endpoint
   */
  async timezones() {
    const req = await fetch(`${baseURL}/timezones`);
    return req.json();
  }

  /**
   * word endpoint
   */
  async word() {
    const req = await fetch(`${baseURL}/word`);
    return req.json();
  }

  /**
   * GIF Endpoints -
   */

  /**
   * gif endpoint
   * @param type: The type of the gif to provide, available types: hug, pat, blush, slap, stare, trigger.
   */
  async gif(type) {
    if (!type)
      throw new Error(
        "An error occured with the gif endpoint - A type must be specified"
      );
    const gifTypes = ["hug", "pat", "blush", "slap", "stare", "trigger"];
    if (!gifTypes.join("").toLowerCase().includes(type.toLowerCase()))
      throw new Error(
        "An error occured with the gif endpoint: unknown gif type, availabe types: hug, pat, blush, slap, stare, trigger."
      );
    const req = await this.request("gif", `type=${type}`);
    return req.json();
  }
}

module.exports = APIWrapperClient;

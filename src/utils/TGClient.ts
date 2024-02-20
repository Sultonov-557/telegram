import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
import { env } from "./config";

class TGClient {
  private client: TelegramClient;
  constructor() {
    this.client = new TelegramClient(new StringSession(env.SESSION), env.API_ID, env.API_HASH, {});
    this.client.connect();
  }

  async getMe() {
    return await this.client.getMe();
  }

  async getChats() {
    return await this.client.getDialogs({});
  }

  async getMessages(chatID: number, page: number = 1) {
    let limit = 50;
    return await this.client.getMessages(chatID, { limit, addOffset: limit * (page - 1) });
  }
}

export default new TGClient();

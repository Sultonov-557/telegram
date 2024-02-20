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
}

export default new TGClient();

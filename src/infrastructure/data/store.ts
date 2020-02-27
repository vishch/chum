import { OdmMongoose } from './odm-mongoose';

export class Store {
  readonly #odm: OdmMongoose;

  constructor() {
    this.#odm = new OdmMongoose();
  }

  public async init() {
    await this.#odm.init();
  }
}

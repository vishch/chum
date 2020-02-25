import { OdmMongoose } from './odm-mongoose';

export class Store {
  private readonly odm: OdmMongoose;

  constructor() {
    this.odm = new OdmMongoose();
  }

  public async init() {
    await this.odm.init();
  }
}

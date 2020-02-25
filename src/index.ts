import Startup from './startup';

class App {
  private startup: Startup;

  constructor() {
    this.startup = new Startup();
  }

  public async init(): Promise<void> {
    await this.startup.init();
  }
}

new App().init();

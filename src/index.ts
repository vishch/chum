import App from './app';

class Startup {
  #app: App;

  constructor() {
    this.#app = new App();
  }

  public async init(): Promise<void> {
    await this.#app.init();
  }
}

new Startup().init();

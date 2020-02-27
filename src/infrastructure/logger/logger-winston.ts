import winston from 'winston';

export class LoggerWinston {
  private static logger: winston.Logger;

  constructor(
    private readonly _callerName: string,
  ) {

  }

  private get callerName() {
    return this._callerName || 'LoggerWinston';
  }

  public init(): void {
    const options = this.getOptions();

    LoggerWinston.logger = winston.createLogger(options);

    if (process.env.NODE_ENV !== 'production') {
      LoggerWinston.logger.info('Logging initialized at debug level');
    }
  }

  public debug(message: string): void {
    const formattedMessage = this.getMessage(message);
    LoggerWinston.logger.debug(formattedMessage);
  }

  public error(message: string): void {
    const formattedMessage = this.getMessage(message);
    LoggerWinston.logger.error(formattedMessage);
  }

  public info(message: string): void {
    const formattedMessage = this.getMessage(message);
    LoggerWinston.logger.info(formattedMessage);
  }

  private getMessage(message: string) {
    return `${this.callerName}: ${message}`;
  }

  private getOptions(): winston.LoggerOptions {
    return {
      transports: [
        new winston.transports.Console({
          level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
        }),
        new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
      ],
    };
  }
}

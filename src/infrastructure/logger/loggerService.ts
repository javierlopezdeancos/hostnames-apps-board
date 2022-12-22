import { LoggerInterface } from "../../domain/logger";

const loggerService: LoggerInterface = {
  debug: (message: string): void => console.debug(message),
  error: (message: string): void => console.error(message),
  info: (message: string): void => console.info(message),
};

export default loggerService;

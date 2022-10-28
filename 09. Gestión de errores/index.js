const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

function mensaje(){
    throw new Error("Soy un mensaje de error")
}

try {
    mensaje()
} catch (e) {
    logger.error(e.toString())
}
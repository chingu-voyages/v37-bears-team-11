const winston = require('winston')

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}

const level = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
    http: 'magenta',
    debug: 'white',
}

winston.addColors(colors)

const format = winston.format.combine(
    winston.format.splat(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] })
)

const transports = [
    new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
        ),
    }),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error',
        format: winston.format.json(),
    }),
    // new winston.transports.File({ filename: 'logs/all.log' }),
]

const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
    exitOnError: false,
})

module.exports = function (filename) {
    if (!filename) return Logger

    return {
        error: (message, ...args) => {
            Logger.error(`[${filename}] ${message}`, ...args)
        },
        warn: (message, ...args) => {
            Logger.warn(`[${filename}] ${message}`, ...args)
        },
        info: (message, ...args) => {
            Logger.info(`[${filename}] ${message}`, ...args)
        },
        http: (message, ...args) => {
            Logger.http(`[${filename}] ${message}`, ...args)
        },
        debug: (message, ...args) => {
            Logger.debug(`[${filename}] ${message}`, ...args)
        },
    }
}

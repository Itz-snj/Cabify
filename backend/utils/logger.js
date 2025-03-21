const logger = {
    log: (...messages) => console.log("\x1b[32m[LOG]\x1b[0m", ...messages),
    error: (...messages) => console.error("\x1b[31m[ERROR]\x1b[0m", ...messages),
    warn: (...messages) => console.warn("\x1b[33m[WARN]\x1b[0m", ...messages),
    info: (...messages) => console.info("\x1b[34m[INFO]\x1b[0m", ...messages)
};

export default logger;
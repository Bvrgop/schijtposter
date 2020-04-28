
const loglevel = process.env.LOGLEVEL || "trace";

module.exports = {
    logger: require("../../node_modules/tracer").console({
        level: loglevel,
    }),

    login: {
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
    }
};
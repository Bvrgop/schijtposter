const config = require("./src/config/config");
const logger = config.logger;
const twitter = require("twitter");

let client = new twitter(config.login);

let post = {
    status: "Bruh",
    // media_ids: ""
}

// function runPost() {
//     setInterval(post, 1000 * 10);
// };

postToTwitter(post);

function postToTwitter(update) {
    client.post("statuses/update", update, function (error, result) {
        if (error) {
            logger.debug(error);
        } else if (result) {
            logger.info(result);
        };
    });
};






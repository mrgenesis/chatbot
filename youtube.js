const YouTube = require('youtube-node');
const config = require('./config.json').youtube;

const youttube = new YouTube();

youttube.setKey(config.key);
function searchVideos (message, queryText) {
    return new Promise(function (resolve, reject) {
        youttube.search(`Vídeos sobre nodejs ${queryText}`, 3, function (err, result) {
            if (!err) {
               const videoIds = result.items.map(item => item.id.videoId).filter(item => item);
               const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`);
               resolve(`${message} ${youtubeLinks.join(', ')}`);
            } else {
                console.log(reject('Deu erro'));
            }
        });
    });

}

module.exports.searchVideos = searchVideos;

import Parser from 'rss-parser';
const parser = new Parser();
const url = 'https://anchor.fm/s/97810f0/podcast/rss';

export default () => {
    return new Promise (async (resolve) => {
        const feed = await parser.parseURL(url);
        console.log(feed.title);
        return resolve(feed);
    });
};
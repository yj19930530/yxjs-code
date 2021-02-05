let http = '';
const env = process.env.NODE_ENV;
switch (env) {
    case 'test': {
        http = 'http://47.114.135.205:9998';
        break;
    }
    default: {
        http = 'https://www.ja-zc.com/tycar';
        break;
    }
}
module.exports = {
    http,
}
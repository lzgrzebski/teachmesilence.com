const fs = require('fs');

const path = './src/services/config.json';

const settings = JSON.parse(fs.readFileSync(path, 'utf8'));
settings.SPACE_ID = process.env.SPACE_ID;
settings.ACCESS_TOKEN = process.env.ACCESS_TOKEN;
fs.writeFileSync(path, JSON.stringify(settings), 'utf8');

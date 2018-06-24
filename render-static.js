import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';
import * as fs from 'fs';
const bulmaCss = fs.readFileSync('./node_modules/bulma/css/bulma.min.css');
const indexCss = fs.readFileSync('./src/index.css');
const appCss = fs.readFileSync('./src/App.css');

const rendered = ReactDOMServer.renderToStaticMarkup(<App />);
const html = `<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <style>
            ${bulmaCss}
            ${indexCss}
            ${appCss}
        </style>
    </head>
    <body>${rendered}</body>
</html>`;

fs.writeFileSync('index.html', html);

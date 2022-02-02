const path = require('path');
const Chulbul = require('../../Chulbul/src');

const scripts = [path.resolve(__dirname, './static/power.js')]
const styles = [path.resolve(__dirname, './static/main.css')]

config = {
    name: "Swarup",
    description: "The Static Docs of Swarup.",
    title: "Swarup | The UI Library",
    env: 'development',
    minify: true,
    verbose: true,
    bundleUp: true,
    versoning: true,
    tempDir: path.resolve(__dirname, './templates'),
    docsDir: path.resolve(__dirname, './templates/docs'),
    staticDir: path.resolve(__dirname, './templates/static'),
    buildDir: path.resolve(__dirname, './build'),
    baseTemplate: {
        scripts: scripts,
        styles: styles
    },
    versions: {
        'v0.0.1': path.resolve(__dirname, './templates/docs/v0.0.1')
    },
    errors: {
        on402: path.resolve(__dirname, './templates/docs/402.html'),
        on403: path.resolve(__dirname, './templates/docs/403.html'),
        on404: path.resolve(__dirname, './templates/docs/404.html'),
        on500: path.resolve(__dirname, './templates/docs/500.html')
    }
}

const chulbul = new Chulbul(config)
chulbul.addPlugin(chulbul.DocsPlugin)
chulbul.listen(5000)
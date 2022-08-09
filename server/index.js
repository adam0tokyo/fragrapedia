const PORT = process.env.PORT || 8000;
const { setupServer } = require('./server');
const app = setupServer();

(async () => {
    try {
        app.listen(PORT, () => {
            console.log(`server is listening @ ${PORT}`);
        });
    } catch (err) {
        console.error(`App failed to start ${err}`);
        process.exit(-1);
    }
})();

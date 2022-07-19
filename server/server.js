const express = require("express");
// const db = require('../db/knex');
const fragranceController = require("../server/fragrances/fragranceController");

const setupServer = () => {
    const app = express();
    app.use(express.json());
    app.use("/api/fragrances", fragranceController);

    app.get('/test', (req,res) => {
        res.send("'ello sekai");
    });

    // app.get('/api/items', async (req,res) => {
    //     try {
    //         const items = await db('items')
    //             .select("*")
    //             .timeout(1500);
    //         res.send(items).status(200);
    //     } catch(err) {
    //         res.send(err).status(404);
    //     }
    // });


    return app;
};

module.exports = { setupServer };
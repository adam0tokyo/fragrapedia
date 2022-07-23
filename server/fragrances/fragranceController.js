const express = require('express');
const router = express.Router();
// const db = require('../../db/knex');
const Fragrances = require("./fragranceModel");

// parse int on id?


router.get('/', async (req,res) => {
    try {
        const fragrances = await Fragrances.findAll();
        res.send(fragrances).status(200);
    } catch(err) {
        res.send(err).status(404);
    }
});

router.get('/:listName', async (req,res) => {
    const { listName } = req.params;
    try {
        const fragrance = await Fragrances.findOne(listName);
        res.send(fragrance).status(200);
    } catch (err) {
        res.send(err).status(404);
    }
});

router.post('/', async (req,res) => {
    try {
        await Fragrances.create(req.body);
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

router.patch('/:listName', async (req,res) => {
    //shallow merge
    //knex transaction ?
    const { listName } = req.params;
    const edits = req.body;
    try {
        await Fragrances.update(listName, edits);
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

router.delete('/:listName', async (req,res) => {
    const { listName } = req.params;
    try {
        await Fragrances.delete(listName);
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

module.exports = router;


// router.get('/', async (req,res) => {
//     try {
//         const items = await db('items')
//             .select("*")
//             .timeout(1500);
//         res.send(items).status(200);
//     } catch(err) {
//         res.send(err).status(404);
//     }
// });

// router.get('/:name', async (req,res) => {
//     const { name } = req.params;
//     try {
//         const item = await db('items')
//             .select("*")
//             .where("name", name)
//             .timeout(1500);
//             res.send(item).status(200);
//     } catch (err) {
//         res.send(err).status(404);
//     }
// });

// router.post('/', async (req,res) => {
//     console.log(req.body);
//     const { name } = req.body;
//     try {
//         await db('items')
//             .insert({
//                 name: name
//             });
//             res.status(204).end();
//     } catch (err) {
//         res.send(err).status(404);
//     }
// });

// router.patch('/:name', async (req,res) => {
//     const { name } = req.params;
//     const edits = req.body;
//     try {
//         await db('items')
//             .where("name", name)
//             .update(edits);
//             res.status(204).end();
//     } catch (err) {
//         res.send(err).status(404);
//     }
// });

// router.delete('/:name', async (req,res) => {
//     const { name } = req.params;
//     try {
//         await db('items')
//             .where("name", name)
//             .del()
//             .timeout(1500);
//             res.status(204).end();
//     } catch (err) {
//         res.send(err).status(404);
//     }
// });
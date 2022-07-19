const express = require('express');
const router = express.Router();
const db = require('../../db/knex');
const Fragrances = require("./fragranceModel");



router.get('/', async (req,res) => {
    try {
        const fragrances = await Fragrances.findMany();
        res.send(fragrances).status(200);
    } catch(err) {
        res.send(err).status(404);
    }
});

// QUESTION: if the Model level try/catch thows an error when 
// saving the variable to "name", does it feed into the Controllwer level try/catch
router.get('/:name', async (req,res) => {
    const { name } = req.params;
    try {
        const fragrance = await Fragrances.findOne(name);
        res.send(fragrance).status(200);
    } catch (err) {
        res.send(err).status(404);
    }
});

router.post('/', async (req,res) => {
    const { name } = req.body;
    try {
        await Fragrances.create(name);
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

router.patch('/:name', async (req,res) => {
    const { name } = req.params;
    const edits = req.body;
    try {
        await Fragrances.update(name, edits);
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

router.delete('/:name', async (req,res) => {
    const { name } = req.params;
    try {
        await Fragrances.delete(name);
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
const express = require('express');
const router = express.Router();
const Users = require("./userModel");

// parse int on id?

router.get('/', async (req,res) => {
    try {
        const users = await Users.findAll();
        res.send(users).status(200);
    } catch(err) {
        res.send(err).status(404);
    }
});

router.get('/:username', async (req,res) => {
    const { username } = req.params;
    try {
        const user = await Users.findOne(username);
        res.send(user).status(200);
    } catch (err) {
        res.send(err).status(404);
    }
});

router.post('/', async (req,res) => {
    try {
        await Users.create(req.body);
        res.status(201).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

router.patch('/:username', async (req,res) => {
    //shallow merge
    //knex transaction ?
    const { username } = req.params;
    const edits = req.body;
    try {
        await Users.update(username, edits);
        res.status(204).end();
    } catch (err) {
        res.send(err).status(404);
    }
});

router.delete('/:username', async (req,res) => {
    const { username } = req.params;
    try {
        await Users.delete(username);
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
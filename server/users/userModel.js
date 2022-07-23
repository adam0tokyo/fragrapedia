const bcrypt = require('bcrypt');


class Users {
    constructor() {
        this.db = require("../../db/knex");
    };


    async findAll (limit = 100) {
        try {
            return await this.db('users')
                .select("*")
                .limit(limit)
                .timeout(1500);
        } catch(err) {
            console.error(err);
        }
    };

    async findOne (userName) {
        try {
            return await this.db('users')
                .select("*")
                .where("username", userName)
                // .orWhere("id", listName ) //why do they fight?
                .timeout(1500);
        } catch (err) {
            console.error(err);
        }
    };

    async create(input) {
        try {
            const hashedPW = await bcrypt.hash(input.hashed_password, 10);
            const cleanUser = { 
                username: input.username,
                user_email: input.user_email,
                hashed_password: hashedPW
            }
            await this.db("users")
            .insert(cleanUser)
            .timeout(1500);
            return "successfully created!"
        } catch (err) {
            console.error(err);
        }
    }

    async update(userName, edits) {
        try {
            // await bcrypt.compare(edits.current_password, hashed_password);
            // const hashedPW = await bcrypt.hash(edits.hashed_password, 10);
            const cleanEdits = { 
                username: edits.username,
                user_email: edits.user_email,
                //hashed_password: hashedPW
            }
            await this.db("users")
            .where("username", userName)
            .update(cleanEdits)
            .timeout(1500);
        } catch (err) {
            console.error(err);
        }
    }

    async delete(userName) {
        try {
            await this.db("users")
            .where("username", userName)
            .del()
            .timeout(1500);
            return "successfully delted!"
        } catch (err) {
            console.error(err);
        }
    }
};

module.exports = new Users();
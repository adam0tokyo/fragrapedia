class Items {
    constructor() {
        this.db = require("../../db/knex");
    };


    async findAll (limit = 100) {
        try {
            return await this.db('fragrances')
                .select("*")
                .limit(limit)
                .timeout(1500);
        } catch(err) {
            console.error(err);
        }
    };

    async findOne (listName) {
        try {
            return await this.db('fragrances')
                .select("*")
                .where("list_name" || "id", listName)
                // .orWhere("id", listName ) //why do they fight?
                .timeout(1500);
        } catch (err) {
            console.error(err);
        }
    };

    async create(input) {
        try {
            await this.db("fragrances")
            .insert(input)
            .timeout(1500);
            return "successfully created!"
        } catch (err) {
            console.error(err);
        }
    }

    async update(listName, edits) {
        try {
            await this.db("fragrances")
            .where("list_name", listName)
            .update(edits)
            .timeout(1500);
            return "successfully updated!"
        } catch (err) {
            console.error(err);
        }
    }

    async delete(listName) {
        try {
            await this.db("fragrances")
            .where("list_name", listName)
            // .orWhere("id", listName)
            .timeout(1500);
            return "successfully delted!"
        } catch (err) {
            console.error(err);
        }
    }
};

module.exports = new Items();
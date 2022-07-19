class Items {
    constructor() {
        this.db = require("../../db/knex");
    };


    async findMany () {
        try {
            return await this.db('fragrances')
                .select("*")
                .timeout(1500);
        } catch(err) {
            return err;
        }
    };

    async findOne (name) {
        try {
            return await this.db('fragrances')
                .select("*")
                .where("name", name)
                .timeout(1500);
        } catch (err) {
           return err;
        }
    };

    async create(name) {
        try {
            await this.db("fragrances")
            .insert({
                name: name
            })
            .timeout(1500);
            return "successfully created!"
        } catch (err) {
            return err;
        }
    }

    async update(name, edits) {
        try {
            await this.db("fragrances")
            .where("name", name)
            .update(edits)
            .timeout(1500);
            return "successfully updated!"
        } catch (err) {
            return err;
        }
    }

    async delete(name) {
        try {
            await this.db("fragrances")
            .where("name", name)
            .del()
            .timeout(1500);
            return "successfully delted!"
        } catch (err) {
            return err;
        }
    }
};

module.exports = new Items();
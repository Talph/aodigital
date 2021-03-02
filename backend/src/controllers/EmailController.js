const Email = require('../models/Email');

module.exports = {
    async index(req, res) {
        const emails = await Email.findAll();

        return res.json(emails);
    },

    async findById(req, res) {

        const { id } = req.param;
        const emails = await Email.findAll({
            where: {
                id: id
            }
        });

        return res.json(emails);
    },

    async store(req, res) {
        const {
            name__,
            surname__,
            email__,
            contact__message_,
            terms
        } = req.body;

        const emails = await Email.create({
            name__,
            surname__,
            email__,
            contact__message_,
            terms
        }
        );

        return res.json(emails);
    },

    async delete(req, res) {
        const { id } = req.param;
        const emails = await Email.destroy({
            where: {
                id: id
            }
        });

        return res.json("Email Successfully deleted");
    },

    async update(req, res) {
        const {
            id,
            name__,
            surname__,
            email__,
            contact__message_,
            terms
        } = req.body;
        const emails = await Email.destroy({
            name__,
            surname__,
            email__,
            contact__message_,
            terms
        }, {
            where: {
                id: id
            }
        });

        return res.json(emails);
    },
};
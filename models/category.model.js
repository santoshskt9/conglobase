var mongoose = require('mongoose');

const categoryModel = new mongoose.Schema(
    {
        name: {
            type: String,
            default: null,
        },
        description: {
            type: String,
            default: null,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('category', categoryModel);
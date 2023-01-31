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
        },
        slug: {
            type: String,
            default: null,
        },
        iconUrl: {
            type: String,
            default: null,
        },
        url: {
            type: String,
            default: null,
        },
        services: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'service'
                },
            ],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('category', categoryModel);
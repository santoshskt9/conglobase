var mongoose = require('mongoose');

const serviceModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Service name is required"],
            default: null,
        },
        slug: {
            type: String,
            required: [true, "Slug is required"],
            default: null,
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            default: null,
        },
        content: {
            type: [
                {
                    heading: {
                        type: String,
                        required: [true, "Heading is required"],
                        default: null,
                    },
                    paragraph: {
                        type: String,
                        required: [true, "Paragraph is required"],
                        default: null,
                    },
                }
            ],
            default: [],
        },
        keywords: {
            type: [],
            default: [],
        },
        imgLink: {
            type: String,
            required: [true, "Image link is required"],
            default: "https://dummyimage.com/600x600/000/fff.jpg&text=+",
        },
        schema: {
            type: {

            },
            default: {},
        }
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("service", serviceModel);
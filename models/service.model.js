var mongoose = require('mongoose');

const serviceModel = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Service Title is required"],
            default: null,
        },
        img: {
            type: String,
            required: [true, "Service Title is required"],
            default: null,
        },
        desc: {
            type: String,
            required: [true, "Description is required"],
            default: null,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        },
        about: {
            type: {
                title: {
                    type: String,
                    required: [true, "Title is required"],
                    default: null,
                },
                description: {
                    type: String,
                    required: [true, "Description is required"],
                    default: null,
                },

                strategy: {
                    type: String,
                    required: [true, "Strategy is required"],
                    default: null,
                },
                design: {
                    type: String,
                    required: [true, "Design is required"],
                    default: null,
                },
                development: {
                    type: String,
                    required: [true, "Development is required"],
                    default: null,
                },
            },
            default: {},
        },
        process: {
            type: {
                title: {
                    type: String,
                    required: [true, "Title is required"],
                    default: null
                },
                subtitle: {
                    type: String,
                    required: [true, "subtitle is required"],
                    default: null
                },
                steps: {
                    type: [
                        {
                            stepName: {
                                type: String,
                                required: [true, "Step name is required"],
                                default: null
                            },
                            heading: {
                                type: String,
                                required: [true, "Heading is required"],
                                default: null
                            },
                            desc: {
                                type: String,
                                required: [true, "Desc is required"],
                                default: null
                            },
                            imgLink: {
                                type: String,
                                required: [true, "Link is required"],
                                default: null
                            },

                        }
                    ],
                    default: []
                }
            },
            default: {}
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("service", serviceModel);
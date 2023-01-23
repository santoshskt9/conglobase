var mongoose = require('mongoose');

const aboutModel = new mongoose.Schema(
    {
        logoUrl: {
            type: String,
            required: true,
            default: "https://dummyimage.com/600x600/000/fff.jpg&text=+",
        },
        companyName: {
            type: String,
            required: [true, "Company name is reqired"],
            trim: true,
            default: null,
        },
        websiteURL: {
            type: String,
            required: [true, "Website URL is required"],
            default: "https://dummyimage.com/600x600/000/fff.jpg&text=+",
        },
        heroSection: {
            type: [
                {
                    heading: {
                        type: String,
                        required: [true, "Heading is reqired"],
                        default: null,
                    },
                    content: {
                        type: String,
                        required: [true, "Content is reqired"],
                        default: null,
                    },
                    link: {
                        type: String,
                        required: [true, "Link is reqired"],
                        default: null,
                    },

                }
            ],
            default: [],
        },
        about: {
            type: [
                {
                    heading: {
                        type: String,
                        required: [true, "Heading is reqired"],
                        default: null,
                    },
                    subHeading: {
                        type: String,
                        required: [true, "Sub Heading is reqired"],
                        default: null,
                    },
                    content: {
                        type: String,
                        required: [true, "Content is reqired"],
                        default: null,
                    },

                }
            ],
            default: [],
        },
        cta: {
            type: [
                {
                    heading: {
                        type: String,
                        required: [true, "Heading is reqired"],
                        default: null,
                    },
                    subHeading: {
                        type: String,
                        required: [true, "Sub Heading is reqired"],
                        default: null,
                    },
                    content: {
                        type: String,
                        required: [true, "Content is reqired"],
                        default: null,
                    },
                    link: {
                        type: String,
                        required: [true, "Link is reqired"],
                        default: null,
                    },
                    count: {
                        type: [
                            {
                                heading: {
                                    type: String,
                                    required: [true, "Heading is required"],
                                    default: null,
                                },
                                count: {
                                    type: Number,
                                    required: [true, "Count is required"],
                                    default: null,
                                }
                            }
                        ],
                    },
                }
            ],
            default: [],
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('about', aboutModel);
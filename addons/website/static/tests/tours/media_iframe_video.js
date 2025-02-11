<<<<<<< HEAD
/** @odoo-module */
import wTourUtils from '@website/js/tours/tour_utils';

wTourUtils.registerWebsitePreviewTour(
    "website_media_iframe_video",
    {
        test: true,
        url: "/",
        edition: true,
    }, () => [
        wTourUtils.dragNDrop({
            id: "s_text_image",
            name: "Text - Image",
        }),
        {
            content: "Select the image",
            trigger: "iframe #wrap .s_text_image img",
=======
import { insertSnippet, registerWebsitePreviewTour } from "@website/js/tours/tour_utils";

registerWebsitePreviewTour("website_media_iframe_video", {
        url: "/",
        edition: true,
    }, () => [
        ...insertSnippet({
            id: "s_text_image",
            name: "Text - Image",
            groupName: "Content",
        }),
        {
            content: "Select the image",
            trigger: ":iframe #wrap .s_text_image img",
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Open image link options",
            trigger: "[data-name='media_link_opt']",
<<<<<<< HEAD
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Enter the url",
            trigger: "input[placeholder='www.example.com']",
<<<<<<< HEAD
            run: "text odoo.com",
=======
            run: "edit odoo.com",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Click on replace media",
            trigger: "[data-replace-media='true']",
<<<<<<< HEAD
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Click on video button",
            trigger: "a:contains('Videos')",
<<<<<<< HEAD
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Enter video link",
            trigger: "#o_video_text",
<<<<<<< HEAD
            run: "text https://youtu.be/nbso3NVz3p8",
=======
            run: "edit https://youtu.be/nbso3NVz3p8",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Check video is preview",
            trigger: ".o_video_dialog_iframe",
<<<<<<< HEAD
            run: () => {}, // This is a check.
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Click on 'add' button",
            trigger: ".modal-footer button:contains('Add')",
<<<<<<< HEAD
        },
        {
            content: "Ensure that the parent of media_iframe_video is not an 'a' tag.",
            trigger: "iframe .media_iframe_video",
            run: function () {
                if (this.$anchor[0].parentElement.tagName === "A") {
=======
            run: "click",
        },
        {
            content: "Ensure that the parent of media_iframe_video is not an 'a' tag.",
            trigger: ":iframe .media_iframe_video",
            run: function () {
                if (this.anchor.parentElement.tagName === "A") {
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
                    console.error("Iframe video has link!!!");
                }
            },
        },
    ]
);

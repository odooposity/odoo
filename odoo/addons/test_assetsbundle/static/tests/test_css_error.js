/** @odoo-module **/

import { registry } from "@web/core/registry";

<<<<<<< HEAD
registry.category("web_tour.tours").add('css_error_tour', {
    test: true,
    url: '/web',
    steps: () => [
    {
        content: "Error message",
        trigger: ".o_notification.border-danger",
        run: () => {
            const title = document.body.querySelector(".o_notification .o_notification_title").innerText;
            if (!title.includes("Style error")) {
                throw new Error("should contain a Style error notification");
            }
        },
    },
]});
=======
registry.category("web_tour.tours").add("css_error_tour", {
    url: "/odoo",
    steps: () => [
        {
            content: "Error message",
            trigger: ".o_notification:has(.o_notification_bar.bg-danger)",
        },
        {
            trigger: "body",
            run: () => {
                const title = document.body.querySelector(
                    ".o_notification .o_notification_title"
                ).innerText;
                if (!title.includes("Style error")) {
                    console.error("should contain a Style error notification");
                }
            },
        },
    ],
});

registry.category("web_tour.tours").add("css_error_tour_frontend", {
    url: "/",
    steps: () => [
        {
            content: "Error message",
            trigger: ".o_notification:has(.o_notification_bar.bg-danger)",
        },
        {
            trigger: "body",
            run: () => {
                const title = document.body.querySelector(
                    ".o_notification .o_notification_title"
                ).innerText;
                if (!title.includes("Style error")) {
                    console.error("should contain a Style error notification");
                }
            },
        },
    ],
});
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

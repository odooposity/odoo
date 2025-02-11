/* @odoo-module */

import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add("website_livechat.chatbot_redirect", {
<<<<<<< HEAD
    shadow_dom: ".o-livechat-root",
    test: true,
    url: "/contactus",
    steps: () => [
        {
            trigger: ".o-livechat-LivechatButton",
        },
        {
            trigger: ".o-mail-Message:contains(Hello, were do you want to go?)",
        },
        {
            trigger: "li:contains(Go to the #chatbot-redirect anchor)",
        },
        {
            trigger: ".o-mail-Message:contains(Tadam, we are on the page you asked for!)",
=======
    url: "/contactus",
    steps: () => [
        {
            trigger: ".o-livechat-root:shadow .o-livechat-LivechatButton",
            run: "click",
        },
        {
            trigger:
                ".o-livechat-root:shadow .o-mail-Message:contains(Hello, were do you want to go?)",
            run: "click",
        },
        {
            trigger: ".o-livechat-root:shadow li:contains(Go to the #chatbot-redirect anchor)",
            run: "click",
        },
        {
            trigger:
                ".o-livechat-root:shadow .o-mail-Message:contains(Tadam, we are on the page you asked for!)",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            run() {
                const url = new URL(location.href);
                if (url.pathname !== "/contactus" || url.hash !== "#chatbot-redirect") {
                    throw new Error(
                        "Chatbot should have redirected to the #chatbot-redirect anchor."
                    );
                }
            },
        },
        {
<<<<<<< HEAD
            trigger: "button[title='Restart Conversation']",
        },
        {
            trigger: "li:contains(Go to the /chatbot-redirect page)",
        },
        {
            trigger:
                ".o-mail-Message:contains('Go to the /chatbot-redirect page') + .o-mail-Message:contains('Tadam')",
=======
            trigger: ".o-livechat-root:shadow button[title='Restart Conversation']",
            run: "click",
        },
        {
            trigger: ".o-livechat-root:shadow li:contains(Go to the /chatbot-redirect page)",
            run: "click",
        },
        {
            trigger:
                ".o-livechat-root:shadow .o-mail-Message:contains('Go to the /chatbot-redirect page')",
        },
        {
            trigger: ".o-livechat-root:shadow .o-mail-Message:last:contains('Tadam')",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            run() {
                const url = new URL(location.href);
                if (url.pathname !== "/chatbot-redirect") {
                    throw new Error(
                        "Chatbot should have redirected to the /chatbot-redirect page."
                    );
                }
            },
        },
    ],
});

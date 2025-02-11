/** @odoo-module */

import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add("chatbot_fw_operator_matching_lang", {
<<<<<<< HEAD
    test: true,
    shadow_dom: ".o-livechat-root",
    steps: () => [
        {
            trigger: `.o-mail-Message:contains("Hello! I'm a bot!")`,
        },
        {
            trigger: "li:contains(I want to speak with an operator)",
            run: "click",
        },
        {
            trigger: ".o-mail-Composer-input:enabled",
            run: () => {},
=======
    steps: () => [
        {
            trigger: ".o-livechat-root:shadow .o-mail-Message:contains('Hello! I'm a bot!')",
        },
        {
            trigger: ".o-livechat-root:shadow li:contains(I want to speak with an operator)",
            run: "click",
        },
        {
            trigger: ".o-livechat-root:shadow .o-mail-Composer-input:enabled",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
    ],
});

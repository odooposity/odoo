/** @odoo-module **/

import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add('portal_load_homepage', {
    url: '/my',
    steps: () => [
        {
            content: "Check portal is loaded",
            trigger: 'a[href*="/my/account"]:contains("Edit"):first',
            run: "click",
        },
        {
            content: "Load my account details",
            trigger: 'input[value="Joel Willis"]',
<<<<<<< HEAD
            isCheck: true,
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: 'type a different phone number',
            trigger: 'input[name="phone"]',
<<<<<<< HEAD
            run: 'text +1 555 666 7788',
=======
            run: "edit +1 555 666 7788",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Submit the form",
            trigger: 'button[type=submit]',
<<<<<<< HEAD
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Check that we are back on the portal",
            trigger: 'a[href*="/my/account"]:contains("Edit"):first',
<<<<<<< HEAD
            isCheck: true,
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        }
    ]
});

/** @odoo-module */

import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add('website_profile_description', {
<<<<<<< HEAD
    test: true,
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    url: "/profile/users",
    steps: () => [{
        content: "Click on one user profile card",
        trigger: "div[onclick]:contains(\"test_user\")",
<<<<<<< HEAD
    }, {
        content: "Edit profile",
        trigger: "a:contains('EDIT PROFILE')",
    }, {
        content: "Add some content",
        trigger: ".odoo-editor-editable p",
        run: "text content <p>code here</p>",
    }, {
        content: "Save changes",
        trigger: "button:contains('Update')",
    }, {
        content: "Check the content is saved",
        trigger:
            "span[data-oe-field='website_description']:contains('content <p>code here</p>')",
        run: () => { },
=======
        run: "click",
    }, {
        content: "Edit profile",
        trigger: "a:contains('EDIT PROFILE')",
        run: "click",
    }, {
        content: "Add some content",
        trigger: ".odoo-editor-editable p",
        run: "editor content <p>code here</p>",
    }, {
        content: "Save changes",
        trigger: "button:contains('Update')",
        run: "click",
    }, {
        content: "Check the content is saved",
        trigger: "span[data-oe-field='website_description']:contains('content <p>code here</p>')",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    }]
})

/** @odoo-module **/

import { queryAll, queryText } from "@odoo/hoot-dom";
import { rpc } from "@web/core/network/rpc";
import { registry } from "@web/core/registry";

const openUserPreferenceSecurity = () => [{
    content: 'Open user account menu',
    trigger: '.o_user_menu .dropdown-toggle',
    run: 'click',
}, {
    content: "Open preferences / profile screen",
    trigger: '[data-menu=settings]',
    run: 'click',
}, {
    content: "Switch to security tab",
    trigger: 'a[role=tab]:contains("Account Security")',
    run: 'click',
}]

registry.category("web_tour.tours").add('apikeys_tour_setup', {
<<<<<<< HEAD
    test: true,
    url: '/web?debug=1', // Needed as API key part is now only displayed in debug mode
=======
    url: '/odoo?debug=1', // Needed as API key part is now only displayed in debug mode
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    steps: () => [
    ...openUserPreferenceSecurity(), {
    content: "Open API keys wizard",
    trigger: 'button:contains("New API Key")',
    run: "click",
}, {
    content: "Check that we have to enter enhanced security mode",
    trigger: ".modal div:contains(entering your password)",
}, {
    content: "Input password",
<<<<<<< HEAD
    trigger: '[name=password] input',
    run: 'text test_user', // FIXME: better way to do this?
=======
    trigger: '.modal [name=password] input',
    run: "edit test_user",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}, {
    content: "Confirm",
    trigger: ".modal button:contains(Confirm Password)",
    run: "click",
}, {
    content: "Check that we're now on the key description dialog",
    trigger: '.modal p:contains("Enter a description of and purpose for the key.")',
}, {
    content: "Enter description",
    trigger: '.modal [name=name] input',
    run: "edit my key",
}, {
    content: "Confirm key creation",
    trigger: '.modal button:contains("Generate key")',
    run: "click",
}, {
    content: "Check that we're on the last step & grab key",
    trigger: '.modal p:contains("Here is your new API key")',
    run: async () => {
        const key = queryText("code [name=key] span");
        await rpc('/web/dataset/call_kw', {
            model: 'ir.logging', method: 'send_key',
            args: [key],
            kwargs: {},
        });
    }
<<<<<<< HEAD
},  ...openUserPreferenceSecurity(), {
=======
},
{
    trigger: "button:contains(Done)",
    run: "click",
},
...openUserPreferenceSecurity(),
{
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    content: "check that our key is present",
    trigger: '[name=api_key_ids] td:contains("my key")',
}]});

// deletes the previously created key
registry.category("web_tour.tours").add('apikeys_tour_teardown', {
<<<<<<< HEAD
    test: true,
    url: '/web?debug=1', // Needed as API key part is now only displayed in debug mode
    steps: () => [
    ...openUserPreferenceSecurity(), {
=======
    url: '/odoo?debug=1', // Needed as API key part is now only displayed in debug mode
    steps: () => [{
    content: 'Open preferences',
    trigger: '.o_user_menu .dropdown-toggle',
    run: "click",
}, {
    trigger: '[data-menu=settings]',
    run: "click",
}, {
    content: "Switch to security tab",
    trigger: 'a[role=tab]:contains("Account Security")',
    run: 'click',
}, {
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    content: "delete key",
    trigger: '[name=api_key_ids] i.fa-trash',
    run: 'click',
}, {
    content: "Input password for security mode again",
<<<<<<< HEAD
    trigger: '[name=password] input',
    run: 'text test_user', // FIXME: better way to do this?
=======
    trigger: ".modal [name=password] input",
    run: "edit test_user",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}, {
    content: "And confirm",
    trigger: ".modal button:contains(Confirm Password)",
    run: "click",
},
{
    trigger: "body:not(:has(.modal))",
},
{
    content: 'Re-open preferences again',
    trigger: '.o_user_menu .dropdown-toggle',
    run: "click",
}, {
    trigger: '[data-menu=settings]',
    run: "click",
}, {
    content: "Switch to security tab",
    trigger: 'a[role=tab]:contains("Account Security")',
    run: 'click',
}, {
    content: "Check that there's no more keys",
    trigger: '.o_notebook',
    run: function() {
        if (queryAll("[name=api_key_ids]:visible", { root: this.anchor }).length) {
            console.error("Expected API keys to be hidden (because empty), but it's not");
        };
    }
}]});

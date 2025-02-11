/** @odoo-module **/

import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add('skip_website_configurator', {
<<<<<<< HEAD
    test: true,
    url: '/web#action=website.action_website_configuration',
=======
    url: '/odoo/action-website.action_website_configuration',
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    steps: () => [
    {
        content: "create a new website",
        trigger: 'button[name="action_website_create_new"]',
<<<<<<< HEAD
=======
        run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    },
    {
        content: "insert website name",
        trigger: 'div[name="name"] input',
<<<<<<< HEAD
        run: 'text Website EN'
    },
    {
        content: "validate the website creation modal",
        trigger: 'button.btn-primary'
=======
        run: "edit Website EN",
    },
    {
        content: "validate the website creation modal",
        trigger: '.modal button.btn-primary',
        run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    },
    {
        content: "skip configurator",
        // This trigger targets the skip button, it doesn't have a more
        // explicit class or ID.
<<<<<<< HEAD
        trigger: '.o_configurator_container .container-fluid .btn.btn-link'
    },
    {
        content: "make hover button appear",
        trigger: '.o_theme_preview',
        run: () => {
            $('.o_theme_preview .o_button_area').attr('style', 'visibility: visible; opacity: 1;');
        },
    },
    {
        content: "Install a theme",
        trigger: 'button[name="button_choose_theme"]'
=======
        trigger: '.o_configurator_container .container-fluid .btn.btn-link',
        run: "click",
    },
    {
        content: "Install a theme",
        trigger: ".o_theme_preview_top",
        run: "hover && click button[name=button_choose_theme]",
    },
    {
        trigger: ".o_menu_systray .o_user_menu",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    },
    {
        content: "Check that the homepage is loaded",
        trigger: ".o_website_preview[data-view-xmlid='website.homepage']",
<<<<<<< HEAD
        extra_trigger: ".o_menu_systray .o_user_menu",
        timeout: 30000,
        isCheck: true,
    },
=======
        timeout: 30000,
    },
    {
        content: "Wait title is present before close tour",
        trigger: ":iframe h2:contains(/^welcome to your/)",
    }
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
]});

/** @odoo-module **/

import { registry } from "@web/core/registry";
import { stepUtils } from "@web_tour/tour_service/tour_utils";
<<<<<<< HEAD
import configuratorTourUtils from "@test_sale_product_configurators/js/tour_utils";

registry.category("web_tour.tours").add('event_sale_with_product_configurator_tour', {
    url: '/web',
    test: true,
    steps: () => [stepUtils.showAppsMenuItem(), {
    trigger: '.o_app[data-menu-xmlid="sale.sale_menu_root"]',
}, {
    trigger: '.o_list_button_add',
    extra_trigger: ".o_sale_order",
}, {
    trigger: '.o_required_modifier[name=partner_id] input',
    run: 'text Tajine Saucisse',
}, {
    trigger: '.ui-menu-item > a:contains("Tajine Saucisse")',
    auto: true,
}, {
    trigger: 'a:contains("Add a product")',
}, {
    trigger: 'div[name="product_template_id"] input',
    run: 'text event (',
}, {
    trigger: 'ul.ui-autocomplete a:contains("Registration Event (TEST variants)")',
}, {
    trigger: 'tr:has(div[name="o_sale_product_configurator_name"]:contains("Memorabilia")) button:has(i.fa-plus)',
}, {
    trigger: 'button:contains(Confirm)',
}, {
    trigger: '.o_input_dropdown input',
    extra_trigger: '.o_technical_modal',  // to be in the event wizard
}, {
    trigger: 'div[name="event_id"] input',
}, {
    trigger: 'ul.ui-autocomplete a:contains("TestEvent")',
    in_modal: false,
}, {
    trigger: 'div[name="event_ticket_id"] input',
    run: 'click',
}, {
    trigger: 'ul.ui-autocomplete a:contains("Kid + meal")',
    in_modal: false,
}, {
    trigger: '.o_event_sale_js_event_configurator_ok'
}, {
    trigger: 'a:contains("Add a product")',
    extra_trigger: 'td[name="price_subtotal"]:contains("16.50")',  // wait for the optional product line
}, {
    trigger: 'div[name="product_template_id"] input',
    extra_trigger: '.o_data_row:nth-child(3)',  // wait for the new row to be created
    run: 'text event (',
}, {
    trigger: 'ul.ui-autocomplete a:contains("Registration Event (TEST variants)")',
}, {
    trigger: 'tr:has(div[name="o_sale_product_configurator_name"]:contains("Registration Event (TEST variants)")) label:contains("Adult")',
}, {
    trigger: 'tr:has(div[name="o_sale_product_configurator_name"]:contains("Registration Event (TEST variants)")) .o_sale_product_configurator_qty input',
    run: 'text 5',
},
    configuratorTourUtils.assertPriceTotal("150.00"),
{
    trigger: 'button:contains(Confirm)',
}, {
    trigger: '.o_input_dropdown input',
    extra_trigger: '.o_technical_modal',
}, {
    trigger: 'div[name="event_id"] input',
}, {
    trigger: 'ul.ui-autocomplete a:contains("TestEvent")',
    in_modal: false,
}, {
    trigger: 'div[name="event_ticket_id"] input',
    run: 'click',
}, {
    trigger: 'ul.ui-autocomplete a:contains("Adult")',
    in_modal: false,
}, {
    trigger: '.o_event_sale_js_event_configurator_ok'
}, {
    trigger: 'a:contains("Add a product")',
    extra_trigger: 'td[name="price_subtotal"]:contains("150.00")',  // wait for the adult tickets line
}, {
    trigger: 'div[name="product_template_id"] input',
    extra_trigger: '.o_data_row:nth-child(4)',  // wait for the new row to be created
    run: 'text event (',
}, {
    trigger: 'ul.ui-autocomplete a:contains("Registration Event (TEST variants)")',
}, {
    trigger: 'tr:has(div[name="o_sale_product_configurator_name"]:contains("Registration Event (TEST variants)")) label:contains("VIP")',
},
    configuratorTourUtils.assertPriceTotal(60.00),
{
    trigger: 'button:contains(Confirm)',
}, {
    trigger: '.o_input_dropdown input',
    extra_trigger: '.o_technical_modal',
}, {
    trigger: 'div[name="event_id"] input',
}, {
    trigger: 'ul.ui-autocomplete a:contains("TestEvent")',
    in_modal: false,
}, {
    trigger: 'div[name="event_ticket_id"] input',
    run: 'click',
}, {
    trigger: 'ul.ui-autocomplete a:contains("VIP")',
    in_modal: false,
}, {
    trigger: '.o_event_sale_js_event_configurator_ok',
}, ...stepUtils.saveForm({ extra_trigger: '.o_field_cell.o_data_cell.o_list_number:contains("60.00")' }),
]});
=======
import configuratorTourUtils from "@sale/js/tours/product_configurator_tour_utils";
import tourUtils from "@sale/js/tours/tour_utils";

registry.category("web_tour.tours").add("event_sale_with_product_configurator_tour", {
    url: "/odoo",
    steps: () => [
        ...stepUtils.goToAppSteps("sale.sale_menu_root", "Go to the Sales App"),
        ...tourUtils.createNewSalesOrder(),
        ...tourUtils.selectCustomer("Tajine Saucisse"),
        ...tourUtils.addProduct("Registration Event (TEST variants)"),
        {
            trigger:
            'tr:has(div[name="o_sale_product_configurator_name"]:contains("Memorabilia")) button:has(i.fa-plus)',
            run: "click",
        },
        {
            trigger: ".modal button:contains(Confirm)",
            run: "click",
        },
        {
            trigger: ".modal .o_input_dropdown input",
            run: "edit Test",
        },
        {
            trigger: '.modal ul.ui-autocomplete a:contains("TestEvent")',
            run: "click",
        },
        {
            trigger: '.modal div[name="event_ticket_id"] input',
            run: "click",
        },
        {
            trigger: '.modal ul.ui-autocomplete a:contains("Kid + meal")',
            run: "click",
        },
        {
            trigger: ".modal .o_event_sale_js_event_configurator_ok",
            run: "click",
        },
        {
            content: "Wait the modal is closed",
            trigger: "body:not(:has(.modal))",
        },
        {
            trigger: 'td[name="price_subtotal"]:contains("16.50")', // wait for the optional product line
        },
        ...tourUtils.addProduct("Registration Event (TEST variants)"),
        {
            trigger:
            'tr:has(div[name="o_sale_product_configurator_name"]:contains("Registration Event (TEST variants)")) label:contains("Adult")',
            run: "click",
        },
        {
            trigger:
            'tr:has(div[name="o_sale_product_configurator_name"]:contains("Registration Event (TEST variants)")) .o_sale_product_configurator_qty input',
            run: "edit 5 && click body",
        },
        configuratorTourUtils.assertPriceTotal("150.00"),
        {
            trigger: ".modal button:contains(Confirm)",
            run: "click",
        },
        {
            trigger: ".modal .o_input_dropdown input",
            run: "edit Test",
        },
        {
            trigger: '.modal ul.ui-autocomplete a:contains("TestEvent")',
            run: "click",
        },
        {
            trigger: '.modal div[name="event_ticket_id"] input',
            run: "click",
        },
        {
            trigger: '.modal ul.ui-autocomplete a:contains("Adult")',
            run: "click",
        },
        {
            trigger: ".modal .o_event_sale_js_event_configurator_ok",
            run: "click",
        },
        {
            content: "Wait the modal is closed",
            trigger: "body:not(:has(.modal))",
        },
        {
            trigger: 'td[name="price_subtotal"]:contains("150.00")', // wait for the adult tickets line
        },
        ...tourUtils.addProduct("Registration Event (TEST variants)"),
        {
            trigger:
            'tr:has(div[name="o_sale_product_configurator_name"]:contains("Registration Event (TEST variants)")) label:contains("VIP")',
            run: "click",
        },
        configuratorTourUtils.assertPriceTotal(60.0),
        {
            trigger: ".modal button:contains(Confirm)",
            run: "click",
        },
        {
            trigger: ".modal .o_input_dropdown input",
            run: "edit Test",
        },
        {
            trigger: '.modal ul.ui-autocomplete a:contains("TestEvent")',
            run: "click",
        },
        {
            trigger: '.modal div[name="event_ticket_id"] input',
            run: "click",
        },
        {
            trigger: '.modal ul.ui-autocomplete a:contains("VIP")',
            run: "click",
        },
        {
            trigger: ".modal .o_event_sale_js_event_configurator_ok",
            run: "click",
        },
        {
            content: "Wait the modal is closed",
            trigger: "body:not(:has(.modal))",
        },
        {
            trigger: '.o_field_cell.o_data_cell.o_list_number:contains("60.00")',
        },
        ...stepUtils.saveForm(),
    ],
});
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

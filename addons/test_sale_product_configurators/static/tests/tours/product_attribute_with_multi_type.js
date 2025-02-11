/** @odoo-module **/

import { registry } from "@web/core/registry";
import { stepUtils } from "@web_tour/tour_service/tour_utils";
<<<<<<< HEAD

registry.category("web_tour.tours").add("product_attribute_multi_type", {
    url: "/web",
    test: true,
    steps: () => [stepUtils.showAppsMenuItem(),
    {
        content: "navigate to the sale app",
        trigger: '.o_app[data-menu-xmlid="sale.sale_menu_root"]',
    }, {
        content: "create a new order",
        trigger: '.o_list_button_add',
        extra_trigger: ".o_sale_order"
    }, {
        content: "search the partner",
        trigger: 'div[name="partner_id"] input',
        run: 'text Azure'
    }, {
        content: "select the partner",
        trigger: 'ul.ui-autocomplete > li > a:contains(Azure)',
    }, {
        content: "Add a product",
        trigger: "a:contains('Add a product')",
    }, {
        trigger: 'div[name="product_template_id"] input',
        run: 'text Big Burger'
    }, {
        content: "Choose item",
        trigger: '.ui-menu-item-wrapper:contains("Big Burger")',
    }, {
        content: "Select the attribute value",
        trigger: 'main.modal-body input[type="checkbox"]',
    }, {
        content: "Click on Confirm",
        trigger: 'button:contains(Confirm)',
    }, ...stepUtils.saveForm()
]});
=======
import configuratorTourUtils from "@sale/js/tours/product_configurator_tour_utils";
import tourUtils from "@sale/js/tours/tour_utils";

registry.category("web_tour.tours").add("product_attribute_multi_type", {
    url: "/odoo",
    steps: () => [
        ...stepUtils.goToAppSteps("sale.sale_menu_root", "Go to the Sales App"),
        ...tourUtils.createNewSalesOrder(),
        ...tourUtils.selectCustomer("Azure"),
        ...tourUtils.addProduct("Big Burger"),
        configuratorTourUtils.selectAttribute("Big Burger", "Toppings", "Cheese", "multi"),
        ...configuratorTourUtils.saveConfigurator(),
        ...stepUtils.saveForm(),
    ],
});
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

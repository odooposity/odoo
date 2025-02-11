/** @odoo-module **/

import { queryOne } from "@odoo/hoot-dom";
import { registry } from "@web/core/registry";
<<<<<<< HEAD
import { stepUtils, TourError } from "@web_tour/tour_service/tour_utils";
import configuratorTourUtils from "@test_sale_product_configurators/js/tour_utils";

registry.category("web_tour.tours").add('sale_product_configurator_single_custom_attribute_tour', {
    url: '/web',
    test: true,
    steps: () => [stepUtils.showAppsMenuItem(), {
    trigger: '.o_app[data-menu-xmlid="sale.sale_menu_root"]',
}, {
    trigger: '.o_list_button_add',
    extra_trigger: '.o_sale_order'
}, {
    trigger: 'a:contains("Add a product")'
}, {
    trigger: 'div[name="product_template_id"] input',
    run: 'text Custo',
}, {
    trigger: 'ul.ui-autocomplete a:contains("Customizable Desk (TEST)")',
},
    configuratorTourUtils.setCustomAttribute("Customizable Desk (TEST)", "product attribute", "great single custom value"),
{
    trigger: 'button:contains(Confirm)',
}, {
    trigger: 'td.o_data_cell:contains("single product attribute value: great single custom value")',
    extra_trigger: 'div[name="order_line"]',
    isCheck: true,
}, {
    trigger: 'div[name="product_template_id"]',
}, {
    trigger: '.fa-pencil',
}, {
    trigger: 'table.o_sale_product_configurator_table tr:has(td>div[name="o_sale_product_configurator_name"] h5:contains("Customizable Desk (TEST)")) td>div[name="ptal"]:has(div>label:contains("product attribute")) input[type="text"]',
    run: function () {
        // check custom value initialized
        if ($('table.o_sale_product_configurator_table tr:has(td>div[name="o_sale_product_configurator_name"] h5:contains("Customizable Desk (TEST)")) td>div[name="ptal"]:has(div>label:contains("product attribute")) input[type="text"]').val() !== "great single custom value") {
            throw new TourError("The value of custom product attribute should be 'great single custom value'.");
        }
    }
}, {
    trigger: 'button:contains("Cancel")',
},
    ...stepUtils.discardForm()
]});
=======
import { stepUtils } from "@web_tour/tour_service/tour_utils";
import configuratorTourUtils from "@sale/js/tours/product_configurator_tour_utils";
import tourUtils from "@sale/js/tours/tour_utils";

registry.category("web_tour.tours").add('sale_product_configurator_single_custom_attribute_tour', {
    url: '/odoo',
    steps: () => [
        ...stepUtils.goToAppSteps("sale.sale_menu_root", "Go to the Sales App"),
        ...tourUtils.createNewSalesOrder(),
        ...tourUtils.addProduct("Customizable Desk (TEST)"),
        configuratorTourUtils.setCustomAttribute("Customizable Desk (TEST)", "product attribute", "great single custom value"),
        ...configuratorTourUtils.saveConfigurator(),
        tourUtils.editLineMatching("Customizable Desk (TEST)", "single product attribute value: great single custom value"),
        tourUtils.editConfiguration(),
        {
            trigger: 'table.o_sale_product_configurator_table tr:has(td>div[name="o_sale_product_configurator_name"] *:contains("Customizable Desk (TEST)")) td>div[name="ptal"]:has(div>label:contains("product attribute")) input[type="text"]',
            run: function () {
                // check custom value initialized
                if (
                    queryOne(
                        'table.o_sale_product_configurator_table tr:has(td>div[name="o_sale_product_configurator_name"] *:contains("Customizable Desk (TEST)")) td>div[name="ptal"]:has(div>label:contains("product attribute")) input[type="text"]'
                    ).value !== "great single custom value"
                ) {
                    console.error("The value of custom product attribute should be 'great single custom value'.");
                }
            }
        },
        {
            trigger: '.modal button:contains("Cancel")',
            run: "click",
        },
        ...stepUtils.discardForm(),
    ],
});
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

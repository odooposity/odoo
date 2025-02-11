/** @odoo-module **/

import { registry } from "@web/core/registry";
import { stepUtils } from "@web_tour/tour_service/tour_utils";
<<<<<<< HEAD
import configuratorTourUtils from "@test_sale_product_configurators/js/tour_utils";

registry.category("web_tour.tours").add('sale_product_configurator_recursive_optional_products_tour', {
    url: '/web',
    test: true,
    steps: () => [stepUtils.showAppsMenuItem(), {
    trigger: '.o_app[data-menu-xmlid="sale.sale_menu_root"]',
}, {
    trigger: '.o_list_button_add',
    extra_trigger: '.o_sale_order'
}, {
    trigger: 'a:contains("Add a product")',
}, {
    trigger: 'div[name="product_template_id"] input',
    run: 'text Custo',
}, {
    trigger: 'ul.ui-autocomplete a:contains("Customizable Desk (TEST)")',
},
    configuratorTourUtils.selectAttribute("Customizable Desk", "Legs", "Aluminium"),
    configuratorTourUtils.addOptionalProduct("Conference Chair"),
    configuratorTourUtils.addOptionalProduct("Chair floor protection"),
{
    trigger: 'button:contains(Confirm)',
}, ...stepUtils.discardForm()
]});
=======
import configuratorTourUtils from "@sale/js/tours/product_configurator_tour_utils";
import tourUtils from "@sale/js/tours/tour_utils";

registry.category("web_tour.tours").add('sale_product_configurator_recursive_optional_products_tour', {
    url: '/odoo',
    steps: () => [
        ...stepUtils.goToAppSteps("sale.sale_menu_root", "Go to the Sales App"),
        ...tourUtils.createNewSalesOrder(),
        ...tourUtils.addProduct("Customizable Desk (TEST)"),
        configuratorTourUtils.selectAttribute("Customizable Desk", "Legs", "Aluminium"),
        configuratorTourUtils.addOptionalProduct("Conference Chair"),
        configuratorTourUtils.addOptionalProduct("Chair floor protection"),
        {
            trigger: ".modal button:contains(Confirm)",
            run: "click",
        },
        ...stepUtils.discardForm(),
    ],
});
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

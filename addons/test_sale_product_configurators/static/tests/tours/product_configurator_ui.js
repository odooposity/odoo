/** @odoo-module **/

import { registry } from "@web/core/registry";
import { stepUtils } from "@web_tour/tour_service/tour_utils";
<<<<<<< HEAD
import configuratorTourUtils from "@test_sale_product_configurators/js/tour_utils";
=======
import configuratorTourUtils from "@sale/js/tours/product_configurator_tour_utils";
import tourUtils from "@sale/js/tours/tour_utils";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

// Note: please keep this test without pricelist for maximum coverage.
// The pricelist is tested on the other tours.

registry.category("web_tour.tours").add('sale_product_configurator_tour', {
<<<<<<< HEAD
    url: '/web',
    test: true,
    steps: () => [stepUtils.showAppsMenuItem(), {
    trigger: '.o_app[data-menu-xmlid="sale.sale_menu_root"]',
}, {
    trigger: '.o_list_button_add',
    extra_trigger: '.o_sale_order'
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
    run: 'text Custo',
}, {
    trigger: 'ul.ui-autocomplete a:contains("Customizable Desk (TEST)")',
}, {
    trigger: '.o_sale_product_configurator_table tr:has(td>div[name="o_sale_product_configurator_name"] h5:contains("Customizable Desk")) label:contains("Steel")',
    isCheck: true,
}, {
    trigger: '.o_sale_product_configurator_table tr:has(td>div[name="o_sale_product_configurator_name"] h5:contains("Customizable Desk")) label:contains("Aluminium")',
}, {
    trigger: '.o_sale_product_configurator_table tr:has(td>div[name="o_sale_product_configurator_name"] h5:contains("Customizable Desk")) td[name="price"] h5:contains("800.40")',
    isCheck: true, // check updated price
}, {
    trigger: 'label[style="background-color:#000000"] input'
}, {
    trigger: '.btn-primary:disabled:contains("Confirm")',
    isCheck: true, // check confirm button is disabled
}, {
    trigger: 'label[style="background-color:#FFFFFF"] input'
}, {
    trigger: '.btn-primary:not(:disabled):contains("Confirm")',
    extra_trigger: '.modal-footer',
    isCheck: true, // check confirm is available
}, {
    trigger: 'span:contains("Aluminium"):eq(1)',
},
    configuratorTourUtils.addOptionalProduct("Conference Chair"),
    configuratorTourUtils.addOptionalProduct("Chair floor protection"),
{
    trigger: 'button:contains(Confirm)',
    id: 'quotation_product_selected',
},
// check that 3 products were added to the SO
{
    trigger: 'td.o_data_cell:contains("Customizable Desk (TEST) (Aluminium, White)")',
    isCheck: true,
}, {
    trigger: 'td.o_data_cell:contains("Conference Chair (TEST) (Aluminium)")',
    isCheck: true,
},
// check that additional line is kept if selected but not edited with a click followed by a check
{
    trigger: 'td.o_data_cell:contains("Chair floor protection")',
    run: 'click'
}, {
    trigger: 'div[name="tax_totals"]',
    run: 'click'
}, {
    trigger: 'td.o_data_cell:contains("Chair floor protection")',
    isCheck: true,
}, {
    trigger: 'span[name=amount_total]:contains("960.60")',
    isCheck: true,
}, ...stepUtils.saveForm(),
]});
=======
    url: '/odoo',
    steps: () => [
        ...stepUtils.goToAppSteps("sale.sale_menu_root", "Go to the Sales App"),
        ...tourUtils.createNewSalesOrder(),
        ...tourUtils.selectCustomer("Tajine Saucisse"),
        ...tourUtils.addProduct("Customizable Desk (TEST)"),
        {
            trigger: '.o_sale_product_configurator_table tr:has(td>div[name="o_sale_product_configurator_name"] span:contains("Customizable Desk")) label:contains("Steel")',
            run: "click",
        },
        {
            trigger: '.o_sale_product_configurator_table tr:has(td>div[name="o_sale_product_configurator_name"] span:contains("Customizable Desk")) label:contains("Aluminium")',
            run: "click",
        },
        {
            trigger: '.o_sale_product_configurator_table tr:has(td>div[name="o_sale_product_configurator_name"] span:contains("Customizable Desk")) td[name="price"] span:contains("800.40")',
        },
        {
            trigger: 'label[style="background-color:#000000"] input:not(:visible)',
            run: "click",
        },
        {
            trigger: '.btn-primary:disabled:contains("Confirm")',
        },
        {
            trigger: 'label[style="background-color:#FFFFFF"] input:not(:visible)',
            run: "click",
        },
        {
            trigger: ".modal-footer",
        },
        {
            trigger: '.btn-primary:not(:disabled):contains("Confirm")',
        },
        {
            trigger: '.o_sale_product_configurator_table_optional span:contains("Aluminium")',
            run: "click",
        },
        configuratorTourUtils.addOptionalProduct("Conference Chair"),
        configuratorTourUtils.addOptionalProduct("Chair floor protection"),
        ...configuratorTourUtils.saveConfigurator(),
        // check that 3 products were added to the SO
        {
            trigger: 'td.o_data_cell:contains("Customizable Desk (TEST) (Aluminium, White)")',
        },
        {
            trigger: 'td.o_data_cell:contains("Conference Chair (TEST) (Aluminium)")',
        },
        // check that additional line is kept if selected but not edited with a click followed by a check
        {
            trigger: 'td.o_data_cell:contains("Chair floor protection")',
            run: 'click',
        },
        {
            trigger: 'div[name="tax_totals"]',
            run: 'click',
        },
        {
            trigger: 'td.o_data_cell:contains("Chair floor protection")',
        },
        {
            trigger: 'span[name=amount_total]:contains("960.60")',
        },
        ...stepUtils.saveForm(),
    ],
});
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

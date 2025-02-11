/** @odoo-module **/

import { registry } from "@web/core/registry";

    registry.category("web_tour.tours").add('test_stock_route_diagram_report', {
        steps: () => [
        {
            trigger: ".o_breadcrumb",
        },
    {
        trigger: '.o_kanban_record',
        run: "click",
    },
    {
        trigger: '.nav-item > a:contains("Inventory")',
        run: "click",
    },
    {
        trigger: '.btn[id="stock.view_diagram_button"]',
        run: "click",
    },
    {
        trigger: ':iframe .o_report_stock_rule',
    },
    ],
    });

registry.category("web_tour.tours").add("test_context_from_warehouse_filter", {
<<<<<<< HEAD
    test: true,
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    steps: () => [
        // Add "foo" to the warehouse context key
        {
            trigger: ".o_searchview_input",
            run: "click",
        },
        {
            trigger: ".o_searchview_input",
<<<<<<< HEAD
            run: "text foo",
=======
            run: "edit foo",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            trigger: ".o_menu_item.dropdown-item:contains(Warehouse):contains(foo)",
            run: "click",
        },
        // Add warehouse A's id to the warehouse context key
        {
            trigger: ".o_searchview_input",
            run: "click",
        },
        {
            trigger: ".o_searchview_input",
<<<<<<< HEAD
            run: "text warehouse",
        },
        {
            trigger: ".o_menu_item.dropdown-item:contains(Warehouse) a.o_expand > i",
=======
            run: "edit warehouse",
        },
        {
            trigger: ".o_menu_item.dropdown-item:contains(Search Warehouse for:) a.o_expand > i",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            run: "click",
        },
        {
            trigger: ".o_menu_item.dropdown-item.o_indent:contains(Warehouse A) a",
            run: "click",
        },
        // Add warehouse B's id to the warehouse context key
        {
            trigger: ".o_searchview_input",
<<<<<<< HEAD
            run: "text warehouse",
        },
        {
            trigger: ".o_menu_item.dropdown-item:contains(Warehouse) a.o_expand > i",
=======
            run: "edit warehouse",
        },
        {
            trigger: ".o_menu_item.dropdown-item:contains(Search Warehouse for:) a.o_expand > i",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            run: "click",
        },
        {
            trigger: ".o_menu_item.dropdown-item.o_indent:contains(Warehouse B) a",
            run: "click",
        },
        {
            content: "Go to product page",
<<<<<<< HEAD
            trigger: ".oe_kanban_card:has(.o_kanban_record_title span:contains(Lovely Product))",
=======
            trigger: ".o_kanban_record:has(span:contains(Lovely Product))",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            run: "click",
        },
        {
            trigger: ".o_form_view",
            run: () => {
                if (!document.querySelector("button[name=action_product_tmpl_forecast_report]")) {
                    const panelButtons = document.querySelectorAll(
                        ".o_control_panel_actions button"
                    );
                    const moreButton = Array.from(panelButtons).find(
                        (button) => button.textContent.trim() == "More"
                    );
                    moreButton.click();
                }
            },
        },
        {
            trigger: "button[name=action_product_tmpl_forecast_report]",
            run: "click",
        },
        {
            trigger: ".o_graph_view",
<<<<<<< HEAD
            run: () => {},
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
    ],
});

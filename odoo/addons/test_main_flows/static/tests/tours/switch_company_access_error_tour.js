/** @odoo-module **/
<<<<<<< HEAD
=======
import { router } from "@web/core/browser/router";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
import { registry } from "@web/core/registry";

const _console = window.console;
function assertEqual(actual, expected, msg = "") {
    if (actual !== expected) {
        const description = msg ? ` ${msg}` : "";
        _console.error(`Assert failed: expected: ${expected} ; got: ${actual}.${description}`);
    }
}

registry.category("web_tour.tours").add("test_company_switch_access_error", {
<<<<<<< HEAD
    test: true,
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    steps: () => [
        {
            trigger: ".o_list_view",
            run() {
                assertEqual(
                    JSON.stringify(
<<<<<<< HEAD
                        Array.from(this.$anchor[0].querySelectorAll(".o_data_cell")).map(
=======
                        Array.from(this.anchor.querySelectorAll(".o_data_cell")).map(
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
                            (n) => n.innerText
                        )
                    ),
                    JSON.stringify(["p1", "p2"])
                );
            },
        },
        {
            trigger: ".o_list_view .o_data_cell:contains(p2)",
<<<<<<< HEAD
        },
        {
            trigger: ".o_form_view .o_last_breadcrumb_item:contains(p2)",
            isCheck: true,
        },
        {
            trigger: ".o_switch_company_menu button",
        },
        {
            trigger:
                ".o_switch_company_menu .dropdown-item:contains(second company) .toggle_company",
        },
        {
            trigger: ".o_view_controller.o_list_view",
=======
            run: "click",
        },
        {
            trigger: ".o_form_view .o_last_breadcrumb_item:contains(p2)",
        },
        {
            trigger: ".o_switch_company_menu button",
            run: "click",
        },
        {
            trigger: ".o_switch_company_item:contains(second company) [role=menuitemcheckbox]",
            run: "click",
        },
        {
            trigger: ".o_switch_company_menu_buttons button:contains(Confirm)",
            run: "click",
        },
        {
            trigger: ".o_view_controller.o_list_view",
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            trigger: ".o_view_controller.o_list_view",
            async run() {
                assertEqual(
                    JSON.stringify(
<<<<<<< HEAD
                        Array.from(this.$anchor[0].querySelectorAll(".o_data_cell")).map(
=======
                        Array.from(this.anchor.querySelectorAll(".o_data_cell")).map(
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
                            (n) => n.innerText
                        )
                    ),
                    JSON.stringify(["p1"])
                );
                assertEqual(
                    document.querySelector("header.o_navbar .o_menu_brand").innerText,
                    "model_multicompany_menu"
                );
<<<<<<< HEAD
                const url = new URL(window.location);
                const hash = new URLSearchParams(url.hash.slice(1));
                assertEqual(hash.get("model"), "test.model_multicompany");
                assertEqual(hash.has("action"), true);
                assertEqual(hash.has("menu_id"), true);
                assertEqual(hash.get("view_type"), "list");
                assertEqual(hash.has("_company_switching"), false);
            },
            isCheck: true,
=======
                assertEqual("action" in router.current, true);
            },
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
    ],
});

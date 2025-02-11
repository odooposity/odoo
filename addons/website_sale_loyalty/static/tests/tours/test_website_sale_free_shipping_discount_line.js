/** @odoo-module **/

import { registry } from "@web/core/registry";
<<<<<<< HEAD
import wsTourUtils from "@website_sale/js/tours/tour_utils";

registry.category("web_tour.tours").add("check_shipping_discount", {
    test: true,
    url: "/shop?search=Plumbus",
=======
import * as wsTourUtils from '@website_sale/js/tours/tour_utils';

registry.category("web_tour.tours").add('check_shipping_discount', {
    url: '/shop?search=Plumbus',
    checkDelay: 50,
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    steps: () => [
        {
            content: "select Plumbus",
            trigger: '.oe_product a:contains("Plumbus")',
<<<<<<< HEAD
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "add 3 Plumbus into cart",
            trigger: '#product_details input[name="add_qty"]',
<<<<<<< HEAD
            run: "text 3",
=======
            run: "edit 3",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "click on 'Add to Cart' button",
            trigger: '#product_detail form[action^="/shop/cart/update"] #add_to_cart',
<<<<<<< HEAD
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        wsTourUtils.goToCart({ quantity: 3 }),
        wsTourUtils.goToCheckout(),
        {
<<<<<<< HEAD
            content: "select delivery1",
            trigger: "li label:contains(delivery1)",
        },
        {
            trigger: ".accordion-button",
        },
        {
            content: "check if delivery price is correct'",
            trigger: "label:contains(delivery1) + span[name=price]:contains(100.00)",
            isCheck: true,
        },
        {
            content: "check if delivery price is correct'",
            trigger: "#order_delivery .oe_currency_value:contains(100.00)",
            isCheck: true,
        },
        {
            content: "check if shipping discount is correct",
            trigger: "[data-reward-type='shipping'] .oe_currency_value:contains('-﻿75.00')",
            isCheck: true,
        },
        {
            content: "enter eWallet code",
            trigger: "form[name=coupon_code] input",
            run: "text infinite-money-glitch",
        },
        {
            trigger: "form[name=coupon_code] .a-submit",
        },
        {
            content: "wait for accordion to collapse, then reopen",
            trigger: ".accordion-button.collapsed",
        },
        {
            content: "check eWallet discount",
            trigger: "[data-reward-type=discount] .oe_currency_value:contains(325.00)",
            isCheck: true,
        },
        {
            content: "select delivery2",
            trigger: "li label:contains(delivery2)",
        },
        {
            content: "check for eWallet update after shipping cost change",
            trigger: "[data-reward-type=discount] .oe_currency_value:contains(300.00)",
            isCheck: true,
        },
        {
            content: "check if new delivery price is correct'",
            trigger: "label:contains(delivery2) + span[name=price]:contains(10.00)",
            isCheck: true,
        },
        {
            content: "check if new shipping discount is correct'",
            trigger: "[data-reward-type=shipping] .oe_currency_value:contains(-﻿10.00)",
            isCheck: true,
=======
            content: "select delivery2",
            trigger: 'li[name=o_delivery_method]:contains(delivery2) input',
            run: "click",
        },
        {
            content: "open cart overview",
            trigger: '.o_total_card button.accordion-button',
            run: "click",
        },
        {
            content: "check if delivery price is correct",
            trigger: '#order_delivery .oe_currency_value:contains(10.00)',
        },
        {
            content: "check if shipping discount is correct",
            trigger: '[data-reward-type=shipping] .oe_currency_value:contains(- 6.00)',
        },
        {
            content: "pay with eWallet",
            trigger: 'form[name=claim_reward] a.btn-primary:contains(Pay with eWallet)',
            run: 'click',
        },
        {
            trigger: ".o_total_card:contains(order summary)",
        },
        {
            content: "wait for accordion to collapse, then reopen",
            trigger: '.o_total_card button.accordion-button.collapsed',
            run: 'click',
        },
        {
            content: "check eWallet discount",
            trigger: "[data-reward-type=discount] .oe_currency_value:contains(- 304.00)",
        },
        {
            content: "select delivery1",
            trigger: 'li[name=o_delivery_method]:contains(delivery1) input',
            run: 'click',
        },
        {
            content: "check for eWallet update after shipping cost change",
            trigger: "[data-reward-type=discount] .oe_currency_value:contains(- 300.00)",
        },
        {
            content: "check if new delivery price is correct",
            trigger: '#order_delivery .oe_currency_value:contains(5.00)',
        },
        {
            content: "check if new shipping discount is correct",
            trigger: '[data-reward-type=shipping] .oe_currency_value:contains(- 5.00)',
        },
        {
            content: "confirm shipping method",
            trigger: '.o_total_card a[name=website_sale_main_button]',
            run: 'click',
        },
        {
            content: "confirm order using eWallet as payment",
            trigger: '.o_total_card button[name=o_payment_submit_button]',
            run: 'click',
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
    ],
});

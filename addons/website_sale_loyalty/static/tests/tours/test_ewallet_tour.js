/** @odoo-module **/

import { registry } from "@web/core/registry";
<<<<<<< HEAD
import tourUtils from '@website_sale/js/tours/tour_utils';
=======
import * as wsTourUtils from "@website_sale/js/tours/tour_utils";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
import { TourError } from "@web_tour/tour_service/tour_utils";


registry.category("web_tour.tours").add('shop_sale_ewallet', {
<<<<<<< HEAD
    test: true,
    url: '/shop',
    steps: () => [
        // Add a small drawer to the order (50$)
        ...tourUtils.addToCart({productName: "TEST - Small Drawer"}),
        tourUtils.goToCart(),
        {
            trigger: 'a:contains("Pay with eWallet")',
            extra_trigger: 'form[name="claim_reward"]',
            run() {
                const rewards = document.querySelectorAll('form[name="claim_reward"]');
                if (rewards.length === 1) {
                    this.$anchor.click();
=======
    url: '/shop',
    steps: () => [
        // Add a $50 gift card to the order
        ...wsTourUtils.addToCart({productName: "TEST - Gift Card"}),
        wsTourUtils.goToCart(),
        {
            trigger: 'a:contains("Pay with eWallet")',
            run() {
                const rewards = document.querySelectorAll('form[name="claim_reward"]');
                if (rewards.length === 1) {
                    this.anchor.click();
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
                } else {
                    throw new TourError(`Expected 1 claimable reward, got: ${rewards.length}`);
                }
            },
        },
<<<<<<< HEAD
        tourUtils.goToCheckout(),
        tourUtils.pay(),
=======
        {
            content: 'Checkout',
            trigger: 'a[name="website_sale_main_button"]',
            run: "click",
        },
        {
            content: 'Confirm Order',
            trigger: 'button[name="o_payment_submit_button"]',
            run: "click",
        },
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        {
            trigger: 'div[id="introduction"] h2:contains("Sales Order")'
        },
        {
            trigger: 'a[href="/shop/cart"]',
            run: function() {
                const cartQuantity = document.querySelector('.my_cart_quantity');
                if (cartQuantity.textContent !== '0'){
                    throw new TourError('cart should be empty and reset after an order is paid using ewallet')
                }
            }
        },
    ],
});

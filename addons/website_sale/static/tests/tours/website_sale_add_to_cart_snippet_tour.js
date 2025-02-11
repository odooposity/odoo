/** @odoo-module **/

import { goToCart, assertCartContains } from '@website_sale/js/tours/tour_utils';
import { registerWebsitePreviewTour, clickOnEditAndWaitEditMode, clickOnSnippet, insertSnippet, selectElementInWeSelectWidget, clickOnSave, clickOnElement, assertPathName } from '@website/js/tours/tour_utils';


function editAddToCartSnippet() {
    return [
        ...clickOnEditAndWaitEditMode(),
        ...clickOnSnippet({id: 's_add_to_cart'})
    ]
}

registerWebsitePreviewTour('add_to_cart_snippet_tour', {
        url: '/',
        edition: true,
    },
    () => [
        ...insertSnippet({name: 'Add to Cart Button'}),

        // Basic product with no variants
<<<<<<< HEAD
        wTourUtils.clickOnSnippet({id: 's_add_to_cart'}),
        ...wTourUtils.selectElementInWeSelectWidget('product_template_picker_opt', 'Product No Variant', true),
        ...wTourUtils.clickOnSave(),
        wTourUtils.clickOnElement('add to cart button', 'iframe .s_add_to_cart_btn'),
        {
            trigger: "iframe nav li.o_wsale_my_cart sup:contains(1)",
            run: () => null,
        },
        // Product with 2 variants with visitor choice (will open modal)
        ...editAddToCartSnippet(),
        ...wTourUtils.selectElementInWeSelectWidget('product_template_picker_opt', 'Product Yes Variant 1', true),
        ...wTourUtils.clickOnSave(),
        wTourUtils.clickOnElement('add to cart button', 'iframe .s_add_to_cart_btn'),
        wTourUtils.clickOnElement('continue shopping', 'iframe span:contains(Continue Shopping)'),
        {
            trigger: "body:not(:has(.modal))",
            run: () => null,
        },
        {
            trigger: "iframe nav li.o_wsale_my_cart sup:contains(2)",
            run: () => null,
        },

        // Product with 2 variants with a variant selected
        // ...editAddToCartSnippet(),
        // ...wTourUtils.selectElementInWeSelectWidget('product_template_picker_opt', 'Product Yes Variant 2', true),
        // {
        //     run: () => null,
        //     trigger:
        //         `we-select[data-name=product_variant_picker_opt] we-toggler:contains("Visitor's Choice")`,
        // },
        // ...wTourUtils.selectElementInWeSelectWidget('product_variant_picker_opt', 'Product Yes Variant 2 (Pink)'),
        // ...wTourUtils.clickOnSave(),
        // wTourUtils.clickOnElement('add to cart button', 'iframe .s_add_to_cart_btn'),
        // {
        //     trigger: "iframe nav li.o_wsale_my_cart sup:contains(3)",
        //     run: () => null,
        // },
        // TODO edm: re-enable this part when this isn't an indeterminist error anymore

        // Basic product with no variants and action=buy now
        ...editAddToCartSnippet(),
        ...wTourUtils.selectElementInWeSelectWidget('product_template_picker_opt', 'Product No Variant', true),
        {
            trigger: `we-select[data-name=action_picker_opt] we-toggler:contains("Add to Cart")`,
            run: () => null,
        },
        ...wTourUtils.selectElementInWeSelectWidget('action_picker_opt', 'Buy Now'),
        ...wTourUtils.clickOnSave(),
        wTourUtils.clickOnElement('add to cart button', 'iframe .s_add_to_cart_btn'),
        {
            content: "Wait for the redirection to the payment page",
            trigger: "iframe h3:contains('Confirm order')",
            timeout: 20000,
            run: () => null,
        },
        wTourUtils.assertPathName('/shop/payment', 'iframe a[href="/shop/cart"]'),

        wsTourUtils.goToCart({quantity: 3, backend: true}),
        wsTourUtils.assertCartContains({productName: 'Product No Variant', backend: true}),
        wsTourUtils.assertCartContains({productName: 'Product Yes Variant 1 (Red)', backend: true}),
        // wsTourUtils.assertCartContains({productName: 'Product Yes Variant 2 (Pink)'}),
=======
        ...clickOnSnippet({id: 's_add_to_cart'}),
        ...selectElementInWeSelectWidget('product_template_picker_opt', 'Product No Variant', true),
        ...clickOnSave(),
        clickOnElement('add to cart button', ':iframe .s_add_to_cart_btn'),

        // Product with 2 variants with visitor choice (will open modal)
        ...editAddToCartSnippet(),
        ...selectElementInWeSelectWidget('product_template_picker_opt', 'Product Yes Variant 1', true),
        ...clickOnSave(),
        clickOnElement('add to cart button', ':iframe .s_add_to_cart_btn'),
        clickOnElement('continue shopping', ':iframe .modal button:contains(Continue Shopping)'),

        // Product with 2 variants with a variant selected
        ...editAddToCartSnippet(),
        ...selectElementInWeSelectWidget('product_template_picker_opt', 'Product Yes Variant 2', true),
        ...selectElementInWeSelectWidget('product_variant_picker_opt', 'Product Yes Variant 2 (Pink)'),
        ...clickOnSave(),
        clickOnElement('add to cart button', ':iframe .s_add_to_cart_btn'),

        // Basic product with no variants and action=buy now
        ...editAddToCartSnippet(),
        ...selectElementInWeSelectWidget('product_template_picker_opt', 'Product No Variant', true),
        ...selectElementInWeSelectWidget('action_picker_opt', 'Buy Now'),
        ...clickOnSave(),
        clickOnElement('add to cart button', ':iframe .s_add_to_cart_btn'),
        {
            // wait for the page to load, as the next check was sometimes too fast
            content: "Wait for the redirection to the payment page",
            trigger: ":iframe h3:contains(order overview)",
        },
        assertPathName('/shop/payment', ':iframe a[href="/shop/cart"]'),

        goToCart({quantity: 4, backend: true}),
        assertCartContains({productName: 'Product No Variant', backend: true}),
        assertCartContains({productName: 'Product Yes Variant 1 (Red)', backend: true}),
        assertCartContains({productName: 'Product Yes Variant 2 (Pink)', backend: true}),
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    ],
);

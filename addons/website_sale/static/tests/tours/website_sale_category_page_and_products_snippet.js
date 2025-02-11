/** @odoo-modules */

import { clickOnSave, clickOnEditAndWaitEditMode, registerWebsitePreviewTour } from '@website/js/tours/tour_utils';
import { registry } from "@web/core/registry";


<<<<<<< HEAD
wTourUtils.registerWebsitePreviewTour('category_page_and_products_snippet_edition', {
    test: true,
=======
registerWebsitePreviewTour('category_page_and_products_snippet_edition', {
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    url: '/shop',
}, () => [
    {
        content: "Navigate to category",
<<<<<<< HEAD
        trigger: 'iframe .o_wsale_filmstip > li:contains("Test Category")',
    },
    ...wTourUtils.clickOnEditAndWaitEditMode(),
    Object.assign(wTourUtils.dragNDrop({id: 's_dynamic_snippet_products', name: 'Products'}), {
        content: "Drag and drop the product snippet inside the category area",
        run: 'drag_and_drop_native iframe #category_header',
    }),
=======
        trigger: ':iframe .o_wsale_filmstip > li:contains("Test Category") > a',
        run: "click",
    },
    ...clickOnEditAndWaitEditMode(),
    {
        trigger: ".o_website_preview.editor_enable.editor_has_snippets",
    },
    {
        content: "Drag and drop the Products snippet group inside the category area.",
        trigger: '#oe_snippets .oe_snippet[name="Products"] .oe_snippet_thumbnail:not(.o_we_ongoing_insertion)',
        run: "drag_and_drop :iframe #category_header",
    },
    {
        content: "Click on the s_dynamic_snippet_products snippet.",
        trigger: ':iframe .o_snippet_preview_wrap[data-snippet-id="s_dynamic_snippet_products"]',
        run: "click",
    },

>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    {
        content: "Click on the product snippet to show its options",
        trigger: ':iframe #category_header .s_dynamic_snippet_products',
        run: "click",
    },
    {
        content: "Open category option dropdown",
        trigger: 'we-select[data-attribute-name="productCategoryId"] we-toggler',
        run: "click",
    },
    {
        content: "Choose the option to use the current page's category",
        trigger: 'we-button[data-select-data-attribute="current"]',
        run: "click",
    },
    ...clickOnSave(),
]);

registry.category("web_tour.tours").add('category_page_and_products_snippet_use', {
<<<<<<< HEAD
    test: true,
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    url: '/shop',
    steps: () => [
    {
        content: "Navigate to category",
<<<<<<< HEAD
        trigger: '.o_wsale_filmstip > li:contains("Test Category")',
=======
        trigger: '.o_wsale_filmstip > li:contains("Test Category") > a',
        run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    },
    {
        content: "Check that the snippet displays the right products",
        // Wait for at least one shown product
        trigger: '#category_header .s_dynamic_snippet_products:has(.o_carousel_product_img_link)',
<<<<<<< HEAD
        run: function () {
            // Fetch the category's id from the url.
            const productCategoryId = window.location.href.match('/shop/category/test-category-(\\d+)')[1]
            const productGridEl = this.$anchor[0].closest('#products_grid');
=======
        run() {
            // Fetch the category's id from the url.
            const productCategoryId = window.location.href.match('/shop/category/test-category-(\\d+)')[1]
            const productGridEl = this.anchor.closest('#products_grid');
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            const regex = new RegExp(`^/shop/[\\w-/]+-(\\d+)\\?category=${productCategoryId}$`);
            const allPageProductIDs = [...productGridEl.querySelectorAll('.oe_product_image_link')]
                .map(el => el.getAttribute('href').match(regex)[1]);

            const $shownProductLinks = this.anchor.querySelectorAll(".o_carousel_product_img_link");
            const regex2 = new RegExp(`^/shop/[\\w-/]+-(\\d+)(?:#attribute_values=\\d*)?$`);
            for (const shownProductLinkEl of $shownProductLinks) {
                const productID = shownProductLinkEl.getAttribute('href').match(regex2)[1];
                if (!allPageProductIDs.includes(productID)) {
                    console.error(`The snippet displays a product (${productID}) which does not belong to the current category (${allPageProductIDs})`);
                }
            }
        },
    },
]});

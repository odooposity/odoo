/** @odoo-module **/

import {
    clickOnEditAndWaitEditMode,
    clickOnSave,
    registerWebsitePreviewTour,
    testSwitchWebsite,
} from '@website/js/tours/tour_utils';

registerWebsitePreviewTour('snippet_cache_across_websites', {
    edition: true,
    url: '/@/'
}, () => [
    {
<<<<<<< HEAD
        content: "Check that the custom snippet is displayed",
        trigger: '#snippet_custom_body span:contains("custom_snippet_test")',
        run: () => null,
    },
    // There's no need to save, but canceling might or might not show a popup...
    ...wTourUtils.clickOnSave(),
    ...wTourUtils.testSwitchWebsite('Test Website'),
    ...wTourUtils.clickOnEditAndWaitEditMode(),
=======
        content: "Click on the Custom category block",
        trigger: "#oe_snippets .oe_snippet[name='Custom'].o_we_draggable .oe_snippet_thumbnail",
        run: "click",
    },
    {
        content: "Ensure custom snippet preview appeared in the dialog",
        trigger: ":iframe .o_snippet_preview_wrap[data-snippet-id='s_text_block'] section[data-name='custom_snippet_test']",
    },
    {
        content: "Close the 'add snippet' dialog",
        trigger: ".o_add_snippet_dialog .modal-header .btn-close",
        run: "click",
    },
    // There's no need to save, but canceling might or might not show a popup...
    ...clickOnSave(),
    ...testSwitchWebsite('Test Website'),
    ...clickOnEditAndWaitEditMode(),
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    {
        content: "Check that the custom snippet category is not here",
        trigger: "#oe_snippets:not(:has(.oe_snippet[name='Custom']))",
    },
]);

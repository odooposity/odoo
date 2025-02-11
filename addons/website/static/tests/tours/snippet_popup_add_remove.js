/** @odoo-module */

import {
    clickOnEditAndWaitEditMode,
    clickOnSave,
    insertSnippet,
    registerWebsitePreviewTour,
} from '@website/js/tours/tour_utils';

registerWebsitePreviewTour('snippet_popup_add_remove', {
    url: '/',
    edition: true,
}, () => [
    ...insertSnippet({
        name: "Popup",
        id: "s_popup",
        groupName: "Content",
}), {
    content: 'Edit s_popup snippet',
    trigger: ':iframe #wrap.o_editable [data-snippet="s_popup"] .row > div', // Click deep in the snippet structure
    run: "click",
}, {
    content: 'Check s_popup setting are loaded, wait panel is visible',
    trigger: '.o_we_customize_panel',
<<<<<<< HEAD
    run: () => null,
},
...wTourUtils.clickOnSave(),
...wTourUtils.clickOnEditAndWaitEditMode(),
{
    content: 'Toggle the visibility of the Popup',
    in_modal: false,
    trigger: '.o_we_invisible_el_panel .o_we_invisible_entry:contains("Popup")',
}, {
    content: 'Edit s_popup snippet(2)',
    in_modal: false,
    trigger: 'iframe #wrap.o_editable [data-snippet="s_popup"] h2',
    run: function() {
        // Simulating pressing enter.
        const anchor = this.$anchor[0];
=======
},
...clickOnSave(),
...clickOnEditAndWaitEditMode(),
{
    content: 'Toggle the visibility of the Popup',
    trigger: '.o_we_invisible_el_panel .o_we_invisible_entry:contains("Popup")',
    run: "click",
}, {
    content: 'Edit s_popup snippet(2)',
    trigger: ':iframe #wrap.o_editable [data-snippet="s_popup"] h2',
    run: function() {
        // Simulating pressing enter.
        const anchor = this.anchor;
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        // Trick the editor into keyboardType === 'PHYSICAL' and press enter
        anchor.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
        // Trigger editor's '_onInput' handler, which leads to historyRollback.
        anchor.dispatchEvent(new InputEvent('input', { inputType: 'insertLineBreak', bubbles: true }));
    }
}, {
    content: 'Check the s_popup was visible',
<<<<<<< HEAD
    in_modal: false,
    trigger: 'iframe #wrapwrap:has([data-snippet="s_popup"]:not(.d-none))',
    run: () => null,
=======
    trigger: ':iframe #wrapwrap:has([data-snippet="s_popup"]:not(.d-none))',
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}, {
    content: `Remove the s_popup snippet`,
    trigger: '.o_we_customize_panel we-customizeblock-options:contains("Popup") we-button.oe_snippet_remove:first',
    run: "click",
}, {
    content: 'Check the s_popup was removed',
    trigger: ':iframe #wrap.o_editable:not(:has([data-snippet="s_popup"]))',
},
// Test that undoing dropping the snippet removes the invisible elements panel.
...insertSnippet({
    name: "Popup",
    id: "s_popup",
    groupName: "Content",
}), {
    content: "The popup should be in the invisible elements panel.",
    trigger: '.o_we_invisible_el_panel .o_we_invisible_entry',
}, {
    content: "Click on the 'undo' button.",
    trigger: '#oe_snippets button.fa-undo',
    run: "click",
}, {
    content: "Check that the s_popup was removed.",
    trigger: ':iframe #wrap.o_editable:not(:has([data-snippet="s_popup"]))',
}, {
    content: "The invisible elements panel should also be removed.",
    trigger: '#oe_snippets:not(:has(.o_we_invisible_el_panel)',
}]);

/** @odoo-module **/

<<<<<<< HEAD
import wTourUtils from '@website/js/tours/tour_utils';

wTourUtils.registerWebsitePreviewTour("test_drag_and_drop_on_non_editable", {
    test: true,
    url: "/",
    edition: true,
}, () => [
    wTourUtils.dragNDrop({
        id: "s_company_team",
        name: "Team",
    }),
    {
        content: "Click on an editable media in non editable env.",
        trigger: "iframe .s_company_team .o_not_editable > .o_editable_media",
=======
import { insertSnippet, goBackToBlocks, registerWebsitePreviewTour } from '@website/js/tours/tour_utils';

registerWebsitePreviewTour("test_drag_and_drop_on_non_editable", {
    url: "/",
    edition: true,
}, () => [
    ...insertSnippet({
        id: "s_company_team",
        name: "Team",
        groupName: "People",
    }),
    {
        content: "Click on an editable media in non editable env.",
        trigger: ":iframe .s_company_team .o_not_editable > .o_editable_media",
        run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    },
    {
        content: "Verify that the Replace options is in the editor.",
        trigger: "we-button[data-replace-media]",
<<<<<<< HEAD
        isCheck: true,
    },
    wTourUtils.goBackToBlocks(),
    Object.assign(wTourUtils.dragNDrop({
        id: "s_text_highlight",
        name: "Text Highlight",
    }), {
        content: "Drag and drop the Text Highlight building block next to the Team block media.",
        run: "drag_and_drop_native iframe .s_company_team .o_not_editable > .o_editable_media",
    }),
    {
        content: "Verify that the Text Highlight building block isn't in a non editable element.",
        trigger: "iframe .s_company_team :not(.o_not_editable) > .s_text_highlight",
        isCheck: true,
=======
    },
    goBackToBlocks(),
    {
        trigger: ".o_website_preview.editor_enable.editor_has_snippets",
    },
    {
        content: "Drag and drop the Text Highlight building block next to the Team block media.",
        trigger: `#oe_snippets .oe_snippet[name="Text Highlight"].o_we_draggable .oe_snippet_thumbnail:not(.o_we_ongoing_insertion)`,
        run: "drag_and_drop :iframe .s_company_team .o_not_editable > .o_editable_media",
    },
    {
        content: "Verify that the Text Highlight building block isn't in a non editable element.",
        trigger: ":iframe .s_company_team :not(.o_not_editable) > .s_text_highlight",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    },
]);

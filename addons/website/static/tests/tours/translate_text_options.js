/** @odoo-module **/

<<<<<<< HEAD
import wTourUtils from "@website/js/tours/tour_utils";
=======
import {
    clickOnSave,
    insertSnippet,
    registerWebsitePreviewTour,
    selectElementInWeSelectWidget,
} from "@website/js/tours/tour_utils";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

const selectText = (selector) => {
    return {
        content: "Select some text content",
<<<<<<< HEAD
        trigger: `iframe ${selector}`,
=======
        trigger: `:iframe ${selector}`,
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        run() {
            const iframeDOC = document.querySelector(".o_iframe").contentDocument;
            const range = iframeDOC.createRange();
            const selection = iframeDOC.getSelection();
<<<<<<< HEAD
            range.selectNodeContents(this.$anchor[0]);
            selection.removeAllRanges();
            selection.addRange(range);
            this.$anchor[0].click();
=======
            range.selectNodeContents(this.anchor);
            selection.removeAllRanges();
            selection.addRange(range);
            this.anchor.click();
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
    };
};

<<<<<<< HEAD
wTourUtils.registerWebsitePreviewTour(
    "translate_text_options",
    {
        url: "/",
        test: true,
        edition: true,
    },
    () => [
        wTourUtils.dragNDrop({
            id: "s_text_block",
            name: "Text",
        }),
        {
            content: "Select the first text block in the snippet",
            trigger: "iframe #wrap .s_text_block p:first",
=======
registerWebsitePreviewTour(
    "translate_text_options",
    {
        url: "/",
        edition: true,
    },
    () => [
        ...insertSnippet({
            id: "s_text_block",
            name: "Text",
            groupName: "Text",
        }),
        {
            content: "Select the first text block in the snippet",
            trigger: ":iframe #wrap .s_text_block p:first",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            run: "dblclick",
        },
        {
            content: "Click on the 'Animate Text' button to activate the option",
            trigger: "div.o_we_animate_text",
<<<<<<< HEAD
        },
        {
            content: "Select the second text block in the snippet",
            trigger: "iframe #wrap .s_text_block p:last",
=======
            run: "click",
        },
        {
            content: "Select the second text block in the snippet",
            trigger: ":iframe #wrap .s_text_block p:last",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            run: "dblclick",
        },
        {
            content: "Click on the 'Highlight Effects' button to activate the option",
            trigger: "div.o_we_text_highlight",
<<<<<<< HEAD
        },
        ...wTourUtils.clickOnSave(),
        {
            content: "Change the language to French",
            trigger: 'iframe .js_language_selector .js_change_lang[data-url_code="fr"]',
        },
        {
            content: "Enable translation",
            trigger: ".o_translate_website_container a",
=======
            run: "click",
        },
        ...clickOnSave(),
        {
            content: "Change the language to French",
            trigger: ':iframe .js_language_selector .js_change_lang[data-url_code="fr"]',
            run: "click",
        },
        {
            content: "Click edit button",
            trigger: ".o_menu_systray .o_edit_website_container button",
            run: "click",
        },
        {
            content: "Enable translation",
            trigger: ".o_popover .o_translate_website_dropdown_item",
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Close the dialog",
            trigger: ".modal-footer .btn-secondary",
<<<<<<< HEAD
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        // Select the highlighted text content.
        selectText("#wrap .s_text_block p:last .o_text_highlight"),
        {
            content: "Check that the highlight options were displayed",
            trigger: "#toolbar we-select[data-name=text_highlight_opt]",
<<<<<<< HEAD
            isCheck: true,
        },
        ...wTourUtils.selectElementInWeSelectWidget("text_highlight_opt", "Jagged"),
=======
        },
        ...selectElementInWeSelectWidget("text_highlight_opt", "Jagged"),
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        // Select the animated text content.
        selectText("#wrap .s_text_block p:first .o_animated_text"),
        {
            content:
                "Check that the animation options are displayed and highlight options are no longer visible",
            trigger:
                "#toolbar:not(:has(.snippet-option-TextHighlight)) .snippet-option-WebsiteAnimate",
<<<<<<< HEAD
            isCheck: true,
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        // Select a text content without any option.
        selectText("footer .s_text_block p:first span"),
        {
            content: "Check that all text options are removed",
            trigger:
                "#toolbar:not(:has(.snippet-option-TextHighlight, .snippet-option-WebsiteAnimate))",
<<<<<<< HEAD
            isCheck: true,
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        // Select the highlighted text content again.
        selectText("#wrap .s_text_block p:last .o_text_highlight"),
        {
            content: "Check that only the highlight options are displayed",
            trigger:
                "#toolbar:not(:has(.snippet-option-WebsiteAnimate)) .snippet-option-TextHighlight",
<<<<<<< HEAD
            isCheck: true,
        },
        ...wTourUtils.clickOnSave(),
        {
            content: "Check that the highlight effect was correctly translated",
            trigger:
                "iframe .s_text_block .o_text_highlight:has(.o_text_highlight_item:has(.o_text_highlight_path_jagged))",
            isCheck: true,
=======
        },
        ...clickOnSave(),
        {
            content: "Check that the highlight effect was correctly translated",
            trigger:
                ":iframe .s_text_block .o_text_highlight:has(.o_text_highlight_item:has(.o_text_highlight_path_jagged))",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
    ]
);

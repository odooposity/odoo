/** @odoo-module */

<<<<<<< HEAD
import wTourUtils from "@website/js/tours/tour_utils";
=======
import {
    clickOnSave,
    changeOption,
    checkIfVisibleOnScreen,
    insertSnippet,
    registerWebsitePreviewTour,
    selectHeader,
} from "@website/js/tours/tour_utils";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

const checkIfUserMenuNotMasked = function () {
    return [
        {
            content: "Click on the user dropdown",
<<<<<<< HEAD
            trigger: "iframe #wrapwrap header .o_header_hide_on_scroll li.dropdown > a",
        },
        wTourUtils.checkIfVisibleOnScreen("iframe #wrapwrap header .o_header_hide_on_scroll li.dropdown .dropdown-menu.show a[href='/my/home']"),
=======
            trigger: ":iframe #wrapwrap header li.dropdown > a:contains(mitchell admin)",
            run: "click",
        },
        checkIfVisibleOnScreen(
            ":iframe #wrapwrap header li.dropdown .dropdown-menu.show a[href='/my/home']"
        ),
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    ];
};

const scrollDownToMediaList = function () {
    return {
        content: "Scroll down the page a little to leave the dropdown partially visible",
<<<<<<< HEAD
        trigger: "iframe #wrapwrap .s_media_list",
        run: function () {
            // Scroll down to the media list snippet.
            this.$anchor[0].scrollIntoView(true);
=======
        trigger: ":iframe #wrapwrap .s_media_list",
        run() {
            // Scroll down to the media list snippet.
            this.anchor.scrollIntoView({ behavior: "instant" });
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
    };
};

<<<<<<< HEAD
wTourUtils.registerWebsitePreviewTour("dropdowns_and_header_hide_on_scroll", {
    test: true,
    url: "/",
    edition: true,
}, () => [
    wTourUtils.dragNDrop({id: "s_media_list", name: "Media List"}),
    wTourUtils.selectHeader(),
    wTourUtils.changeOption("undefined", 'we-select[data-variable="header-scroll-effect"]'),
    wTourUtils.changeOption("undefined", 'we-button[data-name="header_effect_fixed_opt"]'),
    wTourUtils.changeOption("HeaderLayout", 'we-select[data-variable="header-template"] we-toggler'),
    wTourUtils.changeOption("HeaderLayout", 'we-button[data-name="header_sales_two_opt"]'),
    ...wTourUtils.clickOnSave(undefined, 30000),
=======
registerWebsitePreviewTour("dropdowns_and_header_hide_on_scroll", {
    url: "/",
    edition: true,
    checkDelay: 100,
}, () => [
    ...insertSnippet({id: "s_media_list", name: "Media List", groupName: "Content"}),
    selectHeader(),
    changeOption("undefined", 'we-select[data-variable="header-scroll-effect"]'),
    changeOption("undefined", 'we-button[data-name="header_effect_fixed_opt"]'),
    {
        content: "Wait for the modification has been applied",
        trigger: ".o_we_customize_panel:contains(Select a block on your page to style it.)",
        timeout: 30000,
    },
    {
        trigger: ":iframe #wrapwrap header.o_header_fixed",
    },
    selectHeader(),
    changeOption("WebsiteLevelColor", 'we-select[data-variable="header-template"] we-toggler'),
    changeOption("WebsiteLevelColor", 'we-button[data-name="header_sales_two_opt"]'),
    {
        trigger: ":iframe .o_header_sales_two_top",
        timeout: 30000,
    },
    {
        content: "check that header_sales_two_opt is well selected",
        trigger: ":iframe #wrapwrap header.o_header_fixed div[aria-label=Middle] div[role=search]",
    },
    ...clickOnSave(undefined, 30000),
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    ...checkIfUserMenuNotMasked(),
    // We scroll the page a little because when clicking on the dropdown, the
    // page needs to scroll to the top first and then open the dropdown menu.
    scrollDownToMediaList(),
    ...checkIfUserMenuNotMasked(),
    // We scroll the page again because when typing in the searchbar input, the
    // page needs also to scroll to the top first and then open the dropdown
    // with the search results.
    scrollDownToMediaList(),
    {
        content: "Type a search query into the searchbar input",
<<<<<<< HEAD
        trigger: "iframe #wrapwrap header .s_searchbar_input input.search-query",
        run: "text a",
    },
    wTourUtils.checkIfVisibleOnScreen("iframe #wrapwrap header .s_searchbar_input.show .o_dropdown_menu.show"),
=======
        trigger: ":iframe #wrapwrap header .s_searchbar_input input.search-query",
        run: "edit a",
    },
    checkIfVisibleOnScreen(":iframe #wrapwrap header .s_searchbar_input.show .o_dropdown_menu.show"),
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
]);

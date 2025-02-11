/** @odoo-module **/

<<<<<<< HEAD
import wTourUtils from "@website/js/tours/tour_utils";
=======
import {
    insertSnippet,
    registerWebsitePreviewTour,
    clickOnEditAndWaitEditMode,
    clickOnSave,
} from '@website/js/tours/tour_utils';
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

function websiteCreateEventTourSteps() {
    return [
        {
            content: "Click here to add new content to your website.",
            trigger: ".o_menu_systray .o_new_content_container > a",
<<<<<<< HEAD
            consumeVisibleOnly: true,
        },
        {
            content: "Click here to create a new event.",
            trigger: "a[data-module-xml-id='base.module_website_event']",
        },
        {
            content:
                "Create a name for your new event and click `Continue`. e.g: Technical Training",
            trigger: ".modal-dialog div[name='name'] input",
            run: "text Technical Training",
        },
        {
            content: "Open date range picker. Pick a Start date for your event",
            trigger: ".modal-dialog div[name=date_begin]",
            run: () => {
                document.querySelector("input[data-field='date_begin']").value =
                    "09/30/2020 08:00:00";
                document
                    .querySelector("input[data-field='date_begin']")
                    .dispatchEvent(new Event("change"));

                document.querySelector("input[data-field='date_end']").value =
                    "10/02/2020 23:00:00";
                document
                    .querySelector("input[data-field='date_end']")
                    .dispatchEvent(new Event("change"));

                document.querySelector("input[data-field='date_begin']").click();
            },
        },
        {
            content: "Click `Continue` to create the event.",
            trigger: ".modal-footer button.btn-primary",
            extra_trigger: ".modal-dialog input[type=text][value!='']",
        },
        {
            content: "Drag this block and drop it in your page.",
            trigger:
                "#oe_snippets.o_loaded #snippet_structure .oe_snippet:eq(2) .oe_snippet_thumbnail",
            run: "drag_and_drop_native iframe #wrapwrap > main",
        },
        {
            content: "Once you click on save, your event is updated.",
            trigger: "button[data-action=save]",
            // Wait until the drag and drop is resolved (causing a history step)
            // before clicking save.
            extra_trigger:
                ".o_we_external_history_buttons button[data-action=undo]:not([disabled])",
        },
        {
            content: "Click to publish your event.",
            trigger: ".o_menu_systray_item .o_switch_danger_success",
            extra_trigger: "iframe body:not(.editor_enable)",
        },
    ];
}

=======
            tooltipPosition: "bottom",
            run: "click",
        }, {
            trigger: "a[data-module-xml-id='base.module_website_event']",
            content: "Click here to create a new event.",
            tooltipPosition: "bottom",
            run: "click",
        }, {
            trigger: ".modal-dialog div[name='name'] input",
            content: "Create a name for your new event and click Continue. e.g: Technical Training",
            run: "edit Technical Training",
            tooltipPosition: "left",
        }, {
            trigger: ".modal-dialog div[name=date_begin]",
            content: "Open date range picker. Pick a Start date for your event",
            run() {
                const el1 = document.querySelector("input[data-field='date_begin']");
                el1.value = "09/30/2020 08:00:00";
                el1.dispatchEvent(new Event("change", {bubbles: true, cancelable: true}));
                const el2 = document.querySelector("input[data-field='date_end']");
                el2.value = "10/02/2020 23:00:00";
                el2.dispatchEvent(new Event("change", {bubbles: true, cancelable: true}));
                el1.click();
            }
        },
        {
            isActive: ["auto"],
            trigger: ".modal-dialog input[type=text]:not(:value(''))",
        },
        {
            trigger: '.modal-footer button.btn-primary',
            content: "Click Continue to create the event.",
            tooltipPosition: "right",
            run: "click",
        },
        ...insertSnippet({
            id: "s_image_text",
            name: "Image - Text",
            groupName: "Content",
        }), {
            // Wait until the drag and drop is resolved (causing a history step)
            // before clicking save.
            trigger: ".o_we_external_history_buttons button.fa-undo:not([disabled])",
        }, {
            trigger: "button[data-action=save]",
            content: "Once you click on save, your event is updated.",
            tooltipPosition: "bottom",
            run: "click",
        },
        {
            trigger: ":iframe body:not(.editor_enable)",
        },
        {
            trigger: ".o_menu_systray_item.o_website_publish_container a",
            content: "Click to publish your event.",
            tooltipPosition: "top",
            run: "click",
        }, {
            trigger: ".o_website_edit_in_backend > a",
            content: "Click here to customize your event further.",
            tooltipPosition: "bottom",
        },
    ];
}

>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
function websiteEditEventTourSteps() {
    return [
        {
            content: "Redirect to Event Page",
<<<<<<< HEAD
            trigger: "iframe span:contains('Back to events')",
            run: "click",
        },
        ...wTourUtils.clickOnEditAndWaitEditMode(),
        {
            content: "edit the short description of the event",
            trigger: "iframe .o_wevent_events_list small",
            run: "text new short description",
        },
        ...wTourUtils.clickOnSave(),
        {
            content: "is short description updated?",
            trigger: "iframe .o_wevent_events_list small:contains('new short description')",
            isCheck: true,
=======
            trigger: ":iframe a[title='Back to All Events']",
            run: "click",
        },
        ...clickOnEditAndWaitEditMode(),
        {
            content: "edit the short description of the event",
            trigger: ":iframe .opt_events_list_columns small",
            run: function () {
                this.anchor.innerHTML = "new short description";
            }
        },
        ...clickOnSave(),
        {
            content: "is short description updated?",
            trigger: ":iframe .opt_events_list_columns small:contains('new short description')",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
    ];
}

<<<<<<< HEAD
wTourUtils.registerWebsitePreviewTour(
    "website_event_tour",
    {
        test: true,
=======
registerWebsitePreviewTour(
    "website_event_tour", {
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        url: "/",
    },
    () => [...websiteCreateEventTourSteps(), ...websiteEditEventTourSteps()]
);

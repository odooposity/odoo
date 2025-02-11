/** @odoo-module **/
import * as hoot from "@odoo/hoot-dom";
import { _t } from "@web/core/l10n/translation";

/**
 * Calls the given `func` then returns/resolves to `true`
 * if it will result to unloading of the page.
 * @param {(...args: any[]) => void} func
 * @param  {any[]} args
 * @returns {boolean | Promise<boolean>}
 */
export function callWithUnloadCheck(func, ...args) {
    let willUnload = false;
    const beforeunload = () => (willUnload = true);
    window.addEventListener("beforeunload", beforeunload);
    const result = func(...args);
    if (result instanceof Promise) {
        return result.then(() => {
            window.removeEventListener("beforeunload", beforeunload);
            return willUnload;
        });
    } else {
        window.removeEventListener("beforeunload", beforeunload);
        return willUnload;
    }
}

<<<<<<< HEAD
export function getFirstVisibleElement($elements) {
    for (var i = 0; i < $elements.length; i++) {
        var $i = $elements.eq(i);
        if (_legacyIsVisible($i[0])) {
            return $i;
        }
    }
    return $();
}

/**
 * @param {JQuery|undefined} target
 */
export function getJQueryElementFromSelector(selector, $target) {
    $target = $target || $(document);
    const iframeSplit = typeof selector === "string" && selector.match(/(.*\biframe[^ ]*)(.*)/);
    if (iframeSplit && iframeSplit[2]) {
        var $iframe = $target.find(`${iframeSplit[1]}:not(.o_ignore_in_tour)`);
        if ($iframe.is('[is-ready="false"]')) {
            return $();
        }
        var $el = $iframe.contents().find(iframeSplit[2]);
        $el.iframeContainer = $iframe[0];
        return $el;
    } else if (typeof selector === "string") {
        return $target.find(selector);
    } else {
        return $(selector);
    }
}

/**
 * @param {HTMLElement} [element]
 * @param {RunCommand} [runCommand]
 * @returns {string}
 */
export function getConsumeEventType(element, runCommand) {
    if (!element) {
        return "click";
    }
    const { classList, tagName, type } = element;
    const tag = tagName.toLowerCase();

    // Many2one
    if (classList.contains("o_field_many2one")) {
        return "autocompleteselect";
    }

    // Inputs and textareas
    if (
        tag === "textarea" ||
        (tag === "input" &&
            (!type ||
                ["email", "number", "password", "search", "tel", "text", "url"].includes(type)))
    ) {
        if (
            utils.isSmall() &&
            element.closest(".o_field_widget")?.matches(".o_field_many2one, .o_field_many2many")
        ) {
            return "click";
        }
        return "input";
    }

    // jQuery draggable
    if (classList.contains("ui-draggable-handle")) {
        return "mousedown";
    }

    // Drag & drop run command
    if (typeof runCommand === "string" && /^drag_and_drop/.test(runCommand)) {
        // this is a heuristic: the element has to be dragged and dropped but it
        // doesn't have class 'ui-draggable-handle', so we check if it has an
        // ui-sortable parent, and if so, we conclude that its event type is 'sort'
        if (element.closest(".ui-sortable")) {
            return "sort";
        }
        if (
            (/^drag_and_drop_native/.test(runCommand) && classList.contains("o_draggable")) ||
            element.closest(".o_draggable")
        ) {
            return "pointerdown";
        }
    }

    // Default: click
    return "click";
}

/**
 * ! This function is a copy-paste of its namesake in web/static/tests/helpers/utils.js
 * TODO: Unify utils for tests and tours since they're doing the exact same thing
 * @param {Node} n1
 * @param {Node} n2
 * @returns {Node[]}
 */
export function getDifferentParents(n1, n2) {
    const parents = [n2];
    while (parents[0].parentNode) {
        const parent = parents[0].parentNode;
        if (parent.contains(n1)) {
            break;
        }
        parents.unshift(parent);
    }
    return parents;
}

=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
/**
 * @param {HTMLElement} element
 * @returns {HTMLElement | null}
 */
export function getScrollParent(element) {
    if (!element) {
        return null;
    }
    // We cannot only rely on the fact that the element’s scrollHeight is
    // greater than its clientHeight. This might not be the case when a step
    // starts, and the scrollbar could appear later. For example, when clicking
    // on a "building block" in the "building block previews modal" during a
    // tour (in website edit mode). When the modal opens, not all "building
    // blocks" are loaded yet, and the scrollbar is not present initially.
    const overflowY = window.getComputedStyle(element).overflowY;
    const isScrollable =
        overflowY === "auto" ||
        overflowY === "scroll" ||
        (overflowY === "visible" && element === element.ownerDocument.scrollingElement);
    if (isScrollable) {
        return element;
    } else {
        return getScrollParent(element.parentNode);
    }
}

<<<<<<< HEAD
/**
 * @param {HTMLElement} el
 * @param {string} type
 * @param {boolean} canBubbleAndBeCanceled
 * @param {PointerEventInit} [additionalParams]
 */
export const triggerPointerEvent = (el, type, canBubbleAndBeCanceled, additionalParams) => {
    const eventInit = {
        bubbles: canBubbleAndBeCanceled,
        cancelable: canBubbleAndBeCanceled,
        view: window,
        ...additionalParams,
    };

    el.dispatchEvent(new PointerEvent(type, eventInit));
    if (type.startsWith("pointer")) {
        el.dispatchEvent(new MouseEvent(type.replace("pointer", "mouse"), eventInit));
    }
};

export class RunningTourActionHelper {
    constructor(tip_widget) {
        this.tip_widget = tip_widget;
    }
    click(element) {
        this._click(this._get_action_values(element));
    }
    dblclick(element) {
        this._click(this._get_action_values(element), 2);
    }
    tripleclick(element) {
        this._click(this._get_action_values(element), 3);
    }
    clicknoleave(element) {
        this._click(this._get_action_values(element), 1, false);
    }
    text(text, element) {
        this._text(this._get_action_values(element), text);
    }
    remove_text(text, element) {
        this._text(this._get_action_values(element), "\n");
    }
    text_blur(text, element) {
        this._text_blur(this._get_action_values(element), text);
    }
    range(text, element) {
        this._range(this._get_action_values(element), text);
    }
    drag_and_drop(to, element) {
        this._drag_and_drop_jquery(this._get_action_values(element), to);
    }
    drag_and_drop_native(toSel, element) {
        const to = getJQueryElementFromSelector(toSel)[0];
        this._drag_and_drop(this._get_action_values(element).$element[0], to);
    }
    keydown(keyCodes, element) {
        this._keydown(this._get_action_values(element), keyCodes.split(/[,\s]+/));
    }
    auto(element) {
        var values = this._get_action_values(element);
        if (values.consume_event === "input") {
            this._text(values);
        } else {
            this._click(values);
        }
    }
    _get_action_values(element) {
        var $e = getJQueryElementFromSelector(element);
        var $element = element ? getFirstVisibleElement($e) : this.tip_widget.$anchor;
        if ($element.length === 0) {
            $element = $e.first();
        }
        var consume_event = element
            ? getConsumeEventType($element[0])
            : this.tip_widget.consume_event;
        return {
            $element: $element,
            consume_event: consume_event,
        };
    }
    _click(values, nb, leave) {
        const target = values.$element[0];
        triggerPointerEvent(target, "pointerover", true);
        triggerPointerEvent(target, "pointerenter", false);
        triggerPointerEvent(target, "pointermove", true);
        for (let i = 1; i <= (nb || 1); i++) {
            triggerPointerEvent(target, "pointerdown", true);
            triggerPointerEvent(target, "pointerup", true);
            triggerPointerEvent(target, "click", true, { detail: i });
            if (i % 2 === 0) {
                triggerPointerEvent(target, "dblclick", true);
            }
        }
        if (leave !== false) {
            triggerPointerEvent(target, "pointerout", true);
            triggerPointerEvent(target, "pointerleave", false);
        }
    }
    _text(values, text) {
        this._click(values);

        text = text || "Test";
        if (values.consume_event === "input") {
            values.$element
                .trigger({ type: "keydown", key: text[text.length - 1] })
                .val(text)
                .trigger({ type: "keyup", key: text[text.length - 1] });
            values.$element[0].dispatchEvent(
                new InputEvent("input", {
                    bubbles: true,
                })
            );
        } else if (values.$element.is("select")) {
            var $options = values.$element.find("option");
            $options.prop("selected", false).removeProp("selected");
            var $selectedOption = $options.filter(function () {
                return $(this).val() === text;
            });
            if ($selectedOption.length === 0) {
                $selectedOption = $options.filter(function () {
                    return $(this).text().trim() === text;
                });
            }
            const regex = /option\s+([0-9]+)/;
            if ($selectedOption.length === 0 && regex.test(text)) {
                // Extract position as 1-based, as the nth selectors.
                const position = parseInt(regex.exec(text)[1]);
                $selectedOption = $options.eq(position - 1); // eq is 0-based.
            }
            $selectedOption.prop("selected", true);
            this._click(values);
            // For situations where an `oninput` is defined.
            values.$element.trigger("input");
        } else {
            values.$element.focusIn();
            values.$element.trigger($.Event("keydown", { key: "_" }));
            values.$element.text(text).trigger("input");
            values.$element.focusInEnd();
            values.$element.trigger($.Event("keyup", { key: "_" }));
        }
        values.$element[0].dispatchEvent(new Event("change", { bubbles: true, cancelable: false }));
    }
    _text_blur(values, text) {
        this._text(values, text);
        values.$element.trigger("focusout");
        values.$element.trigger("blur");
    }
    _range(values, text) {
        values.$element[0].value = text;
        values.$element[0].dispatchEvent(new Event('change', { bubbles: true, cancelable: false }));
    }
    _calculateCenter($el, selector) {
        const center = $el.offset();
        if (selector && selector.indexOf("iframe") !== -1) {
            const iFrameOffset = $("iframe").offset();
            center.left += iFrameOffset.left;
            center.top += iFrameOffset.top;
        }
        center.left += $el.outerWidth() / 2;
        center.top += $el.outerHeight() / 2;
        return center;
    }
    _drag_and_drop_jquery(values, to) {
        var $to;
        const elementCenter = this._calculateCenter(values.$element);
        if (to) {
            $to = getJQueryElementFromSelector(to);
        } else {
            $to = $(document.body);
        }

        values.$element.trigger($.Event("mouseenter"));
        // Make the web_studio tour test happy. My guess is that 50%+ of the length of the dragged element
        // must be situated to the right of the $to element.
        values.$element.trigger(
            $.Event("mousedown", {
                which: 1,
                pageX: elementCenter.left + 1,
                pageY: elementCenter.top,
            })
        );
        // Some tests depends on elements present only when the element to drag
        // start to move while some other tests break while moving.
        if (!$to.length) {
            values.$element.trigger(
                $.Event("mousemove", {
                    which: 1,
                    pageX: elementCenter.left + 1,
                    pageY: elementCenter.top,
                })
            );
            $to = getJQueryElementFromSelector(to);
        }

        let toCenter = this._calculateCenter($to, to);
        values.$element.trigger(
            $.Event("mousemove", { which: 1, pageX: toCenter.left, pageY: toCenter.top })
        );
        // Recalculate the center as the mousemove might have made the element bigger.
        toCenter = this._calculateCenter($to, to);
        values.$element.trigger(
            $.Event("mouseup", { which: 1, pageX: toCenter.left, pageY: toCenter.top })
        );
    }
    /**
     * ! This function is a reduced version of "drag" in web/static/tests/helpers/utils.js
     * TODO: Unify utils for tests and tours since they're doing the exact same thing
     * @param {HTMLElement} source
     * @param {HTMLElement} target
     */
    _drag_and_drop(source, target) {
        const sourceRect = source.getBoundingClientRect();
        const sourcePosition = {
            clientX: sourceRect.x + sourceRect.width / 2,
            clientY: sourceRect.y + sourceRect.height / 2,
        };

        const targetRect = target.getBoundingClientRect();
        const targetPosition = {
            clientX: targetRect.x + targetRect.width / 2,
            clientY: targetRect.y + targetRect.height / 2,
        };

        triggerPointerEvent(source, "pointerdown", true, sourcePosition);
        triggerPointerEvent(source, "pointermove", true, targetPosition);

        for (const parent of getDifferentParents(source, target)) {
            triggerPointerEvent(parent, "pointerenter", false, targetPosition);
        }

        triggerPointerEvent(target, "pointerup", true, targetPosition);
    }
    _keydown(values, keyCodes) {
        while (keyCodes.length) {
            const eventOptions = {};
            const keyCode = keyCodes.shift();
            let insertedText = null;
            if (isNaN(keyCode)) {
                eventOptions.key = keyCode;
            } else {
                const code = parseInt(keyCode, 10);
                if (
                    code === 32 || // spacebar
                    (code > 47 && code < 58) || // number keys
                    (code > 64 && code < 91) || // letter keys
                    (code > 95 && code < 112) || // numpad keys
                    (code > 185 && code < 193) || // ;=,-./` (in order)
                    (code > 218 && code < 223) // [\]' (in order))
                ) {
                    insertedText = String.fromCharCode(code);
                }
            }
            values.$element.trigger(Object.assign({ type: "keydown" }, eventOptions));
            if (insertedText) {
                values.$element[0].ownerDocument.execCommand("insertText", 0, insertedText);
            }
            values.$element.trigger(Object.assign({ type: "keyup" }, eventOptions));
        }
    }
}

=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
export const stepUtils = {
    _getHelpMessage(functionName, ...args) {
        return `Generated by function tour utils ${functionName}(${args.join(", ")})`;
    },

    addDebugHelp(helpMessage, step) {
        if (typeof step.debugHelp === "string") {
            step.debugHelp = step.debugHelp + "\n" + helpMessage;
        } else {
            step.debugHelp = helpMessage;
        }
        return step;
    },

    showAppsMenuItem() {
        return {
            isActive: ["auto", "community", "desktop"],
            trigger: ".o_navbar_apps_menu button:enabled",
            tooltipPosition: "bottom",
            run: "click",
        };
    },

    toggleHomeMenu() {
        return [
            {
                isActive: [".o_main_navbar .o_menu_toggle"],
                trigger: ".o_main_navbar .o_menu_toggle",
                content: _t("Click the top left corner to navigate across apps."),
                tooltipPosition: "bottom",
                run: "click",
            },
            {
                isActive: ["mobile"],
                trigger: ".o_sidebar_topbar a.btn-primary",
                tooltipPosition: "right",
                run: "click",
            },
        ];
    },

    autoExpandMoreButtons(isActiveMobile = false) {
        const isActive = ["auto"];
        if (isActiveMobile) {
            isActive.push("mobile");
        }
        return {
            isActive,
            content: `autoExpandMoreButtons`,
            trigger: ".o-form-buttonbox",
            run() {
                const more = hoot.queryFirst(".o-form-buttonbox .o_button_more");
                if (more) {
                    hoot.click(more);
                }
            },
        };
    },

    goToAppSteps(dataMenuXmlid, description) {
        return [
            this.showAppsMenuItem(),
            {
                isActive: ["community"],
                trigger: `.o_app[data-menu-xmlid="${dataMenuXmlid}"]`,
                content: description,
                tooltipPosition: "right",
                run: "click",
            },
            {
                isActive: ["enterprise"],
                trigger: `.o_app[data-menu-xmlid="${dataMenuXmlid}"]`,
                content: description,
                tooltipPosition: "bottom",
                run: "click",
            },
        ].map((step) =>
            this.addDebugHelp(this._getHelpMessage("goToApp", dataMenuXmlid, description), step)
        );
    },

    statusbarButtonsSteps(innerTextButton, description, trigger) {
        const steps = [];
        if (trigger) {
            steps.push({
                isActive: ["auto", "mobile"],
                trigger,
            });
        }
        steps.push(
            {
                isActive: ["auto", "mobile"],
                trigger: ".o_cp_action_menus",
                run: (actions) => {
                    const node = hoot.queryFirst(".o_cp_action_menus .fa-cog");
                    if (node) {
                        hoot.click(node);
                    }
                },
            },
            {
                trigger: `.o_statusbar_buttons button:enabled:contains('${innerTextButton}'), .dropdown-item button:enabled:contains('${innerTextButton}')`,
                content: description,
                tooltipPosition: "bottom",
                run: "click",
            }
        );
        return steps.map((step) =>
            this.addDebugHelp(
                this._getHelpMessage("statusbarButtonsSteps", innerTextButton, description),
                step
            )
        );
    },

    mobileKanbanSearchMany2X(modalTitle, valueSearched) {
        return [
            {
                isActive: ["mobile"],
                trigger: `.modal:not(.o_inactive_modal) .o_control_panel_navigation .btn .fa-search`,
                tooltipPosition: "bottom",
                run: "click",
            },
            {
                isActive: ["mobile"],
                trigger: ".o_searchview_input",
                tooltipPosition: "bottom",
                run: `edit ${valueSearched}`,
            },
            {
                isActive: ["mobile"],
                trigger: ".dropdown-menu.o_searchview_autocomplete",
            },
            {
                isActive: ["mobile"],
                trigger: ".o_searchview_input",
                tooltipPosition: "bottom",
                run: "press Enter",
            },
            {
                isActive: ["mobile"],
                trigger: `.o_kanban_record:contains('${valueSearched}')`,
                tooltipPosition: "bottom",
                run: "click",
            },
        ].map((step) =>
            this.addDebugHelp(
                this._getHelpMessage("mobileKanbanSearchMany2X", modalTitle, valueSearched),
                step
            )
        );
    },
    /**
     * Utility steps to save a form and wait for the save to complete
     */
    saveForm() {
        return [
            {
                isActive: ["auto"],
                content: "save form",
                trigger: ".o_form_button_save:enabled",
                run: "click",
            },
            {
                isActive: ["auto"],
                content: "wait for save completion",
                trigger: ".o_form_readonly, .o_form_saved",
            },
        ];
    },
    /**
     * Utility steps to cancel a form creation or edition.
     *
     * Supports creation/edition from either a form or a list view (so checks
     * for both states).
     */
    discardForm() {
        return [
            {
                isActive: ["auto"],
                content: "discard the form",
                trigger: ".o_form_button_cancel",
                run: "click",
            },
            {
                isActive: ["auto"],
                content: "wait for cancellation to complete",
                trigger:
                    ".o_view_controller.o_list_view, .o_form_view > div > div > .o_form_readonly, .o_form_view > div > div > .o_form_saved",
            },
        ];
    },

    waitIframeIsReady() {
        return {
            content: "Wait until the iframe is ready",
            trigger: `iframe[is-ready=true]:iframe html`,
        };
    },

    goToUrl(url) {
        return {
            isActive: ["auto"],
            content: `Navigate to ${url}`,
            trigger: "body",
            run: `goToUrl ${url}`,
        };
    },
};

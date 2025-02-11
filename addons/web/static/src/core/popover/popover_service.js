import { markRaw } from "@odoo/owl";
<<<<<<< HEAD
import { registry } from "../registry";
import { POPOVER_SYMBOL, PopoverController } from "./popover_controller";
=======
import { Popover } from "@web/core/popover/popover";
import { registry } from "@web/core/registry";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

/**
 * @typedef {{
 *   animation?: Boolean;
 *   arrow?: Boolean;
 *   closeOnClickAway?: boolean | (target: HTMLElement) => boolean;
 *   closeOnEscape?: boolean;
 *   env?: object;
 *   fixedPosition?: boolean;
 *   onClose?: () => void;
 *   onPositioned?: import("@web/core/position/position_hook").UsePositionOptions["onPositioned"];
 *   popoverClass?: string;
 *   popoverRole?: string;
 *   position?: import("@web/core/position/position_hook").UsePositionOptions["position"];
 *   ref?: Function;
 * }} PopoverServiceAddOptions
 *
 * @typedef {ReturnType<popoverService["start"]>["add"]} PopoverServiceAddFunction
 */

export const popoverService = {
    dependencies: ["overlay"],
    start(_, { overlay }) {
        /**
         * Signals the manager to add a popover.
         *
         * @param {HTMLElement} target
         * @param {typeof import("@odoo/owl").Component} component
         * @param {object} [props]
         * @param {PopoverServiceAddOptions} [options]
         * @returns {() => void}
         */
        const add = (target, component, props = {}, options = {}) => {
            const closeOnClickAway =
                typeof options.closeOnClickAway === "function"
                    ? options.closeOnClickAway
                    : () => options.closeOnClickAway ?? true;
            const remove = overlay.add(
                Popover,
                {
                    target,
                    close: () => remove(),
                    closeOnClickAway,
<<<<<<< HEAD
                    subPopovers: options[POPOVER_SYMBOL],
=======
                    closeOnEscape: options.closeOnEscape,
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
                    component,
                    componentProps: markRaw(props),
                    ref: options.ref,
                    class: options.popoverClass,
                    animation: options.animation,
                    arrow: options.arrow,
                    role: options.popoverRole,
                    position: options.position,
                    onPositioned: options.onPositioned,
                    fixedPosition: options.fixedPosition,
                    holdOnHover: options.holdOnHover,
                    setActiveElement: options.setActiveElement ?? true,
                },
                {
                    env: options.env,
                    onRemove: options.onClose,
                    rootId: target.getRootNode()?.host?.id,
                }
            );

            return remove;
        };

        return { add };
    },
};

registry.category("services").add("popover", popoverService);

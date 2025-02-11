import { onPatched, onWillRender, useEffect, useRef } from "@odoo/owl";
import { usePopover } from "@web/core/popover/popover_hook";
import { useService } from "@web/core/utils/hooks";

/**
 * @param {import("./datetimepicker_service").DateTimePickerHookParams} hookParams
 */
export function useDateTimePicker(hookParams) {
    const datetimePicker = useService("datetime_picker");
    if (typeof hookParams.target === "string") {
        const target = useRef(hookParams.target);
        Object.defineProperty(hookParams, "target", {
            get() {
                return target.el;
            },
        });
    }
    const inputRefs = [useRef("start-date"), useRef("end-date")];
<<<<<<< HEAD
=======
    const createPopover = hookParams.createPopover ?? usePopover;
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    const getInputs = () => inputRefs.map((ref) => ref?.el);
    const { computeBasePickerProps, state, open, focusIfNeeded, enable } = datetimePicker.create(
        hookParams,
        getInputs,
<<<<<<< HEAD
        usePopover
=======
        createPopover
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    );
    onWillRender(computeBasePickerProps);
    useEffect(enable, getInputs);

    // Note: this `onPatched` callback must be called after the `useEffect` since
    // the effect may change input values that will be selected by the patch callback.
    onPatched(focusIfNeeded);
    return { state, open };
}

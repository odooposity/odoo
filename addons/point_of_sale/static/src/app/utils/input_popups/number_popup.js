import { _t } from "@web/core/l10n/translation";
import { useBus, useService } from "@web/core/utils/hooks";
import { Component, useState } from "@odoo/owl";
import { Dialog } from "@web/core/dialog/dialog";
import { Numpad, buttonsType } from "@point_of_sale/app/generic_components/numpad/numpad";

export class NumberPopup extends Component {
    static template = "point_of_sale.NumberPopup";
    static components = { Numpad, Dialog };
    static props = {
        title: { type: String, optional: true },
        subtitle: { type: String, optional: true },
        buttons: { type: buttonsType, optional: true },
        startingValue: { type: [Number, String], optional: true },
        feedback: { type: Function, optional: true },
        formatDisplayedValue: { type: Function, optional: true },
        placeholder: { type: String, optional: true },
        isValid: { type: Function, optional: true },
        confirmButtonLabel: { type: String, optional: true },
        getPayload: Function,
        close: Function,
    };
    static defaultProps = {
        title: _t("Confirm?"),
        startingValue: "",
        isValid: () => true,
        formatDisplayedValue: (x) => x,
        feedback: () => false,
    };

    setup() {
        this.numberBuffer = useService("number_buffer");
        this.numberBuffer.use({
            triggerAtEnter: () => this.confirm(),
            triggerAtEscape: () => this.cancel(),
        });
<<<<<<< HEAD
        this.inputRef = useRef("input");
        onMounted(this.onMounted);
    }
    onMounted() {
        if (this.inputRef.el) {
            this.inputRef.el.focus();
        }
    }
    get decimalSeparator() {
        return this.env.services.localization.decimalPoint;
    }
    getNumpadButtons() {
        const { isPassword, cheap } = this.props;
        return [
            { value: "1" },
            { value: "2" },
            { value: "3" },
            ...(!isPassword ? [{ value: cheap ? "+1" : "+10" }] : []),
            { value: "4" },
            { value: "5" },
            { value: "6" },
            ...(!isPassword ? [{ value: cheap ? "+2" : "+20" }] : []),
            { value: "7" },
            { value: "8" },
            { value: "9" },
            ...(!isPassword ? [{ value: "-" }] : []),
            { value: "Delete", text: "C" },
            { value: "0" },
            ...(!isPassword ? [{ value: this.decimalSeparator }] : []),
            { value: "Backspace", text: "⌫" },
        ];
    }
    get inputBuffer() {
        if (this.state.buffer === null) {
            return "";
        }
        if (this.props.isPassword) {
            return this.state.buffer.replace(/./g, "•");
        } else {
            return this.state.buffer;
        }
    }
    confirm(event) {
        if (this.numberBuffer.get() || this.state.payload) {
            super.confirm();
        }
=======
        this.state = useState({
            buffer: this.props.startingValue,
        });
        useBus(this.numberBuffer, "buffer-update", ({ detail: value }) => {
            this.state.buffer = value;
        });
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    }
    confirm() {
        this.props.getPayload(this.state.buffer);
        this.props.close();
    }

    cancel() {
        this.props.close();
    }
}

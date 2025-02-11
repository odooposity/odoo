import { _t } from "@web/core/l10n/translation";
import { registry } from "@web/core/registry";
import { PrinterService } from "@point_of_sale/app/printer/printer_service";
import { AlertDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
import { ask } from "@point_of_sale/app/store/make_awaitable_dialog";

export const posPrinterService = {
<<<<<<< HEAD
    dependencies: ["hardware_proxy", "popup", "renderer", "pos"],
    start(env, { hardware_proxy, popup, renderer, pos }) {
        return new PosPrinterService(env, { hardware_proxy, popup, renderer, pos });
=======
    dependencies: ["hardware_proxy", "dialog", "renderer"],
    start(env, { hardware_proxy, dialog, renderer }) {
        return new PosPrinterService(env, { hardware_proxy, dialog, renderer });
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    },
};
export class PosPrinterService extends PrinterService {
    constructor(...args) {
        super(...args);
        this.setup(...args);
    }
<<<<<<< HEAD
    setup(env, { hardware_proxy, popup, renderer, pos }) {
=======
    setup(env, { hardware_proxy, dialog, renderer }) {
        super.setup(...arguments);
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        this.renderer = renderer;
        this.hardware_proxy = hardware_proxy;
        this.dialog = dialog;
        this.device = hardware_proxy.printer;
        this.pos = pos;
    }
    printWeb() {
        try {
            return super.printWeb(...arguments);
        } catch {
            this.dialog.add(AlertDialog, {
                title: _t("Printing is not supported on some browsers"),
                body: _t("It is possible to print your tickets by making use of an IoT Box."),
            });
            return false;
        }
    }
    async printHtml() {
        this.setPrinter(this.hardware_proxy.printer);
        try {
            return await super.printHtml(...arguments);
        } catch (error) {
            return this.printHtmlAlternative(error, ...arguments);
        }
    }
<<<<<<< HEAD
    async printHtmlAlternative(error, ...args) {
        if (error.body === undefined) {
            console.error("An unknown error occured in printHtml:", error);
        }
        const { confirmed } = await this.popup.add(ConfirmPopup, {
            title: error.title || _t("Printing error"),
            body: (error.body ?? "") + _t("Do you want to print using the web printer? "),
        });
        if (!confirmed) {
            return false;
=======
    async printHtmlAlternative(error, ...printArguments) {
        const confirmed = await ask(this.dialog, {
            title: error.title || _t("Printing error"),
            body: error.body + _t("Do you want to print using the web printer? "),
        });
        if (confirmed) {
            // We want to call the _printWeb when the dialog is fully gone
            // from the screen which happens after the next animation frame.
            await new Promise(requestAnimationFrame);
            this.printWeb(...printArguments);
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        }
        // We want to call the _printWeb when the popup is fully gone
        // from the screen which happens after the next animation frame.
        await new Promise(requestAnimationFrame);
        return this.printWeb(...args);
    }
}

registry.category("services").add("printer", posPrinterService);

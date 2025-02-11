<<<<<<< HEAD
/** @odoo-module **/
import { loadAllImages } from "@point_of_sale/utils";
=======
import { loadAllImages } from "@point_of_sale/utils";

import { Reactive } from "@web/core/utils/reactive";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

export const printerService = {
    dependencies: ["renderer"],
    start(env, { renderer }) {
        return new PrinterService(env, { renderer });
    },
};
export class PrinterService extends Reactive {
    constructor(...args) {
        super(...args);
        this.setup(...args);
    }
    setup(env, { renderer }) {
        this.renderer = renderer;
        this.device = null;
        this.state = { isPrinting: false };
    }
    setPrinter(newDevice) {
        this.device = newDevice;
    }
    printWeb(el) {
        this.renderer.whenMounted({ el, callback: window.print });
        return true;
    }
    async printHtml(el, { webPrintFallback = false } = {}) {
        if (!this.device) {
            return webPrintFallback && this.printWeb(el);
        }
        const printResult = await this.device.printReceipt(el);
        if (printResult.successful) {
            return true;
        }
        throw {
            title: printResult.message.title || "Error",
            body: printResult.message.body,
            errorCode: printResult.errorCode,
        };
    }
    async print(component, props, options) {
        this.state.isPrinting = true;
        const el = await this.renderer.toHtml(component, props);
<<<<<<< HEAD
        // Load all images before printing
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        try {
            await loadAllImages(el);
        } catch (e) {
            console.error("Images could not be loaded correctly", e);
        }
<<<<<<< HEAD
        return await this.printHtml(el, options);
=======
        try {
            return await this.printHtml(el, options);
        } finally {
            this.state.isPrinting = false;
        }
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    }
    is = () => Boolean(this.device?.printReceipt);
}

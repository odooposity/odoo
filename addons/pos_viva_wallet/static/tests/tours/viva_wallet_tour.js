/** @odoo-module */

<<<<<<< HEAD
import * as ProductScreen from "@point_of_sale/../tests/tours/helpers/ProductScreenTourMethods";
import * as PaymentScreenPos from "@point_of_sale/../tests/tours/helpers/PaymentScreenTourMethods";
import * as PaymentScreenViva from "@pos_viva_wallet/../tests/tours/helpers/PaymentScreenVivaTourMethods";
=======
import * as ProductScreen from "@point_of_sale/../tests/tours/utils/product_screen_util";
import * as PaymentScreenPos from "@point_of_sale/../tests/tours/utils/payment_screen_util";
import * as PaymentScreenViva from "@pos_viva_wallet/../tests/tours/utils/payment_screen_viva_util";
import * as Chrome from "@point_of_sale/../tests/tours/utils/chrome_util";
import * as Dialog from "@point_of_sale/../tests/tours/utils/dialog_util";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
const PaymentScreen = { ...PaymentScreenPos, ...PaymentScreenViva };
import { registry } from "@web/core/registry";

registry.category("web_tour.tours").add("VivaWalletTour", {
<<<<<<< HEAD
    test: true,
    url: "/pos/ui",
    steps: () =>
        [
            ProductScreen.confirmOpeningPopup(),
=======
    steps: () =>
        [
            Chrome.startPoS(),
            Dialog.confirm("Open Register"),
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            ProductScreen.addOrderline("Desk Pad", "1", "5.1", "5.1"),
            ProductScreen.clickPayButton(),
            PaymentScreen.isShown(),
            PaymentScreen.clickPaymentMethod("Viva"),
<<<<<<< HEAD
            PaymentScreen.send_payment_request(),
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            PaymentScreen.isShown(),
        ].flat(),
});

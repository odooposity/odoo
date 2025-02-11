<<<<<<< HEAD
/** @odoo-module **/

=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
import { SIZES, utils } from "@web/core/ui/ui_service";
import { patch } from "@web/core/utils/patch";

patch(utils, {
    isSmall(ui = {}) {
        return (ui.size || utils.getSize()) <= SIZES.MD;
    },
});

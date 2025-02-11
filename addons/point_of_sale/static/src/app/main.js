import { Loader } from "@point_of_sale/app/loader/loader";
import { getTemplate } from "@web/core/templates";
import { mount, reactive, whenReady } from "@odoo/owl";
import { _t } from "@web/core/l10n/translation";
import { hasTouch } from "@web/core/browser/feature_detection";
import { localization } from "@web/core/l10n/localization";
import { user } from "@web/core/user";
import { session } from "@web/session";
<<<<<<< HEAD
import { RPCError } from "@web/core/network/rpc_service";
=======
import { mountComponent } from "@web/env";
import { Chrome } from "@point_of_sale/app/pos_app";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

const loader = reactive({ isShown: true });
whenReady(() => {
    // Show loader as soon as the page is ready, do not wait for services to be started
    // as some services load data over RPC and this is why we want to show a loader.
    mount(Loader, document.body, { getTemplate, translateFn: _t, props: { loader } });
});
// The following is mostly a copy of startWebclient but without any of the legacy stuff
(async function startPosApp() {
    odoo.info = {
        db: session.db,
        server_version: session.server_version,
        server_version_info: session.server_version_info,
        isEnterprise: session.server_version_info.slice(-1)[0] === "e",
    };
<<<<<<< HEAD

    // setup environment
    const env = makeEnv();
    await startServices(env);

    // handle loading PoS error
    if (env.services.pos instanceof Error) {
        let message = _t("An error occurred while loading the Point of Sale: \n");
        if (env.services.pos instanceof RPCError) {
            message += env.services.pos.data.message;
        } else {
            message += env.services.pos.message;
        }
        window.alert(message);
        window.location = "/web#action=point_of_sale.action_client_pos_menu";
    }

    // start application
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    await whenReady();
    const app = await mountComponent(Chrome, document.body, {
        name: "Odoo Point of Sale",
        props: { disableLoader: () => (loader.isShown = false) },
    });
    window.addEventListener("beforeunload", function (event) {
        if (!navigator.onLine) {
            var confirmationMessage = _t(
                "You are currently offline. Reloading the page may cause you to lose unsaved data."
            );
            event.returnValue = confirmationMessage;
            return confirmationMessage;
        }
    });
    const classList = document.body.classList;
    if (localization.direction === "rtl") {
        classList.add("o_rtl");
    }
    if (user.userId === 1) {
        classList.add("o_is_superuser");
    }
    if (app.env.debug) {
        classList.add("o_debug");
    }
    if (hasTouch()) {
        classList.add("o_touch_device");
        classList.add("o_mobile_overscroll");
        document.documentElement.classList.add("o_mobile_overscroll");
    }
})();

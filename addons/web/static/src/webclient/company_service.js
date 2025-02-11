import { browser } from "@web/core/browser/browser";
import { rpcBus } from "@web/core/network/rpc";
import { registry } from "@web/core/registry";
import { session } from "@web/session";
import { UPDATE_METHODS } from "@web/core/orm_service";
import { cookie } from "@web/core/browser/cookie";
import { user } from "@web/core/user";
import { router } from "@web/core/browser/router";

const CIDS_SEPARATOR = "-";

function parseCompanyIds(cids, separator = CIDS_SEPARATOR) {
    if (typeof cids === "string") {
        return cids.split(separator).map(Number);
    } else if (typeof cids === "number") {
        return [cids];
    }
    return [];
}

function computeActiveCompanyIds(cids) {
    const { user_companies } = session;
    let activeCompanyIds = cids || [];
    const availableCompaniesFromSession = user_companies.allowed_companies;
    const notAllowedCompanies = activeCompanyIds.filter(
        (id) => !(id in availableCompaniesFromSession)
    );

    if (!activeCompanyIds.length || notAllowedCompanies.length) {
        activeCompanyIds = [user_companies.current_company];
    }
    return activeCompanyIds;
}

function getCompanyIds() {
    let cids;
    // backward compatibility, in old urls cid was still used.
    // deprecated as of saas-17.3
    const state = router.current;
    if ("cids" in state) {
        // backward compatibility s.t. old urls (still using "," as separator) keep working
        // deprecated as of 17.0
        if (typeof state.cids === "string" && !state.cids.includes(CIDS_SEPARATOR)) {
            cids = parseCompanyIds(state.cids, ",");
        } else {
            cids = parseCompanyIds(state.cids);
        }
    } else if (cookie.get("cids")) {
        cids = parseCompanyIds(cookie.get("cids"));
    }
    return cids || [];
}

const errorHandlerRegistry = registry.category("error_handlers");
function accessErrorHandler(env, error, originalError) {
    const router = env.services.router;
    const hash = router.current.hash;
    if (!hash._company_switching) {
        return false;
    }
    if (originalError?.exceptionName === "odoo.exceptions.AccessError") {
        const { model, id, view_type } = hash;
        if (!model || !id || view_type !== "form") {
            return false;
        }
        router.pushState({ view_type: undefined });

        browser.setTimeout(() => {
            // Force the WebClient to reload the state contained in the hash.
            env.bus.trigger("ROUTE_CHANGE");
        });
        if (error.event) {
            error.event.preventDefault();
        }
        return true;
    }
    return false;
}

export const companyService = {
<<<<<<< HEAD
    dependencies: ["user", "router", "action"],
    start(env, { user, router, action }) {
        // Push an error handler in the registry. It needs to be before "rpcErrorHandler", which
        // has a sequence of 97. The default sequence of registry is 50.
        errorHandlerRegistry.add("accessErrorHandlerCompanies", accessErrorHandler);

=======
    dependencies: ["action", "orm"],
    start(env, { action, orm }) {
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        const allowedCompanies = session.user_companies.allowed_companies;
        const disallowedAncestorCompanies = session.user_companies.disallowed_ancestor_companies;
        const allowedCompaniesWithAncestors = {
            ...allowedCompanies,
            ...disallowedAncestorCompanies,
        };
        const activeCompanyIds = computeActiveCompanyIds(getCompanyIds());

        // update browser data
        cookie.set("cids", activeCompanyIds.join(CIDS_SEPARATOR));
        user.updateContext({ allowed_company_ids: activeCompanyIds });

        // reload the page if changes are being done to `res.company`
        rpcBus.addEventListener("RPC:RESPONSE", (ev) => {
            const { data, error } = ev.detail;
            const { model, method } = data.params;
            if (!error && model === "res.company" && UPDATE_METHODS.includes(method)) {
                if (!browser.localStorage.getItem("running_tour")) {
                    action.doAction("reload_context");
                }
            }
        });

        return {
            allowedCompanies,
            allowedCompaniesWithAncestors,
            disallowedAncestorCompanies,

            get activeCompanyIds() {
                return activeCompanyIds.slice();
            },

            get currentCompany() {
                return allowedCompanies[activeCompanyIds[0]];
            },

            getCompany(companyId) {
                return allowedCompaniesWithAncestors[companyId];
            },

            /**
             * @param {Array<>} companyIds - List of companies to log into
             * @param {boolean} [includeChildCompanies=true] - If true, will also
             * log into each child of each companyIds (default is true)
             */
            async setCompanies(companyIds, includeChildCompanies = true) {
                const newCompanyIds = companyIds.length ? companyIds : [activeCompanyIds[0]];

                function addCompanies(companyIds) {
                    for (const companyId of companyIds) {
                        if (!newCompanyIds.includes(companyId)) {
                            newCompanyIds.push(companyId);
                            addCompanies(allowedCompanies[companyId].child_ids);
                        }
                    }
                }

                if (includeChildCompanies) {
                    addCompanies(
                        companyIds.flatMap((companyId) => allowedCompanies[companyId].child_ids)
                    );
                }

<<<<<<< HEAD
                const cidsHash = formatCompanyIds(newCompanyIds, CIDS_HASH_SEPARATOR);
                router.pushState({ cids: cidsHash }, { lock: true });
                router.pushState({ _company_switching: true });
                cookie.set("cids", formatCompanyIds(newCompanyIds));
                browser.setTimeout(() => browser.location.reload()); // history.pushState is a little async
=======
                cookie.set("cids", newCompanyIds.join(CIDS_SEPARATOR));
                user.updateContext({ allowed_company_ids: newCompanyIds });

                const controller = action.currentController;
                const state = {};
                const options = { reload: true };
                if (controller?.props.resId && controller?.props.resModel) {
                    const hasReadRights = await user.checkAccessRight(
                        controller.props.resModel,
                        "read",
                        controller.props.resId
                    );

                    if (!hasReadRights) {
                        options.replace = true;
                        state.actionStack = router.current.actionStack.slice(0, -1);
                    }
                }

                router.pushState(state, options);
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            },
        };
    },
};

registry.category("services").add("company", companyService);

import { _t } from "@web/core/l10n/translation";
<<<<<<< HEAD
import { registry } from "@web/core/registry";
import { debounce } from "@web/core/utils/timing";
import { useService, useAutofocus } from "@web/core/utils/hooks";
import { useAsyncLockedMethod } from "@point_of_sale/app/utils/hooks";
import { session } from "@web/session";

=======
import { useService } from "@web/core/utils/hooks";
import { Dialog } from "@web/core/dialog/dialog";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
import { PartnerLine } from "@point_of_sale/app/screens/partner_list/partner_line/partner_line";
import { usePos } from "@point_of_sale/app/store/pos_hook";
import { Input } from "@point_of_sale/app/generic_components/inputs/input/input";
import { Component, useState } from "@odoo/owl";
import { useHotkey } from "@web/core/hotkeys/hotkey_hook";
import { unaccent } from "@web/core/utils/strings";

export class PartnerList extends Component {
    static components = { PartnerLine, Dialog, Input };
    static template = "point_of_sale.PartnerList";
    static props = {
        partner: {
            optional: true,
            type: [{ value: null }, Object],
        },
        getPayload: { type: Function },
        close: { type: Function },
    };

    setup() {
        this.pos = usePos();
        this.ui = useState(useService("ui"));
<<<<<<< HEAD
        this.orm = useService("orm");
        this.notification = useService("pos_notification");
        this.searchWordInputRef = useRef("search-word-input-partner");
        useAutofocus({refName: 'search-word-input-partner'});
=======
        this.notification = useService("notification");
        this.dialog = useService("dialog");
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

        this.state = useState({
            query: null,
            previousQuery: "",
            currentOffset: 0,
        });
        useHotkey("enter", () => this.onEnter());
    }
    async editPartner(p = false) {
        const partner = await this.pos.editPartner(p);
        if (partner) {
            this.clickPartner(partner);
        }
    }
    async onEnter() {
        if (!this.state.query) {
            return;
        }
        const result = await this.searchPartner();
        if (result.length > 0) {
            this.notification.add(
                _t('%s customer(s) found for "%s".', result.length, this.state.query),
                3000
            );
        } else {
            this.notification.add(_t('No more customer found for "%s".', this.state.query));
        }
    }

    goToOrders(partner) {
        this.props.close();
        const partnerHasActiveOrders = this.pos
            .get_open_orders()
            .some((order) => order.partner?.id === partner.id);
        const stateOverride = {
            search: {
                fieldName: "PARTNER",
                searchTerm: partner.name,
            },
            filter: partnerHasActiveOrders ? "" : "SYNCED",
        };
        this.pos.showScreen("TicketScreen", { stateOverride });
    }

    confirm() {
        this.props.resolve({ confirmed: true, payload: this.state.selectedPartner });
        this.pos.closeTempScreen();
    }
    getPartners() {
        const searchWord = unaccent((this.state.query || "").trim(), false).toLowerCase();
        const partners = this.pos.models["res.partner"].getAll();
        const exactMatches = partners.filter((partner) => partner.exactMatch(searchWord));

        if (exactMatches.length > 0) {
            return exactMatches;
        }

        const availablePartners = searchWord
            ? partners.filter((p) =>
                  unaccent(p.searchString, false).toLowerCase().includes(searchWord)
              )
            : partners
                  .slice(0, 1000)
                  .toSorted((a, b) =>
                      this.props.partner?.id === a.id
                          ? -1
                          : this.props.partner?.id === b.id
                          ? 1
                          : (a.name || "").localeCompare(b.name || "")
                  );

        return availablePartners;
    }
    get isBalanceDisplayed() {
        return false;
    }
    clickPartner(partner) {
<<<<<<< HEAD
        if (this.state.selectedPartner && this.state.selectedPartner.id === partner.id) {
            this.state.selectedPartner = null;
        } else {
            this.state.selectedPartner = partner;
        }
        this.confirm();
    }
    editPartner(partner) {
        this.state.editModeProps.partner = partner;
        this.activateEditMode();
    }
    createPartner() {
        // initialize the edit screen with default details about country, state, and lang
        const { country_id, state_id } = this.pos.company;
        this.state.editModeProps.partner = { country_id, state_id, lang: session.user_context.lang };
        this.activateEditMode();
    }
    async saveChanges(processedChanges) {
        const partnerId = await this.orm.call("res.partner", "create_from_ui", [processedChanges]);
        await this.pos._loadPartners([partnerId]);
        this.state.selectedPartner = this.pos.db.get_partner_by_id(partnerId);
        this.confirm();
=======
        this.props.getPayload(partner);
        this.props.close();
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    }
    async searchPartner() {
        if (this.state.previousQuery != this.state.query) {
            this.state.currentOffset = 0;
        }
        const partner = await this.getNewPartners();

        if (this.state.previousQuery == this.state.query) {
            this.state.currentOffset += partner.length;
        } else {
            this.state.previousQuery = this.state.query;
            this.state.currentOffset = partner.length;
        }
        return partner;
    }
    async getNewPartners() {
        let domain = [];
        const limit = 30;
        if (this.state.query) {
            const search_fields = [
                "name",
                "parent_name",
                "phone_mobile_search",
                "email",
                "barcode",
                "street",
                "zip",
                "city",
                "state_id",
                "country_id",
                "vat",
            ];
            domain = [
<<<<<<< HEAD
                ...Array(search_fields.length - 1).fill('|'),
                ...search_fields.map(field => [field, "ilike", this.state.query + "%"])
=======
                ...Array(search_fields.length - 1).fill("|"),
                ...search_fields.map((field) => [field, "ilike", this.state.query + "%"]),
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            ];
        }

        const result = await this.pos.data.searchRead("res.partner", domain, [], {
            limit: limit,
            offset: this.state.currentOffset,
        });

        return result;
    }
}

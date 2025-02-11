import { Dialog } from "@web/core/dialog/dialog";
import { Component, useState, onMounted } from "@odoo/owl";
import { usePos } from "../pos_hook";
import { ProductCard } from "@point_of_sale/app/generic_components/product_card/product_card";
import { floatIsZero } from "@web/core/utils/numbers";

export class ComboConfiguratorPopup extends Component {
    static template = "point_of_sale.ComboConfiguratorPopup";
    static components = { ProductCard, Dialog };
    static props = {
        product: Object,
        getPayload: Function,
        close: Function,
    };

    setup() {
        this.pos = usePos();
        this.state = useState({
<<<<<<< HEAD
            combo: Object.fromEntries(this.props.product.combo_ids.map((elem) => [elem, 0])),
            // configuration: id of combo_line -> ProductConfiguratorPopup payload
            configuration: {},
        });
    }

=======
            combo: Object.fromEntries(this.props.product.combo_ids.map((combo) => [combo.id, 0])),
            // configuration: id of combo_item -> ProductConfiguratorPopup payload
            configuration: {},
        });

        onMounted(() => {
            this.autoSelectSingleChoices();
            if (!this.hasMultipleChoices()) {
                this.confirm();
            }
        });
    }

    shouldShowCombo(combo) {
        return (
            combo.combo_item_ids.length > 0 &&
            (combo.combo_item_ids.length > 1 || combo.combo_item_ids[0].product_id.isConfigurable())
        );
    }

    autoSelectSingleChoices() {
        this.props.product.combo_ids.forEach((combo) => {
            if (
                combo.combo_item_ids.length === 1 &&
                !combo.combo_item_ids[0].product_id.isConfigurable()
            ) {
                this.state.combo[combo.id] = combo.combo_item_ids[0].id;
            }
        });
    }

    hasMultipleChoices() {
        return this.props.product.combo_ids.some((combo) => this.shouldShowCombo(combo));
    }

>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    areAllCombosSelected() {
        return Object.values(this.state.combo).every((x) => Boolean(x));
    }

    formattedComboPrice(comboItem) {
        const extra_price = comboItem.extra_price;
        if (floatIsZero(extra_price)) {
            return "";
        } else {
            const product = comboItem.product_id;
            const price = this.pos.getProductPrice(product, extra_price);
            return this.env.utils.formatCurrency(price);
        }
    }

    getSelectedComboItems() {
        return Object.values(this.state.combo)
            .filter((x) => x) // we only keep the non-zero values
            .map((x) => {
<<<<<<< HEAD
                const combo_line = this.pos.db.combo_line_by_id[x];
                return {
                    ...combo_line,
                    configuration: this.state.configuration[combo_line.id],
=======
                const combo_item_id = this.pos.models["product.combo.item"].get(x);
                return {
                    combo_item_id: combo_item_id,
                    configuration: this.state.configuration[combo_item_id.id],
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
                };
            });
    }

<<<<<<< HEAD
    async onClickProduct({ product, combo_line }, ev) {
        if (product.isConfigurable()) {
            const { confirmed, payload } = await product.openConfigurator({ initQuantity: 1 });
            if (confirmed) {
                this.state.configuration[combo_line.id] = payload;
            } else {
                // Do not select the product if configuration popup is cancelled.
                this.state.combo[combo_line.combo_id[0]] = 0;
            }
        }
=======
    async onClickProduct({ product, combo_item }, ev) {
        if (product.isConfigurable() && product.product_template_variant_value_ids.length === 0) {
            const payload = await this.pos.openConfigurator(product);
            if (payload) {
                this.state.configuration[combo_item.id] = payload;
            } else {
                // Do not select the product if configuration popup is cancelled.
                this.state.combo[combo_item.combo_id.id] = 0;
            }
        }
    }

    isArchived(comboItem) {
        const product = comboItem.product_id;
        const archivedCombinations = product._archived_combinations;
        if (!archivedCombinations) {
            return false;
        }

        const productCombination = product.product_template_variant_value_ids.map(
            (ptav) => ptav.id
        );
        return archivedCombinations.some(
            (archivedCombination) =>
                JSON.stringify(archivedCombination) === JSON.stringify(productCombination)
        );
    }

    isArchivedProductSelected() {
        return this.getSelectedComboItems().some((comboItem) =>
            this.isArchived(comboItem.combo_item_id)
        );
    }

    confirm() {
        this.props.getPayload(this.getSelectedComboItems());
        this.props.close();
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    }
}

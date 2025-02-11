import { Component } from "@odoo/owl";

export class ProductCard extends Component {
    static template = "point_of_sale.ProductCard";
    static props = {
        class: { String, optional: true },
        name: String,
        product: Object,
        productId: Number | String,
        price: String,
<<<<<<< HEAD
=======
        color: { type: [Number, undefined], optional: true },
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        imageUrl: [String, Boolean],
        productInfo: { Boolean, optional: true },
        onClick: { type: Function, optional: true },
        onProductInfoClick: { type: Function, optional: true },
        showWarning: { type: Boolean, optional: true },
        productCartQty: { type: [Number, undefined], optional: true },
    };
    static defaultProps = {
        onClick: () => {},
        onProductInfoClick: () => {},
        class: "",
        showWarning: false,
    };
}

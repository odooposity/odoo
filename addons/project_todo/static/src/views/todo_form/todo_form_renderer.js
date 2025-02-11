<<<<<<< HEAD
/* @odoo-module */

import { FormRenderer } from "@web/views/form/form_renderer";

import { TodoFormStatusBarButtons } from "./todo_form_status_bar_button";

export class TodoFormRenderer extends FormRenderer {
    static components = {
        ...FormRenderer.components,
        StatusBarButtons: TodoFormStatusBarButtons,
    };
=======
import { FormRendererWithHtmlExpander } from "@resource/views/form_with_html_expander/form_renderer_with_html_expander";
import { useBus } from "@web/core/utils/hooks";

export class TodoFormRenderer extends FormRendererWithHtmlExpander {
    setup() {
        super.setup();
        useBus(this.env.bus, "TODO:TOGGLE_CHATTER", this.toggleChatter);
        this.sizeToExpandHTMLField = 1;
    }

    toggleChatter(ev) {
        this.sizeToExpandHTMLField = ev.detail.displayChatter ? 6 : 1;
    }

    _canExpandHTMLField(size) {
        return size >= this.sizeToExpandHTMLField;
    }
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}

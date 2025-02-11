/** @odoo-module */

import { _t } from "@web/core/l10n/translation";
<<<<<<< HEAD
import { useService } from '@web/core/utils/hooks';
import { createElement } from "@web/core/utils/xml";
import { FormController } from '@web/views/form/form_controller';
import { useViewCompiler } from '@web/views/view_compiler';
import { ProjectSharingChatterCompiler } from './project_sharing_form_compiler';
import { ChatterContainer } from '../../components/chatter/chatter_container';
=======
import { FormController } from '@web/views/form/form_controller';
import { useService } from '@web/core/utils/hooks';
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
import { useExternalListener } from "@odoo/owl";

export class ProjectSharingFormController extends FormController {
    static components = {
        ...FormController.components,
    };

    setup() {
        super.setup();
<<<<<<< HEAD
        this.uiService = useService('ui');
        this.notification = useService('notification');
        const { xmlDoc } = this.archInfo;
        const template = createElement('t');
        const xmlDocChatter = xmlDoc.querySelector("div.oe_chatter");
        if (xmlDocChatter && xmlDocChatter.parentNode.nodeName === "form") {
            template.appendChild(xmlDocChatter.cloneNode(true));
        }
        const mailTemplates = useViewCompiler(ProjectSharingChatterCompiler, { Mail: template });
        this.mailTemplate = mailTemplates.Mail;
=======
        this.notification = useService('notification');
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        useExternalListener(window, "paste", this.onGlobalPaste, { capture: true });
        useExternalListener(window, "drop", this.onGlobalDrop, { capture: true });
    }

    get actionMenuItems() {
        return {};
    }

    get translateAlert() {
        return null;
    }
<<<<<<< HEAD

    onGlobalPaste(ev) {
        if (ev.target.closest('.o_field_widget[name="description"]')) {
            ev.preventDefault();
            const items = ev.clipboardData.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1 && !this.model.root.resId) {
                    this.notification.add(
                        _t("Save the task to be able to paste images in description"),
                        { type: 'warning' },
                    )
                    ev.stopImmediatePropagation();
                    return;
                }
            }
        }
    }

    onGlobalDrop(ev) {
        if (ev.target.closest('.o_field_widget[name="description"]')) {
            ev.preventDefault();
            if(ev.dataTransfer.files.length > 0 && !this.model.root.resId){
                this.notification.add(
                    _t("Save the task to be able to drag images in description"),
                    { type: 'warning' },
                )
                ev.stopImmediatePropagation();
            }
        }
    }
}
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

    onGlobalPaste(ev) {
        if (ev.target.closest('.o_field_widget[name="description"]')) {
            ev.preventDefault();
            const items = ev.clipboardData.items;
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1 && !this.model.root.resId) {
                    this.notification.add(
                        _t("Save the task to be able to paste images in description"),
                        { type: 'warning' },
                    )
                    ev.stopImmediatePropagation();
                    return;
                }
            }
        }
    }

    onGlobalDrop(ev) {
        if (ev.target.closest('.o_field_widget[name="description"]')) {
            ev.preventDefault();
            if(ev.dataTransfer.files.length > 0 && !this.model.root.resId){
                this.notification.add(
                    _t("Save the task to be able to drag images in description"),
                    { type: 'warning' },
                )
                ev.stopImmediatePropagation();
            }
        }
    }
}

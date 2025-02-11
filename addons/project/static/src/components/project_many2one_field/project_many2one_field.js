/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { registry } from '@web/core/registry';
import { Many2OneField, many2OneField } from '@web/views/fields/many2one/many2one_field';

export class ProjectMany2OneField extends Many2OneField {
    static template = "project.ProjectMany2OneField";
    get Many2XAutocompleteProps() {
        const props = super.Many2XAutocompleteProps;
        const { record } = this.props;
        if (!record.data.project_id && !record._isRequired("project_id")) {
            props.placeholder = _t("Private");
        }
        return props;
    }
<<<<<<< HEAD

    get displayName() {
        const { project_id, display_in_project } = this.props.record.data;
        return project_id && !display_in_project ? "" : super.displayName;
    }

    updateRecord(value) {
        const { display_in_project } = this.props.record.data;
        if (!display_in_project && value) {
            this.props.record.update({ "display_in_project": true });
        }
        super.updateRecord(value);
    }
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}

export const projectMany2OneField = {
    ...many2OneField,
    component: ProjectMany2OneField,
    fieldDependencies: [
        ...(many2OneField.fieldDependencies || []),
    ],
};

registry.category("fields").add("project", projectMany2OneField);

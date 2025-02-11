/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog";
<<<<<<< HEAD
import { ListRenderer } from '@web/views/list/list_renderer';

import { useEffect } from "@odoo/owl";

export class SubtaskListRenderer extends ListRenderer {
    setup() {
        super.setup();
        this.dialog = useService("dialog");
        useEffect(
            (editedRecord) => this.focusName(editedRecord),
            () => [this.editedRecord]
        );
    }

    focusName(editedRecord) {
        if (editedRecord?.isNew && !editedRecord.dirty) {
            const col = this.state.columns.find((c) => c.name === "name");
            this.focusCell(col);
        }
    }
=======
import { NotebookTaskListRenderer } from '../notebook_task_one2many_field/notebook_task_list_renderer';
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

export class SubtaskListRenderer extends NotebookTaskListRenderer {
    async onDeleteRecord(record) {
        this.dialog.add(ConfirmationDialog, {
            body: _t("Are you sure you want to delete this record?"),
            confirm: () => super.onDeleteRecord(record),
            cancel: () => {},
        });
    }
}

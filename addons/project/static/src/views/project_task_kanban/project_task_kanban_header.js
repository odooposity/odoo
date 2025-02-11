/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { user } from "@web/core/user";
import { useService } from '@web/core/utils/hooks';
import { KanbanHeader } from "@web/views/kanban/kanban_header";
import { onWillStart } from "@odoo/owl";

export class ProjectTaskKanbanHeader extends KanbanHeader {
    setup() {
        super.setup();
        this.action = useService('action');

        this.isProjectManager = false;
        onWillStart(this.onWillStart);
    }

    async onWillStart() {
        if (this.props.list.isGroupedByStage) { // no need to check it if not grouped by stage
<<<<<<< HEAD
            this.isProjectManager = await this.userService.hasGroup('project.group_project_manager');
=======
            this.isProjectManager = await user.hasGroup('project.group_project_manager');
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        }
    }

    async deleteGroup() {
        if (this.group.groupByField.name === 'stage_id') {
            const action = await this.group.model.orm.call(
                this.group.groupByField.relation,
                'unlink_wizard',
                [this.group.value],
                { context: this.group.context },
            );
            this.action.doAction(action);
            return;
        }
        super.deleteGroup();
    }

    canEditGroup(group) {
        return super.canEditGroup(group) && (!this.props.list.isGroupedByStage || this.isProjectManager);
    }

    canDeleteGroup(group) {
        return super.canDeleteGroup(group) && (!this.props.list.isGroupedByStage || this.isProjectManager);
    }

    /**
     * @override
     */
    _getEmptyGroupLabel(fieldName) {
        if (fieldName === "project_id") {
            return _t("🔒 Private");
        } else if (fieldName === "user_ids") {
            return _t("👤 Unassigned");
        } else {
            return super._getEmptyGroupLabel(fieldName);
        }
    }
}

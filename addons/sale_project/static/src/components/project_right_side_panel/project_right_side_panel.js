import { patch } from "@web/core/utils/patch";
<<<<<<< HEAD
import { formatFloat, formatFloatTime } from "@web/views/fields/formatters";
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
import { ProjectRightSidePanel } from '@project/components/project_right_side_panel/project_right_side_panel';

patch(ProjectRightSidePanel.prototype, {

    get panelVisible() {
        return super.panelVisible || this.state.data.show_sale_items;
    },
});

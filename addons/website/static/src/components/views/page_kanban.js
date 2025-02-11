/** @odoo-module **/

<<<<<<< HEAD
import {PageControllerMixin, PageRendererMixin} from "./page_views_mixin";
=======
import {PageControllerMixin} from "./page_views_mixin";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
import {PageSearchModel} from "./page_search_model";
import {registry} from '@web/core/registry';
import {kanbanView} from "@web/views/kanban/kanban_view";
import {CheckboxItem} from "@web/core/dropdown/checkbox_item";

export class PageKanbanController extends PageControllerMixin(kanbanView.Controller) {
    static template = "website.PageKanbanView";
    static components = {
        ...kanbanView.Controller.components,
        CheckboxItem,
    };
    /**
     * @override
     */
    async createRecord() {
        return this.createWebsiteContent();
    }
}
<<<<<<< HEAD
PageKanbanController.template = 'website.PageKanbanView';
PageKanbanController.components = {
    ...kanbanView.Controller.components,
    CheckboxItem,
};

// TODO master: remove `PageRendererMixin` extend, props override and template
export class PageKanbanRenderer extends PageRendererMixin(kanbanView.Renderer) {}
PageKanbanRenderer.props = [
    ...kanbanView.Renderer.props,
    "activeWebsite",
];
PageKanbanRenderer.template = 'website.PageKanbanRenderer';
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

export const PageKanbanView = {
    ...kanbanView,
    Controller: PageKanbanController,
    SearchModel: PageSearchModel,
};

registry.category("views").add("website_pages_kanban", PageKanbanView);

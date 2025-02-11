import { registry } from "@web/core/registry";
import { formView } from "@web/views/form/form_view";
import { TodoFormController } from "./todo_form_controller";
<<<<<<< HEAD
=======
import { TodoFormControlPanel } from "./todo_form_control_panel";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
import { TodoFormRenderer } from "./todo_form_renderer";

export const todoFormView = {
    ...formView,
    Controller: TodoFormController,
<<<<<<< HEAD
=======
    ControlPanel: TodoFormControlPanel,
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    Renderer: TodoFormRenderer,
};

registry.category("views").add("todo_form", todoFormView);

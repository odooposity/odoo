# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, models


class PurchaseOrderLine(models.Model):
    _inherit = 'purchase.order.line'

    @api.depends('product_id', 'order_id.partner_id', 'order_id.project_id')
    def _compute_analytic_distribution(self):
        super()._compute_analytic_distribution()
        ProjectProject = self.env['project.project']
        for line in self:
<<<<<<< HEAD
            if line._context.get('project_id'):
                line.analytic_distribution = {line.env['project.project'].browse(line._context['project_id']).analytic_account_id.id: 100}
=======
            if line.display_type or line.analytic_distribution:
                continue
            project_id = line._context.get('project_id')
            project = ProjectProject.browse(project_id) if project_id else line.order_id.project_id
            if project:
                line.analytic_distribution = project._get_analytic_distribution()
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

    @api.model_create_multi
    def create(self, vals_list):
        lines = super().create(vals_list)
        lines._recompute_recordset(fnames=['analytic_distribution'])
        return lines

<<<<<<< HEAD
from odoo import models
=======
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8


class MrpProduction(models.Model):
    _inherit = 'mrp.production'

<<<<<<< HEAD
    def _compute_analytic_distribution(self):
        project_id = self.env.context.get('project_id')
        if not project_id:
            super()._compute_analytic_distribution()
        else:
            analytic_account = self.env['project.project'].browse(project_id).analytic_account_id
            for production in self:
                production.analytic_distribution = production.analytic_distribution or {analytic_account.id: 100}
=======
    project_id = fields.Many2one('project.project', compute='_compute_project_id', readonly=False, store=True)

    @api.depends('bom_id')
    def _compute_project_id(self):
        if not self.env.context.get('from_project_action'):
            for production in self:
                production.project_id = production.bom_id.project_id
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

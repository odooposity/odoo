<<<<<<< HEAD
from odoo import models
=======
from odoo import api, models
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8


class HrExpense(models.Model):
    _inherit = 'hr.expense'

    def _compute_analytic_distribution(self):
        project_id = self.env.context.get('project_id')
        if not project_id:
            super()._compute_analytic_distribution()
        else:
<<<<<<< HEAD
            analytic_account = self.env['project.project'].browse(project_id).analytic_account_id
            for expense in self:
                expense.analytic_distribution = expense.analytic_distribution or {analytic_account.id: 100}
=======
            analytic_distribution = self.env['project.project'].browse(project_id)._get_analytic_distribution()
            for expense in self:
                expense.analytic_distribution = expense.analytic_distribution or analytic_distribution

    @api.model_create_multi
    def create(self, vals_list):
        project_id = self.env.context.get('project_id')
        if project_id:
            analytic_distribution = self.env['project.project'].browse(project_id)._get_analytic_distribution()
            if analytic_distribution:
                for vals in vals_list:
                    vals['analytic_distribution'] = vals.get('analytic_distribution', analytic_distribution)
        return super().create(vals_list)
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

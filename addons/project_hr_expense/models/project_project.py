# Part of Odoo. See LICENSE file for full copyright and licensing details.

import json

from odoo import models
from odoo.osv import expression
<<<<<<< HEAD
from odoo.tools import SQL
from collections import defaultdict
=======

>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

class Project(models.Model):
    _inherit = 'project.project'

<<<<<<< HEAD
    expenses_count = fields.Integer('# Expenses', compute='_compute_expenses_count', groups='hr_expense.group_hr_expense_team_approver')

    @api.depends('analytic_account_id')
    def _compute_expenses_count(self):
        if not self.analytic_account_id:
            self.expenses_count = 0
            return
        query = self.env['hr.expense']._search([])
        query.add_where(
            SQL(
                "%s && %s",
                [str(account_id) for account_id in self.analytic_account_id.ids],
                self.env['hr.expense']._query_analytic_accounts(),
            )
        )

        query_string, query_param = query.select(
            r"""DISTINCT id, (regexp_matches(jsonb_object_keys(hr_expense.analytic_distribution), '\d+', 'g'))[1]::int as account_id"""
        )
        query_string = f"""
            SELECT account_id, count(id) FROM
            ({query_string}) distribution
            GROUP BY account_id
        """
        self._cr.execute(query_string, query_param)
        data = {res['account_id']: res['count'] for res in self._cr.dictfetchall()}
        for project in self:
            project.expenses_count = data.get(project.analytic_account_id.id, 0)

=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    # ----------------------------
    #  Actions
    # ----------------------------

    def _get_expense_action(self, domain=None, expense_ids=None):
        if not domain and not expense_ids:
            return {}
        action = self.env["ir.actions.actions"]._for_xml_id("hr_expense.hr_expense_actions_all")
        action.update({
<<<<<<< HEAD
            'display_name': _('Expenses'),
            'views': [[False, 'tree'], [False, 'form'], [False, 'kanban'], [False, 'graph'], [False, 'pivot']],
=======
            'display_name': self.env._('Expenses'),
            'views': [[False, 'list'], [False, 'form'], [False, 'kanban'], [False, 'graph'], [False, 'pivot']],
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            'context': {'project_id': self.id},
            'domain': domain or [('id', 'in', expense_ids)],
        })
        if not self.env.context.get('from_embedded_action') and len(expense_ids) == 1:
            action["views"] = [[False, 'form']]
            action["res_id"] = expense_ids[0]
        return action

    def _get_add_purchase_items_domain(self):
        return expression.AND([
            super()._get_add_purchase_items_domain(),
            [('expense_id', '=', False)],
        ])

    def action_profitability_items(self, section_name, domain=None, res_id=False):
        if section_name == 'expenses':
            return self._get_expense_action(domain, [res_id] if res_id else [])
        return super().action_profitability_items(section_name, domain, res_id)

    def action_open_project_expenses(self):
        self.ensure_one()
        return self._get_expense_action(domain=[('analytic_distribution', 'in', self.account_id.ids)])

    # ----------------------------
    #  Project Update
    # ----------------------------

    def _get_profitability_labels(self):
        labels = super()._get_profitability_labels()
        labels['expenses'] = self.env._('Expenses')
        return labels

    def _get_profitability_sequence_per_invoice_type(self):
        sequence_per_invoice_type = super()._get_profitability_sequence_per_invoice_type()
        sequence_per_invoice_type['expenses'] = 13
        return sequence_per_invoice_type

    def _get_already_included_profitability_invoice_line_ids(self):
        # As both purchase orders and expenses (paid by employee) create vendor bills,
        # we need to make sure they are exclusive in the profitability report.
        move_line_ids = super()._get_already_included_profitability_invoice_line_ids()
        query = self.env['account.move.line'].sudo()._search([
            ('move_id.expense_sheet_id', '!=', False),
            ('id', 'not in', move_line_ids),
        ])
        return move_line_ids + list(query)

    def _get_expenses_profitability_items(self, with_action=True):
        if not self.account_id:
            return {}
<<<<<<< HEAD
        can_see_expense = with_action and self.user_has_groups('hr_expense.group_hr_expense_team_approver')
        query = self.env['hr.expense']._search([('state', 'in', ['approved', 'done'])])
        query.add_where(
            SQL(
                "%s && %s",
                [str(self.analytic_account_id.id)],
                self.env['hr.expense']._query_analytic_accounts(),
            )
        )
        query_string, query_param = query.select('currency_id', 'array_agg(id) as ids', 'SUM(untaxed_amount_currency) as untaxed_amount')
        query_string = f"{query_string} GROUP BY currency_id"
        self._cr.execute(query_string, query_param)
        expenses_read_group = [expense for expense in self._cr.dictfetchall()]
        if not expenses_read_group or not expenses_read_group[0].get('ids'):
=======
        can_see_expense = with_action and self.env.user.has_group('hr_expense.group_hr_expense_team_approver')

        expenses_read_group = self.env['hr.expense']._read_group(
            [
                ('sheet_id.state', 'in', ['post', 'done']),
                ('analytic_distribution', 'in', self.account_id.ids),
            ],
            groupby=['currency_id'],
            aggregates=['id:array_agg', 'untaxed_amount_currency:sum'],
        )
        if not expenses_read_group:
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            return {}
        expense_ids = []
        amount_billed = 0.0
        for currency, ids, untaxed_amount_currency_sum in expenses_read_group:
            if can_see_expense:
                expense_ids.extend(ids)
            amount_billed += currency._convert(
                from_amount=untaxed_amount_currency_sum,
                to_currency=self.currency_id,
                company=self.company_id,
            )

        section_id = 'expenses'
        expense_profitability_items = {
            'costs': {'id': section_id, 'sequence': self._get_profitability_sequence_per_invoice_type()[section_id], 'billed': -amount_billed, 'to_bill': 0.0},
        }
        if can_see_expense:
            args = [section_id, [('id', 'in', expense_ids)]]
            if len(expense_ids) == 1:
                args.append(expense_ids[0])
            action = {'name': 'action_profitability_items', 'type': 'object', 'args': json.dumps(args)}
            expense_profitability_items['costs']['action'] = action
        return expense_profitability_items

    def _get_profitability_aal_domain(self):
        return expression.AND([
            super()._get_profitability_aal_domain(),
            ['|', ('move_line_id', '=', False), ('move_line_id.expense_id', '=', False)],
        ])

    def _get_profitability_items(self, with_action=True):
        profitability_data = super()._get_profitability_items(with_action)
        expenses_data = self._get_expenses_profitability_items(with_action)
        if expenses_data:
            if 'revenues' in expenses_data:
                revenues = profitability_data['revenues']
                revenues['data'].append(expenses_data['revenues'])
                revenues['total'] = {k: revenues['total'][k] + expenses_data['revenues'][k] for k in ['invoiced', 'to_invoice']}
            costs = profitability_data['costs']
            costs['data'].append(expenses_data['costs'])
            costs['total'] = {k: costs['total'][k] + expenses_data['costs'][k] for k in ['billed', 'to_bill']}
        return profitability_data

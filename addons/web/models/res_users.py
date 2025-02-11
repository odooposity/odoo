# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, models
from odoo.osv import expression


class ResUsers(models.Model):
    _inherit = "res.users"

    @api.model
<<<<<<< HEAD
    def _name_search(self, name, domain=None, operator='ilike', limit=None, order=None):
        user_query = super()._name_search(name, domain, operator, limit, order)
        if limit is None:
            return user_query
        user_ids = list(user_query)
        if self._uid in user_ids:
            if user_ids.index(self._uid) != 0:
                user_ids.remove(self._uid)
                user_ids.insert(0, self._uid)
        elif limit and len(user_ids) == limit:
            new_user_ids = super()._name_search(
                name,
                expression.AND([domain or [], [('id', '=', self._uid)]]),
                operator,
                limit=1,
            )
            if new_user_ids:
                user_ids.pop()
                user_ids.insert(0, self._uid)
        return user_ids
=======
    def name_search(self, name='', args=None, operator='ilike', limit=100):
        # if we have a search with a limit, move current user as the first result
        user_list = super().name_search(name, args, operator, limit)
        uid = self._uid
        # index 0 is correct not Falsy in this case, use None to avoid ignoring it
        if (index := next((i for i, (user_id, _name) in enumerate(user_list) if user_id == uid), None)) is not None:
            # move found user first
            user_tuple = user_list.pop(index)
            user_list.insert(0, user_tuple)
        elif limit is not None and len(user_list) == limit:
            # user not found and limit reached, try to find the user again
            if user_tuple := super().name_search(name, expression.AND([args or [], [('id', '=', uid)]]), operator, limit=1):
                user_list = [user_tuple[0], *user_list[:-1]]
        return user_list

    def _on_webclient_bootstrap(self):
        self.ensure_one()
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

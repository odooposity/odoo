# Part of Odoo. See LICENSE file for full copyright and licensing details.

<<<<<<< HEAD
from odoo import http
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
from odoo.osv import expression

from odoo.addons.portal.controllers import mail


class PortalChatter(mail.PortalChatter):

<<<<<<< HEAD
    def _portal_post_filter_params(self):
        fields = super(PortalChatter, self)._portal_post_filter_params()
        fields += ['rating_value', 'rating_feedback']
        return fields

    @http.route()
    def portal_chatter_post(self, res_model, res_id, message, attachment_ids='', attachment_tokens='', **kwargs):
        if kwargs.get('rating_value'):
            kwargs['rating_feedback'] = kwargs.pop('rating_feedback', message)
        return super(PortalChatter, self).portal_chatter_post(res_model, res_id, message, attachment_ids=attachment_ids, attachment_tokens=attachment_tokens, **kwargs)

=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    def _setup_portal_message_fetch_extra_domain(self, data):
        domains = [super()._setup_portal_message_fetch_extra_domain(data)]
        if data.get('rating_value', False) is not False:
            domains.append([('rating_value', '=', float(data['rating_value']))])
        return expression.AND(domains)

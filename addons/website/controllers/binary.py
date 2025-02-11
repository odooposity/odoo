from odoo import http
from odoo.http import request
from odoo.addons.web.controllers.binary import Binary


class WebsiteBinary(Binary):
    @http.route([
<<<<<<< HEAD
        '/web/assets/<int:website_id>/<unique>/<string:filename>'], type='http', auth="public")
=======
        '/web/assets/<int:website_id>/<unique>/<string:filename>'], type='http', auth="public", readonly=True)
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    def content_assets_website(self, website_id=None, **kwargs):
        if not request.env['website'].browse(website_id).exists():
            raise request.not_found()
        return super().content_assets(**kwargs, assets_params={'website_id': website_id})

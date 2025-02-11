from odoo import http
from odoo.http import request
from odoo.addons.web.controllers.binary import Binary


class PointOfSaleBinary(Binary):
    @http.route([
        '/web/image/pos.config/<id>/<string:field>',
        '/web/image/pos.config/<id>/<string:field>/<int:width>x<int:height>'], type='http', auth="public")
    def point_of_sale_content_image(self, field='raw', **kwargs):
<<<<<<< HEAD
        if request.env.user._is_public() and field == 'iface_customer_facing_display_background_image_1920':
=======
        if request.env.user._is_public() and field == 'customer_display_bg_img':
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            request.env = request.env(su=True)
        return super().content_image(field=field, model='pos.config', **kwargs)

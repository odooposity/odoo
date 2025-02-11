# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

<<<<<<< HEAD
from odoo import api, fields, models
=======
from odoo import _, api, fields, models
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8


class ProductTemplate(models.Model):
    _inherit = 'product.template'

    service_tracking = fields.Selection(selection_add=[
        ('course', 'Course Access'),
    ], ondelete={'course': 'set default'})

<<<<<<< HEAD
    def _detailed_type_mapping(self):
        type_mapping = super(ProductTemplate, self)._detailed_type_mapping()
        type_mapping['course'] = 'service'
        return type_mapping
=======
    def _prepare_service_tracking_tooltip(self):
        if self.service_tracking == 'course':
            return _("Grant access to the eLearning course linked to this product.")
        return super()._prepare_service_tracking_tooltip()
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

    @api.model
    def _get_product_types_allow_zero_price(self):
        return super()._get_product_types_allow_zero_price() + ["course"]
<<<<<<< HEAD
=======

    def _service_tracking_blacklist(self):
        return super()._service_tracking_blacklist() + ['course']
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

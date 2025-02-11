# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import _, api, fields, models


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    group_uom = fields.Boolean("Units of Measure", implied_group='uom.group_uom')
    group_product_variant = fields.Boolean("Variants", implied_group='product.group_product_variant')
    module_loyalty = fields.Boolean("Promotions, Coupons, Gift Card & Loyalty Program")
    group_stock_packaging = fields.Boolean('Product Packagings',
        implied_group='product.group_stock_packaging')
    group_product_pricelist = fields.Boolean("Pricelists",
        implied_group='product.group_product_pricelist')
    product_weight_in_lbs = fields.Selection([
        ('0', 'Kilograms'),
        ('1', 'Pounds'),
    ], 'Weight unit of measure', config_parameter='product.weight_in_lbs', default='0')
    product_volume_volume_in_cubic_feet = fields.Selection([
        ('0', 'Cubic Meters'),
        ('1', 'Cubic Feet'),
    ], 'Volume unit of measure', config_parameter='product.volume_in_cubic_feet', default='0')

    @api.onchange('group_product_pricelist')
    def _onchange_group_sale_pricelist(self):
        if not self.group_product_pricelist:
<<<<<<< HEAD
            if self.group_sale_pricelist:
                self.group_sale_pricelist = False
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            active_pricelist = self.env['product.pricelist'].sudo().search_count(
                [('active', '=', True)], limit=1
            )
            if active_pricelist:
                return {
                    'warning': {
                    'message': _("You are deactivating the pricelist feature. "
                                 "Every active pricelist will be archived.")
                }}

    def set_values(self):
        had_group_pl = self.default_get(['group_product_pricelist'])['group_product_pricelist']
        had_discount_group = self.default_get(['group_discount_per_so_line'])['group_discount_per_so_line']
        super().set_values()
<<<<<<< HEAD
        if had_discount_group and not self.group_discount_per_so_line:
            pl = self.env['product.pricelist'].search([('discount_policy', '=', 'without_discount')])
            pl.write({'discount_policy': 'with_discount'})
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

        if self.group_product_pricelist and not had_group_pl:
            self.env['res.company']._activate_or_create_pricelists()
        elif not self.group_product_pricelist:
            self.env['product.pricelist'].sudo().search([]).action_archive()

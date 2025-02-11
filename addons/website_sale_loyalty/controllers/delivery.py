# Part of Odoo. See LICENSE file for full copyright and licensing details.

<<<<<<< HEAD
from odoo.addons.website_sale.controllers.delivery import WebsiteSaleDelivery
from odoo.addons.payment import utils as payment_utils
from odoo.http import request
=======
from functools import partial
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

from odoo.http import request

from odoo.addons.payment import utils as payment_utils
from odoo.addons.website_sale.controllers.delivery import Delivery

<<<<<<< HEAD
    def _update_website_sale_delivery_return(self, order, **post):
        result = super()._update_website_sale_delivery_return(order, **post)
        if order:
            free_shipping_lines = order._get_free_shipping_lines()
            Monetary = request.env['ir.qweb.field.monetary']
            currency = order.currency_id
            if free_shipping_lines:
                amount_free_shipping = sum(free_shipping_lines.mapped('price_subtotal'))
                result.update({
                    'new_amount_delivery_discount': Monetary.value_to_html(
                        amount_free_shipping, {'display_currency': currency}
                    ),
                    'new_amount_order_discounted': Monetary.value_to_html(order.reward_amount - amount_free_shipping, {'display_currency': currency}),
                    'delivery_discount_minor_amount': payment_utils.to_minor_currency_units(
                        amount_free_shipping, currency
                    ),
                })
            else:
                result.update({'new_amount_order_discounted': Monetary.value_to_html(
                    order.reward_amount, {'display_currency': currency}
                )})
        return result
=======

class WebsiteSaleLoyaltyDelivery(Delivery):

    def _order_summary_values(self, order, **post):
        to_html = partial(
            request.env['ir.qweb.field.monetary'].value_to_html,
            options={'display_currency': order.currency_id},
        )
        res = super()._order_summary_values(order, **post)
        free_shipping_lines = order._get_free_shipping_lines()
        if free_shipping_lines:
            shipping_discount = sum(free_shipping_lines.mapped('price_subtotal'))
            res['amount_delivery_discounted'] = to_html(shipping_discount)
            res['delivery_discount_minor_amount'] = payment_utils.to_minor_currency_units(
                shipping_discount, order.currency_id
            )
        res['discount_reward_amounts'] = [
            to_html(sum(lines.mapped('price_subtotal')))
            for reward, lines in order.order_line.grouped('reward_id').items()
            if reward.reward_type == 'discount'
        ]
        return res
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

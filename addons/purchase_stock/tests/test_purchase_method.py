# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
from odoo.tests.common import TransactionCase, tagged

@tagged('-at_install', 'post_install')
class TestPurchaseMethod(TransactionCase):
    def test_product_purchase_method_with_receive_as_default_purchase_method(self):
        self.env['ir.default'].set('product.template', 'purchase_method', 'receive', company_id=True)

        product = self.env['product.product'].create({'name': 'product_test'})
        self.assertEqual(product.purchase_method, 'receive')

<<<<<<< HEAD
        product.write({'detailed_type': 'service'})
        self.assertEqual(product.purchase_method, 'purchase')

        product.write({'detailed_type': 'product'})
=======
        product.write({'type': 'service'})
        self.assertEqual(product.purchase_method, 'purchase')

        product.write({'type': 'consu'})
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        self.assertEqual(product.purchase_method, 'receive')

    def test_product_purchase_method_with_purchase_as_default_purchase_method(self):
        self.env['ir.default'].set('product.template', 'purchase_method', 'purchase', company_id=True)

        product = self.env['product.product'].create({'name': 'product_test'})
        self.assertEqual(product.purchase_method, 'purchase')

<<<<<<< HEAD
        product.write({'detailed_type': 'service'})
        self.assertEqual(product.purchase_method, 'purchase')

        product.write({'detailed_type': 'product'})
=======
        product.write({'type': 'service'})
        self.assertEqual(product.purchase_method, 'purchase')

        product.write({'type': 'consu'})
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        self.assertEqual(product.purchase_method, 'purchase')

from odoo.tests import tagged
from odoo.addons.website.tests.test_configurator import TestConfiguratorCommon


@tagged('post_install', '-at_install')
class TestAutomaticEditor(TestConfiguratorCommon):

    def test_skip_website_configurator(self):
        # If not enabled (like in demo data), landing on res.config will try
        # to disable module_sale_quotation_builder and raise an issue
        group_order_template = self.env.ref('sale_management.group_sale_order_template', raise_if_not_found=False)
        if group_order_template:
            self.env.ref('base.group_user').write({"implied_ids": [(4, group_order_template.id)]})
<<<<<<< HEAD
        self.start_tour('/web#action=website.action_website_configuration', 'skip_website_configurator', login='admin')
=======
        self.start_tour('/odoo/action-website.action_website_configuration', 'skip_website_configurator', login='admin')
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

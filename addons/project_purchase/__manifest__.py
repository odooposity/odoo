# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': "Project Purchase",
    'version': '1.0',
    'summary': "Monitor purchase in project",
    'category': 'Services/Project',
    'depends': ['purchase', 'project_account'],
    'demo': [
        'data/project_purchase_demo.xml',
    ],
<<<<<<< HEAD
=======
    'data': [
        'views/project_project.xml',
        'views/purchase_order.xml',
    ],
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    'assets': {
        'web.assets_backend': [
            'project_purchase/static/src/product_catalog/kanban_record.js',
        ],
    },
    'auto_install': True,
    'license': 'LGPL-3',
}

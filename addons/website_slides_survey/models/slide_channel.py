# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

<<<<<<< HEAD
from odoo import fields, models
from odoo.osv import expression
=======
from markupsafe import Markup
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

from odoo import api, fields, models, _
from odoo.osv import expression

class ChannelUsersRelation(models.Model):
    _inherit = 'slide.channel.partner'

    nbr_certification = fields.Integer(related='channel_id.nbr_certification')
    survey_certification_success = fields.Boolean('Certified')

class Channel(models.Model):
    _inherit = 'slide.channel'

    members_certified_count = fields.Integer('# Certified Attendees', compute='_compute_members_certified_count')
    nbr_certification = fields.Integer("Number of Certifications", compute='_compute_slides_statistics', store=True)

    def _remove_membership(self, partner_ids):
        """Remove the relationship between the user_input and the slide_partner_id.

        Removing the relationship between the user_input from the slide_partner_id allows to keep
        track of the current pool of attempts allowed since the user (last) joined
        the course, as only those will have a slide_partner_id."""
<<<<<<< HEAD
        removed_channel_partner_domain = []
        for channel in self:
            removed_channel_partner_domain = expression.OR([
                removed_channel_partner_domain,
                [('partner_id', 'in', partner_ids), ('channel_id', '=', channel.id)]
            ])
        if removed_channel_partner_domain:
=======
        if self:
            removed_channel_partner_domain = expression.OR([
                [('partner_id', 'in', partner_ids), ('channel_id', '=', channel.id)]
                for channel in self
            ])
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            slide_partners_sudo = self.env['slide.slide.partner'].sudo().search(
                removed_channel_partner_domain)
            slide_partners_sudo.user_input_ids.slide_partner_id = False
        return super()._remove_membership(partner_ids)
<<<<<<< HEAD
=======

    @api.depends('channel_partner_ids')
    def _compute_members_certified_count(self):
        channels_count = self.env['slide.channel.partner'].sudo()._read_group(
            domain=[('channel_id', 'in', self.ids),
                    ('survey_certification_success', '=', True)],
            groupby=['channel_id'],
            aggregates=['__count']
        )
        mapped_data = dict(channels_count)
        for channel in self:
            channel.members_certified_count = mapped_data.get(channel, 0)

    def action_redirect_to_certified_members(self):
        action = self.action_redirect_to_members('certified')
        msg = _('No Attendee passed this course certification yet!')
        action['help'] = Markup('<p class="o_view_nocontent_smiling_face">%s</p>') % msg
        return action
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

# Part of Odoo. See LICENSE file for full copyright and licensing details.

# The currencies supported by Xendit, in ISO 4217 format.
SUPPORTED_CURRENCIES = [
    'IDR',
    'PHP',
]

<<<<<<< HEAD
# The codes of the payment methods to activate when Xendit is activated.
DEFAULT_PAYMENT_METHODS_CODES = [
=======
# To correctly allow lowest decimal place rounding
# https://docs.xendit.co/payment-link/payment-channels
CURRENCY_DECIMALS = {
    'IDR': 0,
    'PHP': 0,
}

# The codes of the payment methods to activate when Xendit is activated.
DEFAULT_PAYMENT_METHOD_CODES = {
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    # Primary payment methods.
    'card',
    'dana',
    'ovo',
    'qris',

    # Brand payment methods.
    'visa',
    'mastercard',
<<<<<<< HEAD
]
=======
}
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

# Mapping of payment code to channel code according to Xendit API
PAYMENT_METHODS_MAPPING = {
    'bank_bca': 'BCA',
    'bank_permata': 'PERMATA',
    'bpi': 'DD_BPI',
    'card': 'CREDIT_CARD',
    'maya': 'PAYMAYA',
}

# Mapping of transaction states to Xendit payment statuses.
PAYMENT_STATUS_MAPPING = {
    'draft': (),
    'pending': ('PENDING'),
<<<<<<< HEAD
    'done': ('SUCCEEDED', 'PAID'),
=======
    'done': ('SUCCEEDED', 'PAID', 'CAPTURED'),
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    'cancel': ('CANCELLED', 'EXPIRED'),
    'error': ('FAILED',)
}

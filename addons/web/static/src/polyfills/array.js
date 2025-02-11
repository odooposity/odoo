<<<<<<< HEAD
=======
// @odoo-module ignore
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
if (!Array.prototype.at) {
    Object.defineProperty(Array.prototype, "at", {
        enumerable: false,
        value: function (index) {
            if (index >= 0) {
                return this[index];
            }
            return this[this.length + index];
        }
    });
}

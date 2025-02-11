import {
    convertCSSColorToRgba,
    convertHslToRgb,
    convertRgbaToCSSColor,
    convertRgbToHsl,
} from "@web/core/utils/colors";
import { uniqueId } from "@web/core/utils/functions";
import { clamp } from "@web/core/utils/numbers";
<<<<<<< HEAD
import { throttleForAnimation, debounce } from "@web/core/utils/timing";
=======
import { debounce, useThrottleForAnimation } from "@web/core/utils/timing";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

import { Component, onMounted, onWillUpdateProps, useExternalListener, useRef } from "@odoo/owl";

export class Colorpicker extends Component {
    static template = "web.Colorpicker";
    static props = {
        document: { type: true, optional: true },
        defaultColor: { type: String, optional: true },
        selectedColor: { type: String, optional: true },
        noTransparency: { type: Boolean, optional: true },
        stopClickPropagation: { type: Boolean, optional: true },
        onColorSelect: { type: Function, optional: true },
        onColorPreview: { type: Function, optional: true },
        onInputEnter: { type: Function, optional: true },
    };
    static defaultProps = {
        document: window.document,
        defaultColor: "#FF0000",
        noTransparency: false,
        stopClickPropagation: false,
        onColorSelect: () => {},
        onColorPreview: () => {},
        onInputEnter: () => {},
    };

    setup() {
<<<<<<< HEAD
        onWillStart(() => {
            this.init();
        });
        onMounted(async () => {
            if (!this.elRef.el) {
                // There is legacy code that can trigger the instantiation of the
                // link tool when one of it's parent component is not in the dom. If
                // that parent element is not in the dom, owl will not return
                // `this.linkComponentWrapperRef.el` because of a check (see
                // `inOwnerDocument`).
                // Todo: this workaround should be removed when the snippet menu is
                // converted to owl.
                await new Promise((resolve) => {
                    const observer = new MutationObserver(() => {
                        if (this.elRef.el) {
                            observer.disconnect();
                            resolve();
                        }
                    });
                    observer.observe(document.body, { childList: true, subtree: true });
                });
            }
            this.el = this.elRef.el;
            this.$el = $(this.el);

            this.$el.on("click", this._onClick.bind(this));
            this.$el.on("keypress", this._onKeypress.bind(this));
            this.$el.on("mousedown", ".o_color_pick_area", this._onMouseDownPicker.bind(this));
            this.$el.on("mousedown", ".o_color_slider", this._onMouseDownSlider.bind(this));
            this.$el.on(
                "mousedown",
                ".o_opacity_slider",
                this._onMouseDownOpacitySlider.bind(this)
            );
            const debouncedOnChangeInputs = debounce(this._onChangeInputs.bind(this), 10, true);
            this.$el.on("change", ".o_color_picker_inputs", debouncedOnChangeInputs);

            this.start();
        });
        onWillUpdateProps((newProps) => {
            if (!this.el) {
                // There is legacy code that can trigger the instantiation of the
                // link tool when one of it's parent component is not in the dom. If
                // that parent element is not in the dom, owl will not return
                // `this.linkComponentWrapperRef.el` because of a check (see
                // `inOwnerDocument`).
                return;
            }
            const newSelectedColor = newProps.selectedColor
                ? newProps.selectedColor
                : newProps.defaultColor;
            this.setSelectedColor(newSelectedColor);
        });
        onWillDestroy(() => {
            this.destroy();
        });
    }

    init() {
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        this.pickerFlag = false;
        this.sliderFlag = false;
        this.opacitySliderFlag = false;
        this.colorComponents = {};
        this.uniqueId = uniqueId("colorpicker");
        this.selectedHexValue = "";

<<<<<<< HEAD
        const defaultCssColor = this.props.selectedColor
            ? this.props.selectedColor
            : this.props.defaultColor;
        const rgba = convertCSSColorToRgba(defaultCssColor);
        if (rgba) {
            this._updateRgba(rgba.red, rgba.green, rgba.blue, rgba.opacity);
        }
=======
        this.debouncedOnChangeInputs = debounce(this.onChangeInputs.bind(this), 10, true);
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

        this.elRef = useRef("el");
        this.colorPickerAreaRef = useRef("colorPickerArea");
        this.colorPickerPointerRef = useRef("colorPickerPointer");
        this.colorSliderRef = useRef("colorSlider");
        this.colorSliderPointerRef = useRef("colorSliderPointer");
        this.opacitySliderRef = useRef("opacitySlider");
        this.opacitySliderPointerRef = useRef("opacitySliderPointer");

        // Need to be bound on all documents to work in all possible cases (we
        // have to be able to start dragging/moving from the colorpicker to
        // anywhere on the screen, crossing iframes).
        const documents = [
            window.top,
            ...Array.from(window.top.frames).filter((frame) => {
                try {
                    const document = frame.document;
                    return !!document;
                } catch {
                    // We cannot access the document (cross origin).
                    return false;
                }
            }),
        ].map((w) => w.document);
        this.throttleOnMouseMove = useThrottleForAnimation((ev) => {
            this.onMouseMovePicker(ev);
            this.onMouseMoveSlider(ev);
            this.onMouseMoveOpacitySlider(ev);
        });

        for (const doc of documents) {
            useExternalListener(doc, "mousemove", this.throttleOnMouseMove);
            useExternalListener(doc, "mouseup", this.onMouseUp.bind(this));
        }
        onMounted(async () => {
            const defaultCssColor = this.props.selectedColor
                ? this.props.selectedColor
                : this.props.defaultColor;
            const rgba = convertCSSColorToRgba(defaultCssColor);
            if (rgba) {
                this._updateRgba(rgba.red, rgba.green, rgba.blue, rgba.opacity);
            }

            this.previewActive = true;
            this._updateUI();
        });
        onWillUpdateProps((newProps) => {
            const newSelectedColor = newProps.selectedColor
                ? newProps.selectedColor
                : newProps.defaultColor;
            this.setSelectedColor(newSelectedColor);
        });
    }

    /**
     * Sets the currently selected color
     *
     * @param {string} color rgb[a]
     */
    setSelectedColor(color) {
        const rgba = convertCSSColorToRgba(color);
        if (rgba) {
            const oldPreviewActive = this.previewActive;
            this.previewActive = false;
            this._updateRgba(rgba.red, rgba.green, rgba.blue, rgba.opacity);
            this.previewActive = oldPreviewActive;
            this._updateUI();
        }
    }

    get el() {
        return this.elRef.el;
    }

    //--------------------------------------------------------------------------
    // Private
    //--------------------------------------------------------------------------

    /**
     * Updates input values, color preview, picker and slider pointer positions.
     *
     * @private
     */
    _updateUI() {
        // Update inputs
        for (const [color, value] of Object.entries(this.colorComponents)) {
            const input = this.el.querySelector(`.o_${color}_input`);
            if (input) {
                input.value = value;
            }
        }

        // Update picker area and picker pointer position
        const colorPickerArea = this.colorPickerAreaRef.el;
        colorPickerArea.style.backgroundColor = `hsl(${this.colorComponents.hue}, 100%, 50%)`;
        const top = ((100 - this.colorComponents.lightness) * colorPickerArea.clientHeight) / 100;
        const left = (this.colorComponents.saturation * colorPickerArea.clientWidth) / 100;

        const colorpickerPointer = this.colorPickerPointerRef.el;
        colorpickerPointer.style.top = top - 5 + "px";
        colorpickerPointer.style.left = left - 5 + "px";

        // Update color slider position
        const colorSlider = this.colorSliderRef.el;
        const height = colorSlider.clientHeight;
        const y = (this.colorComponents.hue * height) / 360;
        this.colorSliderPointerRef.el.style.top = `${Math.round(y - 2)}px`;

        if (!this.props.noTransparency) {
            // Update opacity slider position
            const opacitySlider = this.opacitySliderRef.el;
            const heightOpacity = opacitySlider.clientHeight;
            const z = heightOpacity * (1 - this.colorComponents.opacity / 100.0);
            this.opacitySliderPointerRef.el.style.top = `${Math.round(z - 2)}px`;

            // Add gradient color on opacity slider
            opacitySlider.style.background = `linear-gradient(${this.colorComponents.hex} 0%, transparent 100%)`;
        }
    }
    /**
     * Updates colors according to given hex value. Opacity is left unchanged.
     *
     * @private
     * @param {string} hex - hexadecimal code
     */
    _updateHex(hex) {
        const rgb = convertCSSColorToRgba(hex);
        if (!rgb) {
            return;
        }
        Object.assign(
            this.colorComponents,
            { hex: hex },
            rgb,
            convertRgbToHsl(rgb.red, rgb.green, rgb.blue)
        );
        this._updateCssColor();
    }
    /**
     * Updates colors according to given RGB values.
     *
     * @private
     * @param {integer} r
     * @param {integer} g
     * @param {integer} b
     * @param {integer} [a]
     */
    _updateRgba(r, g, b, a) {
        // Remove full transparency in case some lightness is added
        const opacity = a || this.colorComponents.opacity;
        if (opacity < 0.1 && (r > 0.1 || g > 0.1 || b > 0.1)) {
            a = 100;
        }

        // We update the hexadecimal code by transforming into a css color and
        // ignoring the opacity (we don't display opacity component in hexa as
        // not supported on all browsers)
        const hex = convertRgbaToCSSColor(r, g, b);
        if (!hex) {
            return;
        }
        Object.assign(
            this.colorComponents,
            { red: r, green: g, blue: b },
            a === undefined ? {} : { opacity: a },
            { hex: hex },
            convertRgbToHsl(r, g, b)
        );
        this._updateCssColor();
    }
    /**
     * Updates colors according to given HSL values.
     *
     * @private
     * @param {integer} h
     * @param {integer} s
     * @param {integer} l
     */
    _updateHsl(h, s, l) {
        // Remove full transparency in case some lightness is added
        let a = this.colorComponents.opacity;
        if (a < 0.1 && l > 0.1) {
            a = 100;
        }

        const rgb = convertHslToRgb(h, s, l);
        if (!rgb) {
            return;
        }
        // We receive an hexa as we ignore the opacity
        const hex = convertRgbaToCSSColor(rgb.red, rgb.green, rgb.blue);
        Object.assign(
            this.colorComponents,
            { hue: h, saturation: s, lightness: l },
            rgb,
            { hex: hex },
            { opacity: a }
        );
        this._updateCssColor();
    }
    /**
     * Updates color opacity.
     *
     * @private
     * @param {integer} a
     */
    _updateOpacity(a) {
        if (a < 0 || a > 100) {
            return;
        }
        Object.assign(this.colorComponents, { opacity: a });
        this._updateCssColor();
    }
    /**
     * Trigger an event to annonce that the widget value has changed
     *
     * @private
     */
    _colorSelected() {
        this.props.onColorSelect(this.colorComponents);
    }
    /**
     * Updates css color representation.
     *
     * @private
     */
    _updateCssColor() {
        const r = this.colorComponents.red;
        const g = this.colorComponents.green;
        const b = this.colorComponents.blue;
        const a = this.colorComponents.opacity;
        Object.assign(this.colorComponents, { cssColor: convertRgbaToCSSColor(r, g, b, a) });
        if (this.previewActive) {
            this.props.onColorPreview(this.colorComponents);
        }
    }

    //--------------------------------------------------------------------------
    // Handlers
    //--------------------------------------------------------------------------

    /**
     * @private
     * @param {Event} ev
     */
    onKeydown(ev) {
        if (ev.key === "Enter") {
            if (ev.target.tagName === "INPUT") {
                this.onChangeInputs(ev);
            }
            ev.preventDefault();
            this.props.onInputEnter(ev);
        }
    }
    /**
     * @param {Event} ev
     */
    onClick(ev) {
        if (this.props.stopClickPropagation) {
            ev.stopPropagation();
        }
        //TODO: we should remove it with legacy web_editor
        ev.__isColorpickerClick = true;

        if (ev.target.dataset.colorMethod === "hex" && !this.selectedHexValue) {
            ev.target.select();
            this.selectedHexValue = ev.target.value;
            return;
        }
        this.selectedHexValue = "";
    }
    onMouseUp() {
        if (this.pickerFlag || this.sliderFlag || this.opacitySliderFlag) {
            this._colorSelected();
        }
        this.pickerFlag = false;
        this.sliderFlag = false;
        this.opacitySliderFlag = false;
    }
    /**
     * Updates color when the user starts clicking on the picker.
     *
     * @private
     * @param {Event} ev
     */
    onMouseDownPicker(ev) {
        this.pickerFlag = true;
        ev.preventDefault();
        this.onMouseMovePicker(ev);
    }
    /**
     * Updates saturation and lightness values on mouse drag over picker.
     *
     * @private
     * @param {Event} ev
     */
    onMouseMovePicker(ev) {
        if (!this.pickerFlag) {
            return;
        }

        const colorPickerArea = this.colorPickerAreaRef.el;
        const rect = colorPickerArea.getClientRects()[0];
        const top = ev.pageY - rect.top;
        const left = ev.pageX - rect.left;
        let saturation = Math.round((100 * left) / colorPickerArea.clientWidth);
        let lightness = Math.round(
            (100 * (colorPickerArea.clientHeight - top)) / colorPickerArea.clientHeight
        );
        saturation = clamp(saturation, 0, 100);
        lightness = clamp(lightness, 0, 100);

        this._updateHsl(this.colorComponents.hue, saturation, lightness);
        this._updateUI();
    }
    /**
     * Updates color when user starts clicking on slider.
     *
     * @private
     * @param {Event} ev
     */
    onMouseDownSlider(ev) {
        this.sliderFlag = true;
        ev.preventDefault();
        this.onMouseMoveSlider(ev);
    }
    /**
     * Updates hue value on mouse drag over slider.
     *
     * @private
     * @param {Event} ev
     */
    onMouseMoveSlider(ev) {
        if (!this.sliderFlag) {
            return;
        }

        const colorSlider = this.colorSliderRef.el;
        const y = ev.pageY - colorSlider.getClientRects()[0].top;
        let hue = Math.round((360 * y) / colorSlider.clientHeight);
        hue = clamp(hue, 0, 360);

        this._updateHsl(hue, this.colorComponents.saturation, this.colorComponents.lightness);
        this._updateUI();
    }
    /**
     * Updates opacity when user starts clicking on opacity slider.
     *
     * @private
     * @param {Event} ev
     */
    onMouseDownOpacitySlider(ev) {
        this.opacitySliderFlag = true;
        ev.preventDefault();
        this.onMouseMoveOpacitySlider(ev);
    }
    /**
     * Updates opacity value on mouse drag over opacity slider.
     *
     * @private
     * @param {Event} ev
     */
    onMouseMoveOpacitySlider(ev) {
        if (!this.opacitySliderFlag || this.props.noTransparency) {
            return;
        }

        const opacitySlider = this.opacitySliderRef.el;
        const y = ev.pageY - opacitySlider.getClientRects()[0].top;
        let opacity = Math.round(100 * (1 - y / opacitySlider.clientHeight));
        opacity = clamp(opacity, 0, 100);

        this._updateOpacity(opacity);
        this._updateUI();
    }
    /**
     * Called when input value is changed -> Updates UI: Set picker and slider
     * position and set colors.
     *
     * @private
     * @param {Event} ev
     */
    onChangeInputs(ev) {
        switch (ev.target.dataset.colorMethod) {
            case "hex":
<<<<<<< HEAD
                // Handled by the "input" event (see "_onHexColorInput").
=======
                // Handled by the "input" event (see "onHexColorInput").
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
                return;
            case "rgb":
                this._updateRgba(
                    parseInt(this.el.querySelector(".o_red_input").value),
                    parseInt(this.el.querySelector(".o_green_input").value),
                    parseInt(this.el.querySelector(".o_blue_input").value)
                );
                break;
            case "hsl":
                this._updateHsl(
                    parseInt(this.el.querySelector(".o_hue_input").value),
                    parseInt(this.el.querySelector(".o_saturation_input").value),
                    parseInt(this.el.querySelector(".o_lightness_input").value)
                );
                break;
            case "opacity":
                this._updateOpacity(parseInt(this.el.querySelector(".o_opacity_input").value));
                break;
        }
        this._updateUI();
        this._colorSelected();
    }
    /**
     * Called when the hex color input's input event is triggered.
     *
     * @private
     * @param {Event} ev
     */
<<<<<<< HEAD
    _onHexColorInput(ev) {
=======
    onHexColorInput(ev) {
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        const hexColorValue = ev.target.value.replaceAll("#", "");
        if (hexColorValue.length === 6) {
            this._updateHex(`#${hexColorValue}`);
            this._updateUI();
            this._colorSelected();
        }
    }
}

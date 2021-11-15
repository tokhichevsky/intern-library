import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var styles$f = {"root":"Button-module_root__32E30","root_disabled":"Button-module_root_disabled__1C4jY","root_large":"Button-module_root_large__3E0nk","root_small":"Button-module_root_small__3x6mT","root_primary":"Button-module_root_primary__2WvBn","root_green":"Button-module_root_green__3llwH","root_negative":"Button-module_root_negative__nAd0u"};

var Button = function (props) {
    var _a;
    var color = props.color, size = props.size, disabled = props.disabled, buttonProps = __rest(props, ["color", "size", "disabled"]);
    return (React.createElement("button", __assign({}, buttonProps, { disabled: disabled, className: classnames(styles$f.root, props.className, (_a = {},
            _a[styles$f.root_primary] = color === "primary",
            _a[styles$f.root_green] = color === "green",
            _a[styles$f.root_negative] = color === "negative",
            _a[styles$f.root_large] = size === "large",
            _a[styles$f.root_small] = size === "small",
            _a[styles$f.root_disabled] = disabled,
            _a)) })));
};
Button.defaultProps = {
    color: "primary",
    size: "default",
};

var styles$e = {"root":"Checkbox-module_root__1DisM","input":"Checkbox-module_input__8n1sr","checkbox":"Checkbox-module_checkbox__1Sn_b","checkbox_checked":"Checkbox-module_checkbox_checked__ElWtD","checkbox_disabled":"Checkbox-module_checkbox_disabled__1b9zl"};

var Checkbox = function (props) {
    var _a;
    var _b = props.value, value = _b === void 0 ? false : _b, label = props.label, name = props.name, onChange = props.onChange, disabled = props.disabled, otherProps = __rest(props, ["value", "label", "name", "onChange", "disabled"]);
    var _c = useState(value), checked = _c[0], setChecked = _c[1];
    var changeHandler = useCallback(function (event) {
        if (!disabled) {
            setChecked(event.target.checked);
            onChange === null || onChange === void 0 ? void 0 : onChange(event.target.checked);
        }
    }, [onChange, disabled]);
    useEffect(function () {
        setChecked(value);
    }, [value]);
    return (React.createElement("label", __assign({}, otherProps, { className: classnames(styles$e.root, otherProps.className) }),
        React.createElement("input", { name: name, className: styles$e.input, type: "checkbox", checked: checked, onChange: changeHandler }),
        React.createElement("div", { className: classnames(styles$e.checkbox, (_a = {},
                _a[styles$e.checkbox_checked] = checked,
                _a[styles$e.checkbox_disabled] = disabled,
                _a)) }),
        label));
};

var styles$d = {"root":"Heading-module_root__oNS4I","root_H1Plus":"Heading-module_root_H1Plus__1E8Ra","root_H1":"Heading-module_root_H1__3aA-m"};

var Heading = function (props) {
    var _a = props.type, type = _a === void 0 ? "H1+" : _a, headingProps = __rest(props, ["type"]);
    switch (type) {
        case "H1+":
            return React.createElement("h1", __assign({}, headingProps, { className: classnames(styles$d.root, styles$d.root_H1Plus, headingProps.className) }));
        case "H1":
            return React.createElement("h1", __assign({}, headingProps, { className: classnames(styles$d.root, styles$d.root_H1, headingProps.className) }));
        case "H2":
            return React.createElement("h2", __assign({}, headingProps, { className: classnames(styles$d.root, headingProps.className) }));
        case "H3":
            return React.createElement("h3", __assign({}, headingProps, { className: classnames(styles$d.root, headingProps.className) }));
        case "H4":
            return React.createElement("h4", __assign({}, headingProps, { className: classnames(styles$d.root, headingProps.className) }));
        case "H5":
            return React.createElement("h5", __assign({}, headingProps, { className: classnames(styles$d.root, headingProps.className) }));
    }
};
Heading.defaultProps = {
    type: "H1+",
};

var styles$c = {"root":"IconButton-module_root__1AT72","root_disabled":"IconButton-module_root_disabled__13nGf","root_primary":"IconButton-module_root_primary__1XjNU","root_green":"IconButton-module_root_green__3I2Rk","root_negative":"IconButton-module_root_negative__2Ygkq"};

var IconButton = function (props) {
    var _a;
    var color = props.color, children = props.children, disabled = props.disabled, otherProps = __rest(props, ["color", "children", "disabled"]);
    return (React.createElement("div", __assign({}, otherProps, { onClick: !disabled ? otherProps.onClick : undefined, className: classnames(styles$c.root, otherProps.className, (_a = {},
            _a[styles$c.root_primary] = color === "primary",
            _a[styles$c.root_green] = color === "green",
            _a[styles$c.root_negative] = color === "negative",
            _a[styles$c.root_disabled] = disabled,
            _a)) }), children));
};
IconButton.defaultProps = {
    color: "primary",
};

var Close = function (props) {
    return (React.createElement("svg", __assign({ width: "29", height: "29", viewBox: "0 0 29 29", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M14.75 28.5C22.3439 28.5 28.5 22.3439 28.5 14.75C28.5 7.15608 22.3439 1 14.75 1C7.15608 1 1 7.15608 1 14.75C1 22.3439 7.15608 28.5 14.75 28.5Z", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M10.625 10.625L18.875 18.875", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M18.875 10.625L10.625 18.875", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};

var ArrowLeft = function (props) {
    return (React.createElement("svg", __assign({ width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M11 5.81812L7 9.81812L11 13.8181", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};

var ArrowRight = function (props) {
    return (React.createElement("svg", __assign({ width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M9 14.1819L13 10.1819L9 6.18189", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};

var Add = function (props) {
    return (React.createElement("svg", __assign({ width: "47", height: "47", viewBox: "0 0 47 47", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M23.5 46C35.9264 46 46 35.9264 46 23.5C46 11.0736 35.9264 1 23.5 1C11.0736 1 1 11.0736 1 23.5C1 35.9264 11.0736 46 23.5 46Z", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M23.3408 15V33", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        React.createElement("path", { d: "M14 24H32.6815", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round" })));
};

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Close: Close,
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    Add: Add
});

var styles$b = {"root":"Input-module_root__3BZut","input":"Input-module_input__1qEAK","endAdornment":"Input-module_endAdornment__2xjZC","startAdornment":"Input-module_startAdornment__1B6vg","root_large":"Input-module_root_large__2EUEx"};

var Input = function (props) {
    var _a;
    var className = props.className, style = props.style, endAdornment = props.endAdornment, startAdornment = props.startAdornment, size = props.size, inputProps = __rest(props, ["className", "style", "endAdornment", "startAdornment", "size"]);
    return (React.createElement("div", { className: classnames(styles$b.root, className, (_a = {}, _a[styles$b.root_large] = size === "large", _a)), style: style },
        startAdornment && React.createElement("div", { className: styles$b.startAdornment }, startAdornment),
        React.createElement("input", __assign({ type: "text" }, inputProps, { className: styles$b.input })),
        endAdornment && React.createElement("div", { className: styles$b.endAdornment }, endAdornment)));
};
Input.defaultProps = {
    size: 'default',
};

var styles$a = {"root":"Label-module_root__Tt6ie"};

var Label = function (props) {
    return (React.createElement("label", __assign({}, props, { className: classnames(styles$a.root, props.className) })));
};

var styles$9 = {"root":"Modal-module_root__lnOs8","root_visible":"Modal-module_root_visible__2C5Pb","modal":"Modal-module_modal__FqeFw","closeButton":"Modal-module_closeButton__2kbd-"};

var Modal = function (props) {
    var _a;
    var className = props.className, children = props.children, style = props.style, onOpen = props.onOpen, open = props.open, onClose = props.onClose;
    var _b = style || {}, zIndex = _b.zIndex, modalStyles = __rest(_b, ["zIndex"]);
    useEffect(function () {
        if (open) {
            onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        }
    }, [open, onOpen]);
    return createPortal(React.createElement("div", { role: "dialog", className: classnames(styles$9.root, (_a = {}, _a[styles$9.root_visible] = open, _a)), style: { zIndex: zIndex } },
        React.createElement("div", { className: classnames(styles$9.modal, className), style: modalStyles },
            React.createElement(IconButton, { className: styles$9.closeButton, onClick: onClose },
                React.createElement(Close, null)),
            children)), document.body);
};

var styles$8 = {"root":"Navbar-module_root__1BPvT"};

var Navbar = function (props) {
    return (React.createElement("nav", __assign({}, props, { className: classnames(styles$8.root, props.className) }), props.children));
};

var styles$7 = {"root":"NavbarItem-module_root__31ka6"};

var NavbarItem = function (props) {
    var Component = props.component, componentProps = __rest(props, ["component"]);
    if (!Component) {
        return React.createElement("a", __assign({}, componentProps, { className: styles$7.root }));
    }
    return (React.createElement(Component, __assign({}, componentProps, { className: styles$7.root })));
};

var styles$6 = {"root":"Pagination-module_root__3i5Tn","page":"Pagination-module_page__29Jdy","dot":"Pagination-module_dot__2HPS2","page_active":"Pagination-module_page_active__36-BA"};

var Pagination = function (props) {
    var value = props.value, className = props.className, maxVisiblePages = props.maxVisiblePages, totalPages = props.totalPages, onChange = props.onChange, style = props.style;
    var _a = useState(value || 0), page = _a[0], setPage = _a[1];
    var visiblePagesCount = useMemo(function () { return maxVisiblePages && maxVisiblePages > 0
        ? Math.min(maxVisiblePages, totalPages)
        : totalPages; }, [maxVisiblePages, totalPages]);
    var pagesArray = useMemo(function () { return Array(visiblePagesCount).fill(null); }, [visiblePagesCount]);
    var getChangeHandler = useCallback(function (pageIndex) { return function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(pageIndex);
        setPage(pageIndex);
    }; }, []);
    useEffect(function () {
        value !== undefined && setPage(value);
    }, [value]);
    var getPageIndex = useCallback(function (pageIndex) {
        if (!maxVisiblePages) {
            return pageIndex;
        }
        return pageIndex + Math.floor(page / maxVisiblePages) * maxVisiblePages;
    }, [maxVisiblePages, page]);
    var renderPage = useCallback(function (index) {
        var _a;
        var globalIndex = getPageIndex(index);
        var isVisible = globalIndex <= totalPages - 1;
        return (React.createElement("div", { key: globalIndex, className: classnames(styles$6.page, (_a = {}, _a[styles$6.page_active] = page === globalIndex, _a)), onClick: isVisible ? getChangeHandler(globalIndex) : undefined, style: { visibility: isVisible ? "visible" : "hidden" } },
            React.createElement("div", { className: styles$6.dot })));
    }, [totalPages, getPageIndex, totalPages, page, getChangeHandler]);
    return (React.createElement("div", { className: classnames(styles$6.root, className), style: style },
        React.createElement(IconButton, { disabled: page === 0, onClick: getChangeHandler(page - 1) },
            React.createElement(ArrowLeft, null)),
        pagesArray.map(function (_, index) { return renderPage(index); }),
        React.createElement(IconButton, { disabled: page === totalPages - 1, onClick: getChangeHandler(page + 1) },
            React.createElement(ArrowRight, null))));
};

var styles$5 = {"root":"Paragraph-module_root__2Jag1","root_P24":"Paragraph-module_root_P24__3c6rb","root_P20":"Paragraph-module_root_P20__FpssQ","root_P18":"Paragraph-module_root_P18__3JnFL","root_P16":"Paragraph-module_root_P16__2ZGv0","root_P14":"Paragraph-module_root_P14__i-g5k","root_P9":"Paragraph-module_root_P9__Pe9ZP"};

var Paragraph = function (props) {
    var type = props.type, pProps = __rest(props, ["type"]);
    return (React.createElement("p", __assign({}, pProps, { className: classnames(styles$5.root, styles$5["root_" + type]) }), pProps.children));
};
Paragraph.defaultProps = {
    type: "P14",
};

function convertToArray(data) {
    return Array.isArray(data) ? data : data ? [data] : [];
}

var styles$4 = {"root":"Select-module_root__1FF2e","select":"Select-module_select__1qWxd","count":"Select-module_count__1P8XT","caret":"Select-module_caret__fkn6G","select_menuOpen":"Select-module_select_menuOpen__2pMlA","menu":"Select-module_menu__2hYm9","option":"Select-module_option__2ojUk"};

var Select = function (props) {
    var _a;
    var _b;
    var className = props.className, multiple = props.multiple, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, options = props.options, style = props.style, value = props.value, placeholder = props.placeholder;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(convertToArray(value)), selected = _d[0], setSelected = _d[1];
    var wrapperRef = useRef(null);
    var selectedElementsCount = useMemo(function () { return selected.length; }, [selected.length]);
    var text = useMemo(function () { return multiple && placeholder ? placeholder : selected.length ? selected[0].value : placeholder; }, [selected, placeholder, multiple]);
    var checkIsSelected = useCallback(function (option) {
        return !!selected.find(function (selectedOption) { return selectedOption.value === option.value; });
    }, [selected]);
    var getChangeHandler = useCallback(function (option) { return function (checked) {
        if (checked) {
            var newValue = multiple ? __spreadArrays(selected, [option]) : option;
            onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
            setSelected(convertToArray(newValue));
        }
        else {
            var newValue = multiple
                ? selected.filter(function (selectedOption) { return selectedOption.value !== option.value; })
                : null;
            onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
            setSelected(convertToArray(newValue));
        }
    }; }, [multiple, onChange, selected]);
    var toggleMenu = useCallback(function (isOpen) {
        setIsOpen(function (prevState) { return isOpen === undefined ? !prevState : isOpen; });
    }, []);
    var outsideClickListener = useCallback(function (event) {
        var _a;
        if (!((_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
            toggleMenu(false);
        }
    }, [toggleMenu]);
    useEffect(function () {
        document.addEventListener("click", outsideClickListener);
        return function () { return document.removeEventListener("click", outsideClickListener); };
    }, []);
    useEffect(function () {
        setSelected(convertToArray(value));
    }, [value]);
    return (React.createElement("div", { className: classnames(styles$4.root, className), onFocus: onFocus, onBlur: onBlur, style: style, ref: wrapperRef },
        React.createElement("div", { className: classnames(styles$4.select, (_a = {}, _a[styles$4.select_menuOpen] = isOpen, _a)), onClick: function () { return toggleMenu(); } },
            text,
            multiple && !!selectedElementsCount && React.createElement("div", { className: styles$4.count }, selectedElementsCount),
            React.createElement("div", { className: styles$4.caret })),
        isOpen && (React.createElement("div", { className: styles$4.menu, style: { width: (_b = wrapperRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth } }, options === null || options === void 0 ? void 0 : options.map(function (option) { return (React.createElement(Checkbox, { key: option.id, label: option.value, value: checkIsSelected(option), onChange: getChangeHandler(option), className: styles$4.option })); })))));
};
Select.defaultProps = {
    multiple: false,
};

var TagColor;
(function (TagColor) {
    TagColor["Primary"] = "primary";
    TagColor["Secondary"] = "secondary";
    TagColor["Success"] = "success";
    TagColor["Info"] = "info";
    TagColor["Warning"] = "warning";
    TagColor["Danger"] = "danger";
})(TagColor || (TagColor = {}));

var styles$3 = {"root":"Tag-module_root__2iDlY","root_primary":"Tag-module_root_primary__2sF-m","root_secondary":"Tag-module_root_secondary__vOFu8","root_success":"Tag-module_root_success__1_nYW","root_info":"Tag-module_root_info__2-d3O","root_warning":"Tag-module_root_warning__16FWc","root_danger":"Tag-module_root_danger__3Ikyh"};

var Tag = function (props) {
    props.children; var color = props.color, className = props.className, style = props.style, otherProps = __rest(props, ["children", "color", "className", "style"]);
    var isColorInTagColors = useMemo(function () { return color && Object.values(TagColor).includes(color); }, [color]);
    var tagColorClassName = useMemo(function () { return isColorInTagColors ? styles$3["root_" + color] : undefined; }, [color, isColorInTagColors]);
    var backgroundColor = useMemo(function () { return isColorInTagColors ? undefined : color; }, [color, isColorInTagColors]);
    return (React.createElement("div", __assign({}, otherProps, { className: classnames(styles$3.root, className, tagColorClassName), style: __assign(__assign({}, style), { backgroundColor: backgroundColor }) }), props.children));
};
Tag.defaultProps = {
    color: "#B09A81",
};

var styles$2 = {"root":"TextArea-module_root__1YbD7","textarea":"TextArea-module_textarea__2BaSv"};

var TextArea = function (props) {
    var className = props.className, style = props.style, textAreaProps = __rest(props, ["className", "style"]);
    return (React.createElement("div", { className: classnames(styles$2.root, className), style: style },
        React.createElement("textarea", __assign({}, textAreaProps, { className: styles$2.textarea }))));
};

var styles$1 = {"root":"ColorPicker-module_root__12z96","input":"ColorPicker-module_input__3Xayo","color":"ColorPicker-module_color__17OIW"};

var COLOR_PICKER_DEFAULT_COLOR = "#FFFFFF";
var ColorPicker = function (props) {
    var onChange = props.onChange, _a = props.value, value = _a === void 0 ? COLOR_PICKER_DEFAULT_COLOR : _a, className = props.className; props.style; var label = props.label, labelProps = __rest(props, ["onChange", "value", "className", "style", "label"]);
    var _b = useState(value), color = _b[0], setColor = _b[1];
    var changeHandler = useCallback(function (event) {
        setColor(event.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    }, [onChange]);
    useEffect(function () {
        value && setColor(value);
    }, [value]);
    return (React.createElement(Label, __assign({}, labelProps, { className: classnames(styles$1.root, className) }),
        React.createElement("div", { className: styles$1.color, style: { backgroundColor: color } },
            React.createElement("input", { type: "color", className: styles$1.input, value: color, onChange: changeHandler })),
        label));
};

var styles = {"root":"ImageUploader-module_root__2T_n0","controls":"ImageUploader-module_controls__mksgx","controlButton":"ImageUploader-module_controlButton__2jQ-k","container":"ImageUploader-module_container__3oGVD","container_hasImage":"ImageUploader-module_container_hasImage__6d-DP","addButton":"ImageUploader-module_addButton__3mhta","urlButton":"ImageUploader-module_urlButton__2L3jF","input":"ImageUploader-module_input__2VBR5","modal":"ImageUploader-module_modal__2ZEZ7","modalContent":"ImageUploader-module_modalContent__2hwHj","modalSaveButton":"ImageUploader-module_modalSaveButton__9XU05"};

var ImageUploader = function (props) {
    var _a;
    var value = props.value, onChange = props.onChange, className = props.className, otherProps = __rest(props, ["value", "onChange", "className"]);
    var _b = useState(value), image = _b[0], setImage = _b[1];
    var _c = useState(false), isModalOpen = _c[0], setIsModalOpen = _c[1];
    var _d = useState(""), inputValue = _d[0], setInputValue = _d[1];
    var openModal = useCallback(function () { return setIsModalOpen(true); }, []);
    var closeModal = useCallback(function () { return setIsModalOpen(false); }, []);
    var inputChangeHandler = useCallback(function (event) {
        setInputValue(event.target.value);
    }, []);
    var modalSaveButtonClickHandler = useCallback(function () {
        setImage(inputValue);
        closeModal();
    }, [inputValue, closeModal]);
    var controlChangeButtonClickHandler = useCallback(function () {
        setImage(undefined);
        onChange === null || onChange === void 0 ? void 0 : onChange(undefined);
    }, [onChange]);
    var controlSaveButtonClickHandler = useCallback(function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(image);
    }, [onChange]);
    var fileInputChangeHandler = useCallback(function (event) {
        var file = event.target.files && event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    }, []);
    var containerStyles = useMemo(function () {
        return {
            backgroundImage: image ? "url(" + image + ")" : undefined,
            backgroundSize: "cover",
        };
    }, [image]);
    return (React.createElement("div", __assign({ className: classnames(styles.root, className) }, otherProps),
        React.createElement("div", { className: classnames(styles.container, (_a = {}, _a[styles.container_hasImage] = !!image, _a)), style: containerStyles },
            React.createElement("label", { className: styles.addButton },
                React.createElement(IconButton, { color: "negative" },
                    React.createElement(Add, null)),
                React.createElement("input", { className: styles.input, type: "file", accept: "image/*", onChange: fileInputChangeHandler })),
            React.createElement(Button, { color: "negative", size: "small", className: styles.urlButton, onClick: openModal }, "URL \u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"),
            React.createElement(Modal, { className: styles.modal, open: isModalOpen, onClose: closeModal },
                React.createElement("div", { className: styles.modalContent },
                    React.createElement(Label, null,
                        "\u0410\u0434\u0440\u0435\u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                        React.createElement(Input, { type: "url", placeholder: "https://www.example.com", value: inputValue, onChange: inputChangeHandler })),
                    React.createElement(Button, { className: styles.modalSaveButton, type: "button", color: "green", size: "default", onClick: modalSaveButtonClickHandler, disabled: !inputValue }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))),
        React.createElement("div", { className: styles.controls },
            React.createElement(Button, { className: styles.controlButton, size: "small", disabled: !image, onClick: controlChangeButtonClickHandler }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"),
            React.createElement(Button, { className: styles.controlButton, size: "small", color: "green", disabled: !image, onClick: controlSaveButtonClickHandler }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))));
};

export { Button, Checkbox, ColorPicker, Heading, IconButton, ImageUploader, Input, Label, Modal, Navbar, NavbarItem, Pagination, Paragraph, Select, Tag, TextArea, index as icons };
//# sourceMappingURL=index.es.js.map

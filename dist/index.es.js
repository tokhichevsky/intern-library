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

var styles$d = {"root":"Button-module_root__32E30","root_large":"Button-module_root_large__3E0nk","root_small":"Button-module_root_small__3x6mT","root_primary":"Button-module_root_primary__2WvBn","root_green":"Button-module_root_green__3llwH"};

var Button = function (props) {
    var _a;
    var color = props.color, size = props.size, buttonProps = __rest(props, ["color", "size"]);
    return (React.createElement("button", __assign({}, buttonProps, { className: classnames(styles$d.root, props.className, (_a = {},
            _a[styles$d.root_primary] = color === "primary",
            _a[styles$d.root_green] = color === "green",
            _a[styles$d.root_large] = size === "large",
            _a[styles$d.root_small] = size === "small",
            _a)) })));
};
Button.defaultProps = {
    color: "primary",
    size: "default",
};

var styles$c = {"root":"Checkbox-module_root__1DisM","input":"Checkbox-module_input__8n1sr","checkbox":"Checkbox-module_checkbox__1Sn_b","checkbox_checked":"Checkbox-module_checkbox_checked__ElWtD","checkbox_disabled":"Checkbox-module_checkbox_disabled__1b9zl"};

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
    return (React.createElement("label", __assign({}, otherProps, { className: classnames(styles$c.root, otherProps.className) }),
        React.createElement("input", { name: name, className: styles$c.input, type: "checkbox", checked: checked, onChange: changeHandler }),
        React.createElement("div", { className: classnames(styles$c.checkbox, (_a = {},
                _a[styles$c.checkbox_checked] = checked,
                _a[styles$c.checkbox_disabled] = disabled,
                _a)) }),
        label));
};

var styles$b = {"root":"Heading-module_root__oNS4I","root_H1Plus":"Heading-module_root_H1Plus__1E8Ra","root_H1":"Heading-module_root_H1__3aA-m"};

var Heading = function (props) {
    var _a = props.type, type = _a === void 0 ? "H1+" : _a, headingProps = __rest(props, ["type"]);
    switch (type) {
        case "H1+":
            return React.createElement("h1", __assign({}, headingProps, { className: classnames(styles$b.root, styles$b.root_H1Plus, headingProps.className) }));
        case "H1":
            return React.createElement("h1", __assign({}, headingProps, { className: classnames(styles$b.root, styles$b.root_H1, headingProps.className) }));
        case "H2":
            return React.createElement("h2", __assign({}, headingProps, { className: classnames(styles$b.root, headingProps.className) }));
        case "H3":
            return React.createElement("h3", __assign({}, headingProps, { className: classnames(styles$b.root, headingProps.className) }));
        case "H4":
            return React.createElement("h4", __assign({}, headingProps, { className: classnames(styles$b.root, headingProps.className) }));
        case "H5":
            return React.createElement("h5", __assign({}, headingProps, { className: classnames(styles$b.root, headingProps.className) }));
    }
};
Heading.defaultProps = {
    type: "H1+",
};

var styles$a = {"root":"IconButton-module_root__1AT72","root_disabled":"IconButton-module_root_disabled__13nGf","root_primary":"IconButton-module_root_primary__1XjNU","root_green":"IconButton-module_root_green__3I2Rk"};

var IconButton = function (props) {
    var _a;
    var color = props.color, children = props.children, disabled = props.disabled, otherProps = __rest(props, ["color", "children", "disabled"]);
    return (React.createElement("div", __assign({}, otherProps, { onClick: !disabled ? otherProps.onClick : undefined, className: classnames(styles$a.root, otherProps.className, (_a = {},
            _a[styles$a.root_primary] = color === "primary",
            _a[styles$a.root_green] = color === "green",
            _a[styles$a.root_disabled] = disabled,
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

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Close: Close,
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight
});

var styles$9 = {"root":"Input-module_root__3BZut","input":"Input-module_input__1qEAK","endAdornment":"Input-module_endAdornment__2xjZC","startAdornment":"Input-module_startAdornment__1B6vg","root_large":"Input-module_root_large__2EUEx"};

var Input = function (props) {
    var _a;
    var className = props.className, style = props.style, endAdornment = props.endAdornment, startAdornment = props.startAdornment, size = props.size, inputProps = __rest(props, ["className", "style", "endAdornment", "startAdornment", "size"]);
    return (React.createElement("div", { className: classnames(styles$9.root, className, (_a = {}, _a[styles$9.root_large] = size === "large", _a)), style: style },
        startAdornment && React.createElement("div", { className: styles$9.startAdornment }, startAdornment),
        React.createElement("input", __assign({ type: "text" }, inputProps, { className: styles$9.input })),
        endAdornment && React.createElement("div", { className: styles$9.endAdornment }, endAdornment)));
};
Input.defaultProps = {
    size: 'default',
};

var styles$8 = {"root":"Label-module_root__Tt6ie"};

var Label = function (props) {
    return (React.createElement("label", __assign({}, props, { className: classnames(styles$8.root, props.className) })));
};

var styles$7 = {"root":"Modal-module_root__lnOs8","root_visible":"Modal-module_root_visible__2C5Pb","modal":"Modal-module_modal__FqeFw","closeButton":"Modal-module_closeButton__2kbd-"};

var Modal = function (props) {
    var _a;
    var className = props.className, children = props.children, style = props.style, onOpen = props.onOpen, open = props.open, onClose = props.onClose;
    var _b = style || {}, zIndex = _b.zIndex, modalStyles = __rest(_b, ["zIndex"]);
    useEffect(function () {
        if (open) {
            onOpen === null || onOpen === void 0 ? void 0 : onOpen();
        }
    }, [open, onOpen]);
    return createPortal(React.createElement("div", { role: "dialog", className: classnames(styles$7.root, (_a = {}, _a[styles$7.root_visible] = open, _a)), style: { zIndex: zIndex } },
        React.createElement("div", { className: classnames(styles$7.modal, className), style: modalStyles },
            React.createElement(IconButton, { className: styles$7.closeButton, onClick: onClose },
                React.createElement(Close, null)),
            children)), document.body);
};

var styles$6 = {"root":"Navbar-module_root__1BPvT"};

var Navbar = function (props) {
    return (React.createElement("nav", __assign({}, props, { className: classnames(styles$6.root, props.className) }), props.children));
};

var styles$5 = {"root":"NavbarItem-module_root__31ka6"};

var NavbarItem = function (props) {
    var Component = props.component, componentProps = __rest(props, ["component"]);
    if (!Component) {
        return React.createElement("a", __assign({}, componentProps, { className: styles$5.root }));
    }
    return (React.createElement(Component, __assign({}, componentProps, { className: styles$5.root })));
};

var styles$4 = {"root":"Pagination-module_root__3i5Tn","page":"Pagination-module_page__29Jdy","dot":"Pagination-module_dot__2HPS2","page_active":"Pagination-module_page_active__36-BA"};

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
        return (React.createElement("div", { key: globalIndex, className: classnames(styles$4.page, (_a = {}, _a[styles$4.page_active] = page === globalIndex, _a)), onClick: isVisible ? getChangeHandler(globalIndex) : undefined, style: { visibility: isVisible ? "visible" : "hidden" } },
            React.createElement("div", { className: styles$4.dot })));
    }, [totalPages, getPageIndex, totalPages, page, getChangeHandler]);
    return (React.createElement("div", { className: classnames(styles$4.root, className), style: style },
        React.createElement(IconButton, { disabled: page === 0, onClick: getChangeHandler(page - 1) },
            React.createElement(ArrowLeft, null)),
        pagesArray.map(function (_, index) { return renderPage(index); }),
        React.createElement(IconButton, { disabled: page === totalPages - 1, onClick: getChangeHandler(page + 1) },
            React.createElement(ArrowRight, null))));
};

var styles$3 = {"root":"Paragraph-module_root__2Jag1","root_P24":"Paragraph-module_root_P24__3c6rb","root_P20":"Paragraph-module_root_P20__FpssQ","root_P18":"Paragraph-module_root_P18__3JnFL","root_P16":"Paragraph-module_root_P16__2ZGv0","root_P14":"Paragraph-module_root_P14__i-g5k","root_P9":"Paragraph-module_root_P9__Pe9ZP"};

var Paragraph = function (props) {
    var type = props.type, pProps = __rest(props, ["type"]);
    return (React.createElement("p", __assign({}, pProps, { className: classnames(styles$3.root, styles$3["root_" + type]) }), pProps.children));
};
Paragraph.defaultProps = {
    type: "P14",
};

function convertToArray(data) {
    return Array.isArray(data) ? data : data ? [data] : [];
}

var styles$2 = {"root":"Select-module_root__1FF2e","select":"Select-module_select__1qWxd","count":"Select-module_count__1P8XT","caret":"Select-module_caret__fkn6G","select_menuOpen":"Select-module_select_menuOpen__2pMlA","menu":"Select-module_menu__2hYm9","option":"Select-module_option__2ojUk"};

var Select = function (props) {
    var _a;
    var _b;
    var className = props.className, multiple = props.multiple, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, options = props.options, style = props.style, value = props.value, placeholder = props.placeholder;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(convertToArray(value)), selected = _d[0], setSelected = _d[1];
    var wrapperRef = useRef(null);
    var selectedElementsCount = useMemo(function () { return selected.length; }, [selected.length]);
    var text = useMemo(function () { return multiple && placeholder ? placeholder : selected.length ? selected[0].label : placeholder; }, [selected, placeholder, multiple]);
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
    return (React.createElement("div", { className: classnames(styles$2.root, className), onFocus: onFocus, onBlur: onBlur, style: style, ref: wrapperRef },
        React.createElement("div", { className: classnames(styles$2.select, (_a = {}, _a[styles$2.select_menuOpen] = isOpen, _a)), onClick: function () { return toggleMenu(); } },
            text,
            multiple && !!selectedElementsCount && React.createElement("div", { className: styles$2.count }, selectedElementsCount),
            React.createElement("div", { className: styles$2.caret })),
        isOpen && (React.createElement("div", { className: styles$2.menu, style: { width: (_b = wrapperRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth } }, options === null || options === void 0 ? void 0 : options.map(function (option) { return (React.createElement(Checkbox, { key: option.key, label: option.label, value: checkIsSelected(option), onChange: getChangeHandler(option), className: styles$2.option })); })))));
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

var styles$1 = {"root":"Tag-module_root__2iDlY","root_primary":"Tag-module_root_primary__2sF-m","root_secondary":"Tag-module_root_secondary__vOFu8","root_success":"Tag-module_root_success__1_nYW","root_info":"Tag-module_root_info__2-d3O","root_warning":"Tag-module_root_warning__16FWc","root_danger":"Tag-module_root_danger__3Ikyh"};

var Tag = function (props) {
    props.children; var color = props.color, className = props.className, style = props.style, otherProps = __rest(props, ["children", "color", "className", "style"]);
    var isColorInTagColors = useMemo(function () { return color && Object.values(TagColor).includes(color); }, [color]);
    var tagColorClassName = useMemo(function () { return isColorInTagColors ? styles$1["root_" + color] : undefined; }, [color, isColorInTagColors]);
    var backgroundColor = useMemo(function () { return isColorInTagColors ? undefined : color; }, [color, isColorInTagColors]);
    return (React.createElement("div", __assign({}, otherProps, { className: classnames(styles$1.root, className, tagColorClassName), style: __assign(__assign({}, style), { backgroundColor: backgroundColor }) }), props.children));
};
Tag.defaultProps = {
    color: "#B09A81",
};

var styles = {"root":"TextArea-module_root__1YbD7","textarea":"TextArea-module_textarea__2BaSv"};

var TextArea = function (props) {
    var className = props.className, style = props.style, textAreaProps = __rest(props, ["className", "style"]);
    return (React.createElement("div", { className: classnames(styles.root, className), style: style },
        React.createElement("textarea", __assign({}, textAreaProps, { className: styles.textarea }))));
};

export { Button, Checkbox, Heading, IconButton, Input, Label, Modal, Navbar, NavbarItem, Pagination, Paragraph, Select, Tag, TextArea, index as icons };
//# sourceMappingURL=index.es.js.map

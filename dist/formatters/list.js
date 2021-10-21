"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var LIST_FORMAT_OPTIONS = [
    'localeMatcher',
    'type',
    'style',
];
var now = Date.now();
function generateToken(i) {
    return now + "_" + i + "_" + now;
}
function formatList(_a, getListFormat, values, options) {
    var locale = _a.locale, onError = _a.onError;
    if (options === void 0) { options = {}; }
    var ListFormat = Intl.ListFormat;
    if (!ListFormat) {
        onError(utils_1.createError("Intl.ListFormat is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-listformat\"\n"));
    }
    var filteredOptions = utils_1.filterProps(options, LIST_FORMAT_OPTIONS);
    try {
        var richValues_1 = {};
        var serializedValues = values.map(function (v, i) {
            if (typeof v === 'object') {
                var id = generateToken(i);
                richValues_1[id] = v;
                return id;
            }
            return String(v);
        });
        if (!Object.keys(richValues_1).length) {
            return getListFormat(locale, filteredOptions).format(serializedValues);
        }
        var parts = getListFormat(locale, filteredOptions).formatToParts(serializedValues);
        return parts.reduce(function (all, el) {
            var val = el.value;
            if (richValues_1[val]) {
                all.push(richValues_1[val]);
            }
            else if (typeof all[all.length - 1] === 'string') {
                all[all.length - 1] += val;
            }
            else {
                all.push(val);
            }
            return all;
        }, []);
    }
    catch (e) {
        onError(utils_1.createError('Error formatting list.', e));
    }
    return values;
}
exports.formatList = formatList;

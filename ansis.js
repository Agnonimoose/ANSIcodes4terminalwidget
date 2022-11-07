var valls;
var BEL, Back, CSI, Cursor, Fore, OSC, Style;
function valls_snippets(container) {
    function set_properties(cls, props) {
        var desc, value;
        var valls_a = props;
        for (var p in valls_a) {
            if (valls_a.hasOwnProperty(p)) {
                value = props[p];
                if (((((! ((value instanceof Map) || (value instanceof WeakMap))) && (value instanceof Object)) && ("get" in value)) && (value.get instanceof Function))) {
                    desc = value;
                } else {
                    desc = {"value": value, "enumerable": false, "configurable": true, "writable": true};
                }
                Object.defineProperty(cls.prototype, p, desc);
            }
        }
    }
    container["set_properties"] = set_properties;
    return container;
}
valls = {};
valls_snippets(valls);
CSI = "\u001b[";
OSC = "\u001b]";
BEL = "\u0007";
function code_to_chars(code) {
    return ((CSI + code.toString()) + "m");
}
function set_title(title) {
    return (((OSC + "2;") + title) + BEL);
}
function clear_screen(mode = 2) {
    return ((CSI + mode.toString()) + "J");
}
function clear_line(mode = 2) {
    return ((CSI + mode.toString()) + "K");
}
class AnsiCodes extends object {
    constructor() {
        var value;
        for (var name, valls_c = 0, valls_a = dir(this), valls_b = valls_a.length; (valls_c < valls_b); valls_c += 1) {
            name = valls_a[valls_c];
            if ((! name.startswith("_"))) {
                value = this[name];
                this[name] = code_to_chars(value);
            }
        }
    }
}
class AnsiCursor extends object {
    UP(n = 1) {
        return ((CSI + n.toString()) + "A");
    }
    DOWN(n = 1) {
        return ((CSI + n.toString()) + "B");
    }
    FORWARD(n = 1) {
        return ((CSI + n.toString()) + "C");
    }
    BACK(n = 1) {
        return ((CSI + n.toString()) + "D");
    }
    POS(x = 1, y = 1) {
        return ((((CSI + y.toString()) + ";") + x.toString()) + "H");
    }
}
class AnsiFore extends AnsiCodes {
}
valls.set_properties(AnsiFore, {"BLACK": 30, "BLUE": 34, "CYAN": 36, "GREEN": 32, "LIGHTBLACK_EX": 90, "LIGHTBLUE_EX": 94, "LIGHTCYAN_EX": 96, "LIGHTGREEN_EX": 92, "LIGHTMAGENTA_EX": 95, "LIGHTRED_EX": 91, "LIGHTWHITE_EX": 97, "LIGHTYELLOW_EX": 93, "MAGENTA": 35, "RED": 31, "RESET": 39, "WHITE": 37, "YELLOW": 33});
class AnsiBack extends AnsiCodes {
}
valls.set_properties(AnsiBack, {"BLACK": 40, "BLUE": 44, "CYAN": 46, "GREEN": 42, "LIGHTBLACK_EX": 100, "LIGHTBLUE_EX": 104, "LIGHTCYAN_EX": 106, "LIGHTGREEN_EX": 102, "LIGHTMAGENTA_EX": 105, "LIGHTRED_EX": 101, "LIGHTWHITE_EX": 107, "LIGHTYELLOW_EX": 103, "MAGENTA": 45, "RED": 41, "RESET": 49, "WHITE": 47, "YELLOW": 43});
class AnsiStyle extends AnsiCodes {
}
valls.set_properties(AnsiStyle, {"BRIGHT": 1, "DIM": 2, "NORMAL": 22, "RESET_ALL": 0});
Fore = new AnsiFore();
Back = new AnsiBack();
Style = new AnsiStyle();
Cursor = new AnsiCursor();

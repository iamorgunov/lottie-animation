"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var LottieAnimation = (0, react_1.forwardRef)(function (_a, ref) {
    var animationPath = _a.animationPath, _b = _a.loop, loop = _b === void 0 ? true : _b, _c = _a.autoplay, autoplay = _c === void 0 ? true : _c, style = _a.style, className = _a.className, onComplete = _a.onComplete, rest = __rest(_a, ["animationPath", "loop", "autoplay", "style", "className", "onComplete"]);
    var animationContainer = (0, react_1.useRef)(null);
    var animationInstance = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        Promise.resolve().then(function () { return __importStar(require('lottie-web')); }).then(function (lottie) {
            if (animationContainer.current) {
                animationInstance.current = lottie.loadAnimation({
                    container: animationContainer.current,
                    renderer: 'svg',
                    loop: loop,
                    autoplay: autoplay,
                    path: animationPath,
                });
                if (onComplete) {
                    animationInstance.current.addEventListener('complete', onComplete);
                }
            }
        });
        return function () {
            if (animationInstance.current) {
                animationInstance.current.destroy();
                if (onComplete) {
                    animationInstance.current.removeEventListener('complete', onComplete);
                }
            }
        };
    }, [animationPath, loop, autoplay, onComplete]);
    return react_1.default.createElement("div", __assign({ ref: animationContainer, className: className, style: style }, rest));
});
LottieAnimation.propTypes = {
    animationPath: prop_types_1.default.string.isRequired,
    loop: prop_types_1.default.bool,
    autoplay: prop_types_1.default.bool,
    style: prop_types_1.default.object,
    className: prop_types_1.default.string,
    onComplete: prop_types_1.default.func,
};
exports.default = LottieAnimation;
//# sourceMappingURL=index.js.map
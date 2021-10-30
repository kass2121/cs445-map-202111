var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * app2.ts
 */
var Meditator = /** @class */ (function () {
    function Meditator(name) {
        this.name = name;
    }
    Meditator.prototype.meditate = function (duration) {
        if (duration === void 0) { duration = 20; }
        console.log(this.name + " is meditating for " + duration + " mins!");
    };
    return Meditator;
}());
var Sidha = /** @class */ (function (_super) {
    __extends(Sidha, _super);
    function Sidha(name) {
        return _super.call(this, name) || this;
    }
    Sidha.prototype.meditate = function (duration) {
        if (duration === void 0) { duration = 40; }
        console.log('Meditation started');
        _super.prototype.meditate.call(this, duration);
    };
    return Sidha;
}(Meditator));
// let john = new Sidha("John");
var john = new Sidha("John");
john.meditate(); // Meditation started John is meditating for 40 mins!
var anna = new Meditator("Anna");
anna.meditate();
var bob = new Sidha("Bob");
bob.meditate(); // Meditation started Bob is meditating for 40 mins!
bob = new Meditator("Bob2");
bob.meditate(); // Bob2 is meditating for 20 mins!
// let i: number;
// i = 1;
// i = "hello";
// i = [1,2,3];

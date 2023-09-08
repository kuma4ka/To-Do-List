class Calculator {
    static add(a1, a2) {
        return { result: a1 + a2 };
    }

    static minus(a1, a2) {
        return { result: a1 - a2 };
    }

    static multiply(a1, a2) {
        return { result: a1 * a2 };
    }
}

module.exports = Calculator;
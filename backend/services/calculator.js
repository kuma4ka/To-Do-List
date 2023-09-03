class Calculator {
    add(a1, a2) {
        return { result: a1 + a2 };
    }

    minus(a1, a2) {
        return { result: a1 - a2 };
    }

    multiply(a1, a2) {
        return { result: a1 * a2 };
    }
}

const instanceCalculator = new Calculator();

module.exports = instanceCalculator;
const math = require('../app.js');

describe("Division Function-", () => {
    it("should add and return value", () => {
        const result = math.div(10, 2);
        // console.log(result);
        expect (result).toBe(5);
    });
    it("should add and return value", () => {
        const result = math.div(10);
        // console.log(result);
        expect (result).toBeNaN();
    });
});
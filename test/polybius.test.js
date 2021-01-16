const { expect } = require("chai");
const polybius = require("../src/polybius.js")

describe ("polybius", () => {
    it("should  have even number of numbers for each word when decoding", () => {
        const input = "4432423352125";
        const actual = polybius(input, false);
        expect(actual).to.be.false;
    });
    it("should decode a series of numbers to letters", () => {
        const input = "4432423352125413";
        const expected = "thi/jnkful";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });
    it("should encode a series of letters to numbers", () => {
        const input = "thinkful";
        const expected = "4432423352125413";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should encode a pangram to numbers", () => {
        const input = "two driven jocks help fax my big quiz";
        const expected = "442543 412442155133 4243315234 32511353" +
        " 121135 2345 214222 14544255";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should decode a pangram to letters", () => {
        const input = "442543 412442155133 4243315234 32511353" +
        " 121135 2345 214222 14544255";
        const expected = "two dri/jven i/jocks help fax my bi/jg qui/jz";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });
});
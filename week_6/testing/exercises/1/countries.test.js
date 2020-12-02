const countries = require('./countries');


test("When the argument is an empty string we should get an empty array", () => {
    const result = countries.find("");
    expect(result).toStrictEqual([]);
});

test("The Array shouldn't return more than four matches", () => {
    const result = countries.find("A");
    expect(result.length).toBeLessThanOrEqual(4);
});

test("The search should be case insensitive", () => {
    const capital = countries.find("A");
    const noCapital = countries.find("a");
    expect(capital).toStrictEqual(noCapital);
});

test("If there are no matching countries, an empty array is returned", () => {
    const noMatches = countries.find("Neverendingworld");
    expect(noMatches).toStrictEqual([]);
});
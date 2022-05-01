const functions = require("./functions");

//toBe equal
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
//not.toBe equal
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
//toBe null
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});
// toBe falsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual obj
test("User should be Hol Milly obj", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Hol",
    lastName: "Milly",
  });
});

// toBeLessThan
test("Should be under 1600", () => {
  const l1 = 800;
  const l2 = 600;
  expect(l1 + l2).toBeLessThan(1600);
});

// regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "peter"];
  expect(usernames).toContain("peter");
});

// working with async data
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

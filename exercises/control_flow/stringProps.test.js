const showstringproperties = require("./stringProps");

describe("showStringProperties", () => {
  test("should log all properties of the object that are of type string", () => {
    const obj = {
      name: "John",
      age: 30,
      city: "New York",
      isStudent: false,
    };

    console.log = jest.fn();

    showstringproperties.showStringProperties(obj);

    expect(console.log).toHaveBeenCalledWith("name");
    expect(console.log).toHaveBeenCalledWith("city");
    expect(console.log).not.toHaveBeenCalledWith("age");
    expect(console.log).not.toHaveBeenCalledWith("isStudent");
  });
}); 
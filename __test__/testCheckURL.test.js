import { validateURL } from "../src/client/js/validateURL";

describe("Testing URL checking", () => {
  test("Testing the validateURL() function", () => {
    expect(validateURL).toBeDefined();
  });
});

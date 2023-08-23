import { expect } from "chai";
import { sum } from "@brianjor/workspace-b/src/b-dep";

describe("a test", () => {
  it("should pass", () => {
    expect(true).to.be.true;
  });
  it("should add numbers", () => {
    expect(sum(1, 2)).to.equal(3);
  });
});

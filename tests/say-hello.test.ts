import { sayHello } from "../src/say-hello"

describe("say-hello",function () {
      it("mengembalikan say hello", function () {
            expect(sayHello("hello")).toBe("hello")
      })
})
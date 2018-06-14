import {assert} from "chai";

describe("基础类型单元测试", () =>{
    it("Boolean类型单元测试", () =>{
        const isDone = false;
        assert.isTrue(!isDone);
    })
})
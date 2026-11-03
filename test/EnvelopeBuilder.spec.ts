import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnveloppeBuilder";

describe("test EnvelopeBuilder", () => {
    it("should build an empty envelope by default", () => {
        expect(new EnvelopeBuilder().build().isEmpty()).to.be.true;
    });

    it("should compute min and max", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        builder.insert([1.0, 3.0]);
        const result = builder.build();
        expect(result.isEmpty()).to.be.false;
        expect(result.toString()).to.equal("[0,0,2,3]");
    });
});
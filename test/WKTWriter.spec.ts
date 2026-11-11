import { describe, it, expect } from "vitest";
import WktWriter from "../src/WktWrites";
import Point from "../src/Point";
import LineString from "../src/Linestring";

describe("test WktWriter", () => {
    const writer = new WktWriter();

    it("should write points", () => {
        expect(writer.write(new Point())).to.equal("POINT EMPTY");
        expect(writer.write(new Point([3.0, 4.0]))).to.equal("POINT(3.0 4.0)");
    });

    it("should write linestrings", () => {
        expect(writer.write(new LineString())).to.equal("LINESTRING EMPTY");
        const l = new LineString([new Point([0.0, 0.0]), new Point([1.0, 1.0]), new Point([5.0, 5.0])]);
        expect(writer.write(l)).to.equal("LINESTRING(0.0 0.0,1.0 1.0,5.0 5.0)");
    });
});
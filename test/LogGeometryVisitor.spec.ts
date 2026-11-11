import { describe, it, expect } from "vitest";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import LineString from "../src/Linestring";

describe("test LogGeometryVisitor", () => {
    function capture(geometry: Point | LineString): string {
        let result = "";
        geometry.accept(new LogGeometryVisitor((msg) => { result = msg; }));
        return result;
    }

    it("should describe points", () => {
        expect(capture(new Point())).to.equal("Je suis un point vide.");
        expect(capture(new Point([2.0, 3.0]))).to.equal("Je suis un point avec x=2.0 et y=3.0.");
    });

    it("should describe linestrings", () => {
        expect(capture(new LineString())).to.equal("Je suis une polyligne vide.");
        const l = new LineString([new Point([0, 0]), new Point([1, 1]), new Point([5, 5])]);
        expect(capture(l)).to.equal("Je suis une polyligne définie par 3 point(s).");
    });
});
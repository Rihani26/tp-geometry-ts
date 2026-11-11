import Geometry from "./Geometry";
import LineString from "./Linestring";
import Point from "./Point";

export default class WktWriter {
    write(geometry: Geometry): string {
        if (geometry instanceof Point) {
            if (geometry.isEmpty()) {
                return "POINT EMPTY";
            }
            return `POINT(${this.format(geometry.x())} ${this.format(geometry.y())})`;
        } else if (geometry instanceof LineString) {
            if (geometry.isEmpty()) {
                return "LINESTRING EMPTY";
            }
            const coords: string[] = [];
            for (let i = 0; i < geometry.getNumPoints(); i++) {
                const p = geometry.getPointN(i);
                coords.push(`${this.format(p.x())} ${this.format(p.y())}`);
            }
            return `LINESTRING(${coords.join(",")})`;
        } else {
            throw new TypeError("geometry type not supported");
        }
    }

    private format(value: number): string {
        return Number.isInteger(value) ? value.toFixed(1) : value.toString();
    }
}
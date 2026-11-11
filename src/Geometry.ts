export type Coordinate = number[];
import Envelope from "./Enveloppe";
export default interface Geometry {
  getType(): string;
  isEmpty(): boolean;
  translate(dx: number, dy: number): void;
  clone():Geometry;
  getEnvelope(): Envelope;
  
}

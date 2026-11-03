export type Coordinate = number[];

export default interface Geometry {
  getType(): string;
  isEmpty(): boolean;
  translate(dx: number, dy: number): void;
}

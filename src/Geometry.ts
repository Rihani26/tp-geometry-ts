export type Coordinate = number[];

export default interface Geometry {
  getType(): string;
  isEmpty(): boolean;
}

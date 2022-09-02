import { describe, it, expect, test } from "vitest";
import { valueCounts } from "../src/lib/utils";

describe("valueCounts", () => {
	it("empty array", () => expect(valueCounts([])).toEqual({}));
	it("unqiue items", () => expect(valueCounts([1, 2, 3])).toEqual({ 1: 1, 2: 1, 3: 1 }));
	it("repeated items", () =>
		expect(valueCounts([1, 2, 1, 2, 3, 2, 1, 2, 3, 2])).toEqual({ 1: 3, 2: 5, 3: 2 }));
	it("mixed types", () =>
		expect(valueCounts(["a", 1, "b", "c", 1, "b"])).toEqual({ a: 1, 1: 2, b: 2, c: 1 }));
	it("dates", () =>
		expect(
			valueCounts([new Date("2000-07-23"), new Date("2001-07-23"), new Date("2000-07-23")])
		).toEqual({ [new Date("2000-07-23").toString()]: 2, [new Date("2001-07-23").toString()]: 1 }));
	it("nulls", () =>
		expect(valueCounts([1, null, null, 2, undefined, 1, NaN])).toEqual({ 1: 2, 2: 1, NaN: 1 }));
});

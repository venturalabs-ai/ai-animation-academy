import { describe, expect, it } from "vitest";
import { slugify, totalMinutes, validateLesson } from "./curriculum";

describe("slugify", () => {
  it("normalizes titles", () => {
    expect(slugify("Introdução à Animação")).toBe("introducao-a-animacao");
  });
});

describe("totalMinutes", () => {
  it("sums positive durations", () => {
    expect(
      totalMinutes([
        { id: "1", title: "A", minutes: 10 },
        { id: "2", title: "B", minutes: 15 },
      ]),
    ).toBe(25);
  });
});

describe("validateLesson", () => {
  it("rejects empty title", () => {
    expect(validateLesson({ id: "x", title: " ", minutes: 5 })).toContain(
      "title required",
    );
  });
});

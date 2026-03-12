import { describe, expect, it } from "vitest";
import { formatNextRun } from "../ui/src/ui/presenter.ts";

describe("formatNextRun", () => {
  it("returns n/a for nullish values", () => {
    expect(formatNextRun(null)).toBe("n/a");
    expect(formatNextRun(undefined)).toBe("n/a");
  });

  it("includes weekday and relative time", () => {
    const ts = Date.UTC(2026, 1, 23, 15, 0, 0);
    const out = formatNextRun(ts);
    // Accept any locale's weekday format (e.g., "Mon" in English, "周一" in Chinese)
    // Format: "weekday, YYYY/M/D HH:MM:SS (relative time)"
    expect(out).toMatch(/^.+, \d{4}\/\d{1,2}\/\d{1,2} \d{1,2}:\d{2}:\d{2} \(.+\)$/);
    expect(out).toContain("(");
    expect(out).toContain(")");
  });
});

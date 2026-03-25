import { describe, it, expect } from "vitest";

describe("Web3Forms configuration", () => {
  it("VITE_WEB3FORMS_KEY is set and has the correct UUID format", () => {
    const key = import.meta.env.VITE_WEB3FORMS_KEY;
    expect(key).toBeDefined();
    expect(key).not.toBe("YOUR_WEB3FORMS_ACCESS_KEY");
    // UUID v4 format check
    expect(key).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
  });
});

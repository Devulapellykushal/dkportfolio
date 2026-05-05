import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl } from "./whatsapp";

describe("buildWhatsAppUrl", () => {
  it("includes encoded default message", () => {
    const url = buildWhatsAppUrl();
    expect(url).toContain("wa.me/");
    expect(url).toContain("text=");
    expect(decodeURIComponent(url.split("text=")[1] ?? "")).toContain("book");
  });

  it("uses custom message when provided", () => {
    const url = buildWhatsAppUrl("Hello from test");
    const parsed = new URL(url);
    expect(parsed.searchParams.get("text")).toBe("Hello from test");
  });
});

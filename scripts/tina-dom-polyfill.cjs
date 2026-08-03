// TinaCMS bundles browser-only dependencies when loading config in Node.
if (typeof globalThis.Element === "undefined") {
  globalThis.Element = class Element {};
}

if (typeof globalThis.HTMLElement === "undefined") {
  globalThis.HTMLElement = class HTMLElement extends globalThis.Element {};
}

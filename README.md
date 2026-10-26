# Volto Existing Block

A Plone Volto add-on that enables content editors to embed existing content blocks or specific DOM elements from internal or external URLs directly into a page.

## Features

- **DOM Element Embedding:** Specify a `pageURL` and target `elementID` (default `page-document`) to extract and render existing page content.
- **SSR-Friendly:** Asynchronously loads elements with `@loadable/component` to preserve server performance and fast initial page loads.
- **Volto 19 Support:** Full compatibility with `@plone/volto` 17, 18, and 19.

## Installation

Add `volto-existing-block` to your `package.json` dependencies:

```json
"dependencies": {
  "volto-existing-block": "*"
}
```

Add `volto-existing-block` to the `addons` array in your `volto.config.js`.

## Configuration

In the block sidebar:
1. **Page URL (`pageURL`)**: Target URL containing the element to embed.
2. **Element ID (`elementID`)**: The HTML element ID to locate and mount (defaults to `page-document`).

## Compatibility

- Plone 6.0+ / Plone 6.1+
- `@plone/volto` >= 17.0.0, 18.0.0, 19.0.0

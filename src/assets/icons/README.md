# Favicon information

This directory contains the favicon files for the application.

## Files

- `favicon.svg`: The full detailed SVG favicon used in modern browsers.
- `favicon-simple.svg`: A simplified version of the SVG with better rendering for smaller sizes.
- `favicon.png`: A PNG version of the favicon for older browsers.

## Implementation

The favicons are included in the `index.html` file using the following approach:

1. SVG as base64 data URI for immediate loading
2. SVG file as fallback
3. ICO file as fallback for older browsers
4. PNG file for Apple touch icon

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge): Will use the SVG version
- Older browsers (IE11, older Edge): Will use the ICO fallback
- Mobile devices: Will use the PNG version for app icons

## Theme Color

The theme color `#e30a17` is set in the meta tag to match the favicon background color. 
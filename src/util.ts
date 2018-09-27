export function hexWithoutHash(color: chroma.Color) {
  const hexMatch = color
  .hex()
  .match(/^#([A-Fa-f0-9]{6})/);

  if (!hexMatch) {
    throw new Error(`No match for hex of colour ${color.css()}`);
  }

  return hexMatch[1];
}

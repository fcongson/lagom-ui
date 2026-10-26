// Brand × mode × contrast combinations, for the toolbar and for Chromatic.
// Chromatic snapshots every story in Fern light (the default), and the
// stories that set `chromatic.modes` to `keyModes` in every combination
// below. https://www.chromatic.com/docs/modes/

type Globals = { brand: string; mode: string; contrast: string };

export const allModes: Record<string, Globals> = {
  "fern light": { brand: "fern", mode: "light", contrast: "normal" },
  "fern dark": { brand: "fern", mode: "dark", contrast: "normal" },
  "fern more": { brand: "fern", mode: "light", contrast: "more" },
  "fern more dark": { brand: "fern", mode: "dark", contrast: "more" },
  "waypoint light": { brand: "waypoint", mode: "light", contrast: "normal" },
  "waypoint dark": { brand: "waypoint", mode: "dark", contrast: "normal" },
  "base light": { brand: "base", mode: "light", contrast: "normal" },
  "base dark": { brand: "base", mode: "dark", contrast: "normal" },
};

/** The default: every story is snapshotted in Fern light. */
export const defaultModes = { "fern light": allModes["fern light"] };

/** For key stories: every brand, mode, and contrast combination above. */
export const keyModes = allModes;

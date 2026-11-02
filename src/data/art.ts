export const artwork = {
  "battlemap": { "src": "/illustrations/battlemap.svg", "width": 340, "height": 250 },
  "cassette": {
    "src": "/illustrations/cassette.svg",
    "width": 250.0,
    "height": 160.0
  },
  "cassette-clay": {
    "src": "/illustrations/cassette-clay.svg",
    "width": 250.0,
    "height": 160.0
  },
  "cassette-sage": {
    "src": "/illustrations/cassette-sage.svg",
    "width": 250.0,
    "height": 160.0
  },
  "map": {
    "src": "/illustrations/map.svg",
    "width": 680.0,
    "height": 430.0
  },
  "table": {
    "src": "/illustrations/table.svg",
    "width": 1272.0,
    "height": 470.0
  },
  "ceiling": {
    "src": "/illustrations/ceiling.svg",
    "width": 1440.0,
    "height": 300.0
  },
  "chest": {
    "src": "/illustrations/chest.svg",
    "width": 124.0,
    "height": 96.0
  },
  "chest-dark": {
    "src": "/illustrations/chest-dark.svg",
    "width": 124.0,
    "height": 96.0
  },
  "chest-sage": {
    "src": "/illustrations/chest-sage.svg",
    "width": 124.0,
    "height": 96.0
  },
  "tools": {
    "src": "/illustrations/tools.svg",
    "width": 1060.0,
    "height": 130.0
  },
  "clip": {
    "src": "/illustrations/clip.svg",
    "width": 220.0,
    "height": 84.0
  },
  "coffee": {
    "src": "/illustrations/coffee.svg",
    "width": 180.0,
    "height": 170.0
  },
  "notebook": {
    "src": "/illustrations/notebook.svg",
    "width": 780.0,
    "height": 440.0
  },
  "easel": {
    "src": "/illustrations/easel.svg",
    "width": 300.0,
    "height": 440.0
  },
  "film": {
    "src": "/illustrations/film.svg",
    "width": 380.0,
    "height": 92.0
  },
  "farol": {
    "src": "/illustrations/farol.svg",
    "width": 200.0,
    "height": 260.0
  },
  "cat": {
    "src": "/illustrations/cat.svg",
    "width": 140.0,
    "height": 160.0
  },
  "moon": {
    "src": "/illustrations/moon.svg",
    "width": 130.0,
    "height": 160.0
  },
  "profile": {
    "src": "/illustrations/profile.svg",
    "width": 200.0,
    "height": 220.0
  },
  "house": {
    "src": "/illustrations/house.svg",
    "width": 200.0,
    "height": 180.0
  },
  "leaf": {
    "src": "/illustrations/leaf.svg",
    "width": 100.0,
    "height": 100.0
  },
  "window": {
    "src": "/illustrations/window.svg",
    "width": 100.0,
    "height": 92.0
  },
  "cup": {
    "src": "/illustrations/cup.svg",
    "width": 100.0,
    "height": 92.0
  },
  "sunset": {
    "src": "/illustrations/sunset.svg",
    "width": 100.0,
    "height": 92.0
  },
  "landscape": {
    "src": "/illustrations/landscape.svg",
    "width": 100.0,
    "height": 92.0
  },
  "cover": {
    "src": "/illustrations/cover.svg",
    "width": 200.0,
    "height": 200.0
  },
  "staff": {
    "src": "/illustrations/staff.svg",
    "width": 300.0,
    "height": 120.0
  }
} as const;
export type ArtworkName = keyof typeof artwork;

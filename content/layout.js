// Where each item sits on the board (1320 × 840 units). x/y = top-left, r = rotation.
// Three zones: about (left) · work (middle) · projects (right).
//
// To rearrange: open the site with ?edit at the end of the URL, drag things,
// click "copy layout" in the dock, and paste it over this object.

export const layout = {
  // about me
  pennant: { x: 30, y: 26, r: -4 },
  photo: { x: 70, y: 196, r: -4 },
  about: { x: 52, y: 528, r: 2 },

  // work experience
  "label-work": { x: 520, y: 34, r: -2 },
  "exp-0": { x: 470, y: 132, r: -3 },
  "exp-1": { x: 618, y: 144, r: 2 },
  "exp-2": { x: 766, y: 130, r: -2 },
  interests: { x: 478, y: 360, r: -2 },
  ace: { x: 776, y: 382, r: 7 },
  edu: { x: 520, y: 668, r: -3 },

  // projects
  "label-projects": { x: 938, y: 34, r: 2 },
  "project-0": { x: 942, y: 140, r: -3 },
  "project-1": { x: 966, y: 368, r: 2 },
  resume: { x: 1070, y: 616, r: 4 },
};

// Tiny charm decorations: type = a component name in components/Charms.js,
// x/y = top-left in board units, size = width in units, r = rotation, flip = mirror.
export const charms = [
  { type: "GreyCat", x: 370, y: 325, size: 56, tip: "meow ♡" },
  { type: "WaterDog", x: 800, y: 314, size: 60, r: -3, tip: "woof! 🐾" },
  { type: "WaterDogLying", x: 560, y: 594, size: 84, tip: "good dog, napping ♡" },
  { type: "SleepyCat", x: 455, y: 714, size: 50, tip: "shh… zzz" },
  { type: "GreyCat", x: 968, y: 650, size: 54, flip: true, tip: "mrrp?" },
];

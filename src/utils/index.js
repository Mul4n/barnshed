export const L = 12; // Number of lines
export const C = 12; // Number of columns

const COLORS = {
  '1': 0x00ff00,
  '2': 0x0000ff,
  '3': 0xff0000
};

//Careful I think this formula depends on the parity of L. This as been done with a pair L
export const holdsToLeds = (boulder, leds) => {
  console.log('Boulder ?', boulder);
  console.log('holds in utils', boulder.holds.keys());
  boulder.holds.keys().forEach((stringHoldIndex) => {
    console.log('holdindex',stringHoldIndex, boulder.holds.get(stringHoldIndex));
    const holdIndex = parseInt(stringHoldIndex);
    const ledIndex = L * C -
      (Math.ceil(Math.floor(holdIndex / C) / 2)) * 2 * C +
      ((Math.floor(holdIndex / C) + 1) % 2 ? -1 : 1) * (holdIndex % C + (Math.floor(holdIndex / C) + 1) % 2);

    leds[ledIndex] = COLORS[boulder.holds.get(stringHoldIndex)];
  });

  return leds;
}

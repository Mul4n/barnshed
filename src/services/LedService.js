import { holdsToLeds, L, C } from '../utils/index.js';
import { getBoulderById } from './BoulderService.js';
import ws281x from '@ircam/rpi-ws281x-native';

const channel = ws281x(L * C, {
  dma: 10,
  freq: 800000,
  gpio: 18,
  invert: false,
  brightness: 255,
  stripType: ws281x.stripType.WS2811_RGB
});

export const lightsUpFromHolds = (boulder) => {
  ws281x.reset();
  const leds = holdsToLeds(boulder, channel.array);
  channel.render();

  return leds;
}

export const lightsUpBoulder = async (id) => {
  const boulder = await getBoulderById(id);
  return lightsUpFromHolds(boulder);
}


export const lightsOff = () => {
  ws281x.reset();
}

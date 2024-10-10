import { holdsToLeds, L, C } from '../utils/index.js';
import { getBoulderById } from './BoulderService.js';
import ws281x from '@ircam/rpi-ws281x-native';

const channel = ws281x(L * C);

export const lightsUpBoulder = async (id) => {
  const boulder = await getBoulderById(id);
  const leds = holdsToLeds(boulder.holds);
  channel.array = leds;
  ws281x.render();
  return leds;
}

export const lightsOff = () => {
  ws281x.reset();
}

import { holdsToLeds, L, C } from '../utils/index.js';
import { getBoulderById } from './BoulderService.js';
import ws281x from '@wookbot/rpi-ws281x';

ws281x.configure({ leds: L * C });

export const lightsUpBoulder = async (id) => {
  const boulder = await getBoulderById(id);
  const leds = holdsToLeds(boulder.holds);
  ws281x.render(leds);
  return leds;
}

export const lightsOff = () => {
  ws281x.reset();
}
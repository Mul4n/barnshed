import * as LedService from "../services/LedService.js";

export const lightsUpBoulder = async (req, res) => {
  const leds = await LedService.lightsUpBoulder(req.params.id);
  console.log('will light up leds : ', leds);
  res.json({ data: leds, status: 'success' })
}

export const lightsOff = (_, res) => {
  LedService.lightsOff();
  res.json({ status: 'success' });
}
export const breakpoints = {
  bpA: 320,
  bpB: 480,
  bpC: 660,
  bpD: 768,
  bpE: 1024,
  bpF: 1220,
  bpG: 1480,
  bpH: 1920
};

export const sizesEm = {
  bpA: `${breakpoints.bpA / 16}em`,
  bpB: `${breakpoints.bpB / 16}em`,
  bpC: `${breakpoints.bpC / 16}em`,
  bpD: `${breakpoints.bpD / 16}em`,
  bpE: `${breakpoints.bpE / 16}em`,
  bpF: `${breakpoints.bpF / 16}em`,
  bpG: `${breakpoints.bpG / 16}em`,
  bpH: `${breakpoints.bpH / 16}em`,
  bpAMax: `${breakpoints.bpA - 1 / 16}em`,
  bpBMax: `${breakpoints.bpB - 1 / 16}em`,
  bpCMax: `${breakpoints.bpC - 1 / 16}em`,
  bpDMax: `${breakpoints.bpD - 1 / 16}em`,
  bpEMax: `${breakpoints.bpE - 1 / 16}em`,
  bpFMax: `${breakpoints.bpF - 1 / 16}em`,
  bpGMax: `${breakpoints.bpG - 1 / 16}em`,
  bpHMax: `${breakpoints.bpH - 1 / 16}em`
};

export const mediaQueries = {
  bpAMin: `(min-width: ${sizesEm.bpA})`,
  bpBMin: `(min-width: ${sizesEm.bpB})`,
  bpCMin: `(min-width: ${sizesEm.bpC})`,
  bpDMin: `(min-width: ${sizesEm.bpD})`,
  bpEMin: `(min-width: ${sizesEm.bpE})`,
  bpFMin: `(min-width: ${sizesEm.bpF})`,
  bpGMin: `(min-width: ${sizesEm.bpG})`,
  bpHMin: `(min-width: ${sizesEm.bpH})`,
  bpAMax: `(max-width: ${sizesEm.bpAMax})`,
  bpBMax: `(max-width: ${sizesEm.bpBMax})`,
  bpCMax: `(max-width: ${sizesEm.bpCMax})`,
  bpDMax: `(max-width: ${sizesEm.bpDMax})`,
  bpEMax: `(max-width: ${sizesEm.bpEMax})`,
  bpFMax: `(max-width: ${sizesEm.bpFMax})`,
  bpGMax: `(max-width: ${sizesEm.bpGMax})`,
  bpHMax: `(max-width: ${sizesEm.bpHMax})`
};

export const largeScreen = breakpoints.bpG;
export const medScreen = breakpoints.bpD;
export const smallScreen = breakpoints.bpA;

export const largeScreenMQMin = mediaQueries.bpGMin;
export const medScreenMQMin = mediaQueries.bpDMin;

export const largeScreenMQMax = mediaQueries.bpGMax;
export const medScreenMQMax = mediaQueries.bpDMax;

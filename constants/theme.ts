export const colors = {
  ink: '#090B0E',
  charcoal: '#12161B',
  panel: '#171D23',
  panelSoft: '#1D252C',
  ivory: '#F6F1E8',
  mist: '#D6D9D7',
  muted: '#9BA3AA',
  gold: '#C7A46A',
  goldSoft: '#E2C89E',
  ice: '#A8D8E8',
  iceDeep: '#6097AD',
  ember: '#9F4E36',
  line: 'rgba(246,241,232,0.14)',
  overlay: 'rgba(9,11,14,0.70)',
  success: '#9FC9A3'
} as const;

export const layout = {
  maxWidth: 1220,
  pagePadding: 24,
  radius: 24,
  radiusSmall: 14
} as const;

export const shadows = {
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.26,
    shadowRadius: 32,
    elevation: 10
  }
} as const;

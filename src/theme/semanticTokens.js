const tokens = {
  colors: {
    light: {
      'bg-default': 'white',
      'bg-secondary': 'grey.200',
    },
    dark: {
      'bg-default': 'grey.700',
      'bg-secondary': 'grey.600',
    },
  },
};

const semanticTokens = {
  colors: {
    brand: {
      default: '#ED662D',
      // _dark: tokens.colors.dark['bg-default'],
    },
    'bg-dark': {
      default: '#13181B',
      _dark: tokens.colors.dark['bg-secondary'],
    },
    'bg-secondary': {
      default: tokens.colors.light['bg-secondary'],
      _dark: tokens.colors.dark['bg-secondary'],
    },
    'item-bg': {
      default: 'grey.600',
      _dark: 'white',
    },
    'text-title': {
      default: 'grey.600',
      _dark: 'grey.200',
    },
    'text-content': {
      default: 'grey.600',
      _dark: 'grey.200',
    },
    'brand-color': {
      default: 'orange.500',
      _dark: 'orange.500',
    },
    'btn-primary-bg': {
      default: 'orange.500',
      _dark: 'orange.500',
    },
    'btn-primary-text': {
      default: 'white',
      _dark: 'grey.600',
    },
    'btn-primary-pressed-bg': {
      default: 'white',
      _dark: 'grey.600',
    },
    'btn-primary-pressed-text': {
      default: 'orange.500',
      _dark: 'orange.500',
    },
  },
  radii: {
    cardLg: '50px',
    cardMd: '20px',
    'radii-button': '10px',
  },
};

export default semanticTokens;

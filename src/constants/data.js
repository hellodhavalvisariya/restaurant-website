import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '560 Rs',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '590 Rs',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '440 Rs',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '310 Rs',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '260 Rs',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '200 Rs',
    tags: 'Aperol | I proceed to the villa of Marchesi | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '160 Rs',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '100 Rs',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '310 Rs',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '260 Rs',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Great Restaurant ',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Ausome food ',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Great hospitality.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'graet ambience',
  },
];

export default { wines, cocktails, awards };

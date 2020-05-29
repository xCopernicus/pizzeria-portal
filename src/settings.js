export const api = {
  url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131' : '') + '/api',
  product: 'product',
  order: 'order',
  booking: 'booking',
  event: 'event',
  tables: 'tables',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};

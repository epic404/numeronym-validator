const isNumeronym = require('./index');

test('i18n', () => {
  expect(isNumeronym('internationalization', 'i18n')).toBe(true);
});
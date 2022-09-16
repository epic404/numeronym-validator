const isNumeronym = require('./index');

test('internationalization', () => {
  expect(isNumeronym('internationalization', 'i18n')).toBe(true);
  expect(isNumeronym('internationalization', 'i19n')).toBe(false);
  expect(isNumeronym('internationalization', 'int5ion5tion')).toBe(true);
  expect(isNumeronym('internationalization', 'int5ino5tion')).toBe(false);
  expect(isNumeronym('internationalization', 'int6ion5tion')).toBe(false);
  expect(isNumeronym('internationalization', 'i10alizat2n')).toBe(true);
  expect(isNumeronym('internationalization', 'i10alizta2n')).toBe(false);
  expect(isNumeronym('internationalization', 'i10alizat3n')).toBe(false);
});

test('supercalifragilisticexpialidocious', () => {
  expect(isNumeronym('supercalifragilisticexpialidocious', 's32s')).toBe(true);
  expect(isNumeronym('supercalifragilisticexpialidocious', 's31s')).toBe(false);
  expect(isNumeronym('supercalifragilisticexpialidocious', 's1per1alifrag2is16s')).toBe(true);
  expect(isNumeronym('supercalifragilisticexpialidocious', 's1per1alifrag2is15s')).toBe(false);
  expect(isNumeronym('supercalifragilisticexpialidocious', 's1per1alifarg2is16s')).toBe(false);
});
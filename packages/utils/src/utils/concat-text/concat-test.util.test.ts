import { concatText } from './concat-text.util';

test('foo', () => {
  expect(concatText('foo', 'bar')).toBe('foobar');
});

import { render } from '@testing-library/react';
import Clock from './components/Clock';

jest.useFakeTimers();
jest.spyOn(global, 'setInterval');

test('waits 1 second before update clock', () => {
  render(<Clock />)

  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
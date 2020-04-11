import { h } from 'preact';
import { render } from '@testing-library/preact';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from './App';

expect.extend(toHaveNoViolations);

describe('App', () => {
  it('Renders without errors', () => {
    expect(() => {
      render(<App />);
    }).not.toThrowError();
  });

  it('Has no accessibility errors', async () => {
    const { container } = render(<App />);

    expect(await axe(container)).toHaveNoViolations();
  });
});

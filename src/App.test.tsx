import { h } from 'preact';
import { render } from '@testing-library/preact';
import App from './App';

describe('App', () => {
  it('Renders without errors', () => {
    expect(() => {
      render(<App />);
    }).not.toThrowError();
  });
});

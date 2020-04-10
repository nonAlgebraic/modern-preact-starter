import { h, FunctionComponent } from 'preact';
import { css } from 'emotion';

const style = css`
  & {
    font-size: 3rem;
  }
`;

const App: FunctionComponent = () => <div className={style}>Hello, world!</div>;

export default App;

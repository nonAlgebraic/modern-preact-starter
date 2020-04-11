import { h, FunctionComponent } from '/web_modules/preact.js';
import { css } from '/web_modules/emotion.js';

const style = css`
  & {
    font-size: 3rem;
  }
`;

const App: FunctionComponent = () => <div className={style}>Hello, world!</div>;

export default App;

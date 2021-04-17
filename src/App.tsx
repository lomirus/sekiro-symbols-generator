import { ReactElement } from 'react';
import Options from './components/Options'

const App = (): ReactElement => (
    <div>
        <Options.Main />
        <Options.Background />
        <Options.Size />
    </div>
);

export default App
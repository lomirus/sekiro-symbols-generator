import { useReducer, ReactElement } from 'react';

import * as Options from './components/Options'
import * as Buttons from './components/Buttons'
import Preview from './components/Preview'

import Context from './global/context'
import reducer from './global/reducer'

const styles = {
    root: {
        display: "grid",
        gridTemplateColumns: "300px 480px",
        gridTemplateRows: "1fr auto",
        columnGap: "20px",
        rowGap: "20px",
        justifyItems: "center",
    },
    download: {
        gridColumnStart: 1,
        gridColumnEnd: 3
    }
}

const App = (): ReactElement => (
    <Context.Provider value={useReducer(reducer, { symbol: '', title: '', color: '' })}>
        <div css={styles.root}>
            <div id="options">
                <Options.Display />
                <Options.Background />
                <Options.Size />
            </div>
            <Preview />
            <Buttons.Download style={styles.download} />
        </div>
    </Context.Provider>
);

export default App
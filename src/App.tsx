import { useContext, useReducer, ReactElement } from 'react';

import * as Options from './components/Options'
import * as Buttons from './components/Buttons'
import Preview from './components/Preview'

import Context from './global/context'
import reducer from './global/reducer'

const styles = {
    root: {
        display: "grid",
        gridTemplateColumns: "300px auto",
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

const App = (): ReactElement => {
    const options = useContext(Context)[0]
    return (
        <div css={styles.root}>
            <div id="options">
                <Options.Display />
                <Options.Background />
                <Options.Size />
            </div>
            <Preview options={options} />
            <Buttons.Download style={styles.download} />
        </div>
    )
}

const ContextApp = (): ReactElement => {
    return (
        <Context.Provider value={
            useReducer(reducer, {
                symbol: ' ',
                title: ' ',
                color: '#FFFFFF',
                background: undefined,
                opacity: 255
            })
        }>
            <App />
        </Context.Provider>
    )
}

export default ContextApp
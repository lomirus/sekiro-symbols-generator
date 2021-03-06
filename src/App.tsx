import { useContext, useReducer, ReactElement } from 'react';

import * as Options from './modules/Options'
import * as Buttons from './components/Buttons'
import { Preview } from './modules/Preview'

import Context from './store/context'
import reducer from './store/reducer'

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
    const store = useContext(Context)[0]
    return (
        <div css={styles.root}>
            <div id="options">
                <Options.Text />
                <Options.Background />
                <Options.Size />
            </div>
            <Preview />
            <Buttons.Download filename={
                `[${store.symbol}-${store.annotation}](${store.width},${store.height})`
            } style={styles.download} />
        </div>
    )
}

const ContextApp = (): ReactElement => {
    return (
        <Context.Provider value={
            useReducer(reducer, {
                symbol: ' ',
                annotation: ' ',
                color: '#FFFFFF',
                background: undefined,
                opacity: 144,
                width: 1920,
                height: 1080,
            })
        }>
            <App />
        </Context.Provider>
    )
}

export default ContextApp
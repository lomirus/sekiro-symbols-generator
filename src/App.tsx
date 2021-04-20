import { ReactElement } from 'react';
import * as Options from './components/Options'
import * as Buttons from './components/Buttons'
import Preview from './components/Preview'

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
    <div css={styles.root}>
        <div id="options">
            <Options.Main />
            <Options.Background />
            <Options.Size />
        </div>
        <Preview />
        <Buttons.Download style={styles.download}/>
    </div>
);

export default App
import { ReactElement, CSSProperties } from 'react';
import Options from './components/Options'
import Preview from './components/Preview'
import Download from './components/Download'

const styles: Record<string, CSSProperties> = {
    root: {
        display: "flex",
        flexDirection: "column"
    },
    main: {
        display: "flex",
        flexDirection: "row"
    }
}

const App = (): ReactElement => (
    <div style={styles.root}>
        <div style={styles.main}>
            <div id="options">
                <Options.Main />
                <Options.Background />
                <Options.Size />
            </div>
            <Preview />
        </div>
        <Download />
    </div>
);

export default App
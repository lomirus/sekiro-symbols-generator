import { ReactElement } from 'react';

import Box from '../Box';

const presets: Array<{
    symbol: string,
    title: string,
    color: string
}> = [{
    symbol: "死",
    title: "DEATH",
    color: ""
}, {
    symbol: "冥助あり",
    title: "UNSEEN AID",
    color: ""
}, {
    symbol: "忍殺",
    title: "SHINOBI EXECUTION",
    color: ""
}, {
    symbol: "不死斬り",
    title: "",
    color: ""
}]

const MainOptions = (): ReactElement => (
    <Box title="Main">
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {presets.map(preset => <span key={preset.title}>{preset.symbol}</span>)}
        </div>
        <div style={{
            display: "grid",
            gridTemplateColumns: "auto auto"
        }}>
            <span>Symbol</span><input type="text" />
            <span>Title</span><input type="text" />
            <span>Color</span><input type="text" />
        </div>
    </Box>
)

export default MainOptions
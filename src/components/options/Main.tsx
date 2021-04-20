import { ReactElement } from 'react';

import TextInput from '../TextInput';
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
    <Box title="Options">
        {/* <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {presets.map(preset => <span key={preset.title}>{preset.symbol}</span>)}
        </div> */}
        <select>
            {presets.map(preset => <option key={preset.title}>{preset.color}</option>)}
        </select>
        <div style={{
            display: "grid",
            gridTemplateColumns: "80px auto",
            rowGap: "5px",
            alignItems: "center",
        }}>
            <span>Symbol</span><TextInput />
            <span>Title</span><TextInput />
            <span>Color</span><TextInput />
        </div>
    </Box>
)

export default MainOptions
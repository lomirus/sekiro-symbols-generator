import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

import { Text as TextInput, Color as ColorInput } from '../Inputs'
import Option from '../Option';

const presets: Array<{
    symbol: string,
    title: string,
    color: string
}> = [{
    symbol: "死",
    title: "DEATH",
    color: "A72C2A"
}, {
    symbol: "冥助あり",
    title: "UNSEEN AID",
    color: "A0C6FF" // approximate
}, {
    symbol: "鬼仏見出",
    title: "SCULPTOR'S IDOL FOUND",
    color: "FFFFC0" // approximate
}, {
    symbol: "竜咳快復",
    title: "DRAGONROT HEALED",
    color: "F0C6C8" // approximate
}, {
    symbol: "忍殺",
    title: "SHINOBI EXECUTION",
    color: "FFFFFF"
}, {
    symbol: "不死斬り",
    title: "IMMORTALITY SEVERED",
    color: "FFFFFF"
}]

const Styles: Record<string, CSSObject> = {
    select: {
        outline: "none",
        height: "30px",
        width: "80px",
        border: "1px solid #dcdfe6",
        marginBottom: "15px",
        borderRadius: "4px",
    },
    children: {
        "&>span": {
            "userSelect": "none"
        }
    }
}

const MainOptions = (): ReactElement => (
    <Option title="Display" childrenStyle={Styles.children}
        preset={
            <select css={Styles.select}>
                {presets.map(preset => <option key={preset.title}>{preset.symbol}</option>)}
            </select>
        }>
        <span>Symbol</span><TextInput placeholder="忍殺" />
        <span>Title</span><TextInput placeholder="SHINOBI EXECUTION" />
        <span>Color</span><ColorInput value="#FFFFFF" />
    </Option>
)

export default MainOptions
import { useState, useRef, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

import { Text as TextInput, Color as ColorInput } from '../Inputs'
import Option from '../Option';

type text = {
    symbol: string,
    title: string,
    color: string
}

const presets: Array<text> = [{
    symbol: "死",
    title: "DEATH",
    color: "#A72C2A"
}, {
    symbol: "冥助あり",
    title: "UNSEEN AID",
    color: "#A0C6FF" // approximate
}, {
    symbol: "鬼仏見出",
    title: "SCULPTOR'S IDOL FOUND",
    color: "#FFFFC0" // approximate
}, {
    symbol: "竜咳快復",
    title: "DRAGONROT HEALED",
    color: "#F0C6C8" // approximate
}, {
    symbol: "忍殺",
    title: "SHINOBI EXECUTION",
    color: "#FFFFFF"
}, {
    symbol: "不死斬り",
    title: "IMMORTALITY SEVERED",
    color: "#FFFFFF"
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

const MainOptions = (): ReactElement => {
    const [nowText, setNowText] = useState<text>()
    const select = useRef<HTMLSelectElement>(null)
    const handleSelect = () => {
        setNowText(presets[select.current?.selectedIndex??0])
    }
    return (
        <Option title="Display" childrenStyle={Styles.children}
            preset={
                <select css={Styles.select} ref={select} onChange={handleSelect}>
                    {presets.map(preset => <option key={preset.title}>{preset.symbol}</option>)}
                </select>
            }>
            <span>Symbol</span><TextInput placeholder="忍殺" value={nowText?.symbol} />
            <span>Title</span><TextInput placeholder="SHINOBI EXECUTION" value={nowText?.title} />
            <span>Color</span><ColorInput value={nowText?.color??'#FFFFFF'} />
        </Option>
    )
}

export default MainOptions
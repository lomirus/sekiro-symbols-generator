import { useRef, useContext, ReactElement, ChangeEventHandler } from 'react';
import { CSSObject } from '@emotion/react';

import { Text as TextInput, Color as ColorInput } from '../Inputs'
import Option from '../Option';
import Context from '../../../global/context'

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
    const [textState, dispatchText] = useContext(Context)
    const selector = useRef<HTMLSelectElement>(null)
    const handleSelect = () => {
        const newTextState = presets[selector.current?.selectedIndex??0]
        dispatchText({
            type: 'SYMBOL',
            payload: newTextState.symbol
        })
        dispatchText({
            type: 'TITLE',
            payload: newTextState.title
        })
        dispatchText({
            type: 'COLOR',
            payload: newTextState.color
        })
    }

    const onSymbolChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchText({
            type: 'SYMBOL',
            payload: e.target.value
        })
    }
    const onTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchText({
            type: 'TITLE',
            payload: e.target.value
        })
    }
    const onColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchText({
            type: 'COLOR',
            payload: e.target.value
        })
    }
    return (
        <Option title="Display" childrenStyle={Styles.children}
            preset={
                <select css={Styles.select} ref={selector} onChange={handleSelect}>
                    {presets.map(preset => <option key={preset.title}>{preset.symbol}</option>)}
                </select>
            }>
            <span>Symbol</span>
            <TextInput placeholder="忍殺" value={textState?.symbol} onChange={onSymbolChange}/>

            <span>Title</span>
            <TextInput placeholder="SHINOBI EXECUTION" value={textState?.title} onChange={onTitleChange}/>

            <span>Color</span>
            <ColorInput value={textState.color} onChange={onColorChange}/>
        </Option>
    )
}

export default MainOptions
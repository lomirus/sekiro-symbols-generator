import { useRef, useContext, ReactElement, ChangeEventHandler } from 'react';
import { CSSObject } from '@emotion/react';

import { Text as TextInput, Color as ColorInput } from '../../components/Inputs'
import Option from '../../components/Option';
import Context from '../../store/context'

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
    symbol: "忍殺",
    title: "SHINOBI EXECUTION",
    color: "#FFFFFF"
}, {
    symbol: "踏破",
    title: "INNER REFLECTION CONQUERED",
    color: "#FFFFFF"
}, {
    symbol: "厄憑",
    title: "SINISTER BURDEN",
    color: "#750025"
}, {
    symbol: "厄払",
    title: "BURDEN DISPELLED",
    color: "#FFFFFF"
}, {
    symbol: "不死斬り",
    title: "IMMORTALITY SEVERED",
    color: "#FFFFFF"
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
}]

const Styles: Record<string, CSSObject> = {
    select: {
        outline: "none",
        height: "30px",
        width: "83px",
        border: "1px solid #dcdfe6",
        marginBottom: "15px",
        borderRadius: "4px",
        padding: "0 0 0 3px"
    },
    children: {
        "&>span": {
            "userSelect": "none"
        }
    }
}

const MainOptions = (): ReactElement => {
    const [options, dispatchOptions] = useContext(Context)
    const selector = useRef<HTMLSelectElement>(null)
    const handleSelect = () => {
        const newTextState = presets[selector.current?.selectedIndex ?? 0]
        dispatchOptions({
            type: 'SYMBOL',
            payload: newTextState.symbol
        })
        dispatchOptions({
            type: 'TITLE',
            payload: newTextState.title
        })
        dispatchOptions({
            type: 'COLOR',
            payload: newTextState.color
        })
    }

    const onSymbolChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchOptions({
            type: 'SYMBOL',
            payload: e.target.value
        })
    }
    const onTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchOptions({
            type: 'TITLE',
            payload: e.target.value
        })
    }
    const onColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchOptions({
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
            <TextInput placeholder="" value={options?.symbol} onChange={onSymbolChange} />

            <span>Title</span>
            <TextInput placeholder="" value={options?.title} onChange={onTitleChange} />

            <span>Color</span>
            <ColorInput value={options.color} onChange={onColorChange} />
        </Option>
    )
}

export default MainOptions
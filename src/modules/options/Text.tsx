import { useRef, useContext, ReactElement, ChangeEventHandler } from 'react';
import { CSSObject } from '@emotion/react';

import { Text as TextInput, Color as ColorInput } from '../../components/Inputs'
import Option from '../../components/Option';
import Context from '../../store/context'

type text = {
    symbol: string,
    annotation: string,
    color: string
}

const presets: Array<text> = [{
    symbol: "死",
    annotation: "DEATH",
    color: "#A72C2A"
}, {
    symbol: "忍殺",
    annotation: "SHINOBI EXECUTION",
    color: "#FFFFFF"
}, {
    symbol: "踏破",
    annotation: "INNER REFLECTION CONQUERED",
    color: "#FFFFFF"
}, {
    symbol: "厄憑",
    annotation: "SINISTER BURDEN",
    color: "#750025"
}, {
    symbol: "厄払",
    annotation: "BURDEN DISPELLED",
    color: "#FFFFFF"
}, {
    symbol: "不死斬り",
    annotation: "IMMORTALITY SEVERED",
    color: "#FFFFFF"
}, {
    symbol: "冥助あり",
    annotation: "UNSEEN AID",
    color: "#A0C6FF" // approximate
}, {
    symbol: "鬼仏見出",
    annotation: "SCULPTOR'S IDOL FOUND",
    color: "#FFFFC0" // approximate
}, {
    symbol: "竜咳快復",
    annotation: "DRAGONROT HEALED",
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

const TextOptions = (): ReactElement => {
    const [store, dispatchStore] = useContext(Context)
    const selector = useRef<HTMLSelectElement>(null)
    const handleSelect = () => {
        const newTextState = presets[selector.current?.selectedIndex ?? 0]
        dispatchStore({
            type: 'SYMBOL',
            payload: newTextState.symbol
        })
        dispatchStore({
            type: 'ANNOTATION',
            payload: newTextState.annotation
        })
        dispatchStore({
            type: 'COLOR',
            payload: newTextState.color
        })
    }

    const onSymbolChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchStore({
            type: 'SYMBOL',
            payload: e.target.value
        })
    }
    const onAnnotationChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchStore({
            type: 'ANNOTATION',
            payload: e.target.value
        })
    }
    const onColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchStore({
            type: 'COLOR',
            payload: e.target.value
        })
    }
    return (
        <Option title="Text" childrenStyle={Styles.children}
            preset={
                <select css={Styles.select} ref={selector} onChange={handleSelect}>
                    {presets.map(preset => <option key={preset.annotation}>{preset.symbol}</option>)}
                </select>
            }>
            <span>Symbol</span>
            <TextInput placeholder="" value={store.options.symbol} onChange={onSymbolChange} />

            <span>Annotation</span>
            <TextInput placeholder="" value={store.options.annotation} onChange={onAnnotationChange} />

            <span>Color</span>
            <ColorInput value={store.options.color} onChange={onColorChange} />
        </Option>
    )
}

export default TextOptions
import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

import { Text as TextInput } from '../Inputs'
import Option from '../Option';

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
                {presets.map(preset => <option key={preset.title}>{preset.color}</option>)}
            </select>
        }>
        <span>Symbol</span><TextInput />
        <span>Title</span><TextInput />
        <span>Color</span><TextInput />
    </Option>
)

export default MainOptions
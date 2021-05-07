import { ChangeEventHandler, ReactElement, useContext } from 'react';
import { CSSObject } from '@emotion/react';

import Option from '../../components/Option';
import { Text as TextInput } from '../../components/Inputs'
import Context from '../../store/context';

const Styles: Record<string, CSSObject> = {
    children: {
        "&>span": {
            userSelect: "none",
        }
    }
}

const SizeOptions = (): ReactElement => {
    const [store, dispatchStore] = useContext(Context);
    const onWidthChange: ChangeEventHandler<HTMLInputElement> = e => {
        dispatchStore({
            type: "WIDTH",
            payload: e.target.value
        })
    }
    const onHeightChange: ChangeEventHandler<HTMLInputElement> = e => {
        dispatchStore({
            type: "HEIGHT",
            payload: e.target.value
        })
    }
    return (
    <Option title="Size" childrenStyle={Styles.children}>
        <span>Width</span>
        <TextInput numeric={true} minNumber={0} value={store.width.toString()} onChange={onWidthChange} />
        <span>Height</span>
        <TextInput numeric={true} minNumber={0} value={store.height.toString()} onChange={onHeightChange} />
    </Option>
)}

export default SizeOptions
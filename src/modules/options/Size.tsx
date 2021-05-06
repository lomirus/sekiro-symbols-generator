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
    const [options, dispatchOptions] = useContext(Context);
    const onWidthChange: ChangeEventHandler<HTMLInputElement> = e => {
        dispatchOptions({
            type: "WIDTH",
            payload: e.target.value
        })
    }
    const onHeightChange: ChangeEventHandler<HTMLInputElement> = e => {
        dispatchOptions({
            type: "HEIGHT",
            payload: e.target.value
        })
    }
    return (
    <Option title="Size" childrenStyle={Styles.children}>
        <span>Width</span>
        <TextInput numeric={true} minNumber={0} value={options.width.toString()} onChange={onWidthChange} />
        <span>Height</span>
        <TextInput numeric={true} minNumber={0} value={options.height.toString()} onChange={onHeightChange} />
    </Option>
)}

export default SizeOptions
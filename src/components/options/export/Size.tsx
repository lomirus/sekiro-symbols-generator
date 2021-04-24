import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

import Option from '../Option';
import { Text as TextInput } from '../Inputs'

const Styles: Record<string, CSSObject> = {
    children: {
        "&>span": {
            userSelect: "none",
        }
    }
}

const SizeOptions = (): ReactElement => (
    <Option title="Size" childrenStyle={Styles.children}>
        <span>Width</span>
        <TextInput numeric={true} minNumber={0} placeholder="1920" onChange={() => {/**/}} />
        <span>Height</span>
        <TextInput numeric={true} minNumber={0} placeholder="1080"  onChange={() => {/**/}} />
    </Option>
)

export default SizeOptions
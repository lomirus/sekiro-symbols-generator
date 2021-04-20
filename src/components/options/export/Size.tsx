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
        <span>Width</span><TextInput />
        <span>Height</span><TextInput />
    </Option>
)

export default SizeOptions
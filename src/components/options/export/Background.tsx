import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

import { FileInput } from '../../Buttons';
import { Text as TextInput, Color as ColorInput, Radio } from '../Inputs'
import Option from '../Option';

const Styles: Record<string, CSSObject> = {
    children: {
        "& label": {
            userSelect: "none",
        }
    }
}

const BackgroundOptions = (): ReactElement => (
    <Option title="Background" childrenStyle={Styles.children}>
        <Radio group="background">Image</Radio>
        <FileInput />

        <Radio group="background">Color</Radio>
        <ColorInput />

        <Radio group="background" checked={true}>None</Radio>
    </Option>
)

export default BackgroundOptions
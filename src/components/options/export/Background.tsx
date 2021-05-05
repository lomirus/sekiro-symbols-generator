import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

import { FileInput } from '../../Buttons';
import Option from '../Option';
import TextInput from '../inputs/Text';

const Styles: Record<string, CSSObject> = {
    children: {
        "& label": {
            userSelect: "none",
        }
    }
}

const BackgroundOptions = (): ReactElement => (
    <Option title="Background" childrenStyle={Styles.children}>
        <label>Image</label>
        <FileInput />

        <label>Opacity</label>
        <TextInput value="100" minNumber={0} maxNumber={100} numeric={true} onChange={() => {/**/}}/>
    </Option>
)

export default BackgroundOptions
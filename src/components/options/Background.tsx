import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

import { FileInput } from '../Buttons';
import TextInput from '../TextInput';
import Radio from '../Radio';
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
        <TextInput />

        <Radio group="background">None</Radio>
    </Option>
)

export default BackgroundOptions
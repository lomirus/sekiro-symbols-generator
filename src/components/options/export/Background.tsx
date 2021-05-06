import { ReactElement, useContext } from 'react';
import { CSSObject } from '@emotion/react';

import { FileInput } from '../../Buttons';
import Option from '../Option';
import TextInput from '../inputs/Text';
import Context from '../../../global/context';

const Styles: Record<string, CSSObject> = {
    children: {
        "& label": {
            userSelect: "none",
        }
    }
}



const BackgroundOptions = (): ReactElement => {
    const [_, dispatchOptions] = useContext(Context)

    const onFileChange = (file: File | undefined) => {
        const reader = new FileReader();
        if (!file) return;
        reader.readAsDataURL(file);
        reader.onload = () => {
            dispatchOptions({
                type: 'BACKGROUND',
                payload: reader.result as string
            })
        }
    }

    return (
        <Option title="Background" childrenStyle={Styles.children}>
            <label>Image</label>
            <FileInput onChange={onFileChange} />

            <label>Opacity</label>
            <TextInput value="100" minNumber={0} maxNumber={100} numeric={true} onChange={() => {/**/ }} />
        </Option>
    )
}

export default BackgroundOptions
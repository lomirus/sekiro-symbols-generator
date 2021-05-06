import { ChangeEventHandler, ReactElement, useContext } from 'react';
import { CSSObject } from '@emotion/react';

import { FileInput } from '../../components/Buttons';
import Option from '../../components/Option';
import TextInput from '../../components/inputs/Text';
import Context from '../../store/context';

const Styles: Record<string, CSSObject> = {
    children: {
        "& label": {
            userSelect: "none",
        }
    }
}

const BackgroundOptions = (): ReactElement => {
    const [options, dispatchOptions] = useContext(Context)

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

    const onOpacityChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatchOptions({
            type: 'OPACITY',
            payload: e.target.value
        })
    }

    return (
        <Option title="Background" childrenStyle={Styles.children}>
            <label>Image</label>
            <FileInput onChange={onFileChange} />

            <label>Opacity</label>
            <TextInput
                value={options.opacity.toString()} minNumber={0} maxNumber={255}
                numeric={true} onChange={onOpacityChange} />
        </Option>
    )
}

export default BackgroundOptions
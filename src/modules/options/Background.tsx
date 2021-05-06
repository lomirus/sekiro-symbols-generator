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
    const [store, dispatchStore] = useContext(Context)
    const MAX = 255;
    const MIN = 0;

    const onFileChange = (file: File | undefined) => {
        const reader = new FileReader();
        if (!file) return;
        reader.readAsDataURL(file);
        reader.onload = () => {
            dispatchStore({
                type: 'BACKGROUND',
                payload: reader.result as string
            })
        }
    }

    const onOpacityChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        let payload;
        if (e.target.value === '') payload = MIN.toString();
        else {
            const opacity = parseInt(e.target.value);
            if (opacity < MIN) payload = MIN.toString()
            else if (opacity > MAX) payload = MAX.toString();
            else payload = e.target.value;
        }
        dispatchStore({
            type: 'OPACITY',
            payload
        })
    }

    return (
        <Option title="Background" childrenStyle={Styles.children}>
            <label>Image</label>
            <FileInput onChange={onFileChange} />

            <label>Opacity</label>
            <TextInput
                value={store.options.opacity.toString()} minNumber={MIN} maxNumber={MAX}
                numeric={true} onChange={onOpacityChange} />
        </Option>
    )
}

export default BackgroundOptions
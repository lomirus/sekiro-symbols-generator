import { CSSObject } from '@emotion/react';
import { ReactElement } from 'react';
import ButtonStyle from './styles/Button'

const FileInputStyle: CSSObject = {
    height: "32px",
    width: "81px",
}

const FileInput = (): ReactElement => (
    <div>
        <input type="file" accept="image/*" hidden={true} />
        <button css={{
            ...ButtonStyle,
            ...FileInputStyle
        }}>Upload</button>
    </div>
)

export default FileInput;
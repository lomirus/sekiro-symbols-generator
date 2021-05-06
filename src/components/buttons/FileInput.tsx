import { CSSObject } from '@emotion/react';
import { ChangeEventHandler, ReactElement, useRef } from 'react';
import ButtonStyle from './styles/Button'

const FileInputStyle: CSSObject = {
    ...ButtonStyle,
    height: "32px",
    width: "81px",
}

type FileInputProps = {
    onChange: (files: File) => void
}



const FileInput = ({ onChange }: FileInputProps): ReactElement => {
    const fileInput = useRef<HTMLInputElement>(null);

    const onFileChange = () => {
        onChange((fileInput.current?.files as FileList)[0])
    }
    const clickFileInput = () => {
        fileInput.current?.click()
    }
    return (
        <div>
            <input type="file" accept="image/*" onChange={onFileChange} ref={fileInput} hidden={true} />
            <button css={FileInputStyle} onClick={clickFileInput}>Upload</button>
        </div>
    )
}

export default FileInput;
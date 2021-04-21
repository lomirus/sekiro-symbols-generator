import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

const TextInputStyle: CSSObject = {
    outline: "none",
    border: "1px solid #dcdfe6",
    padding: "8px",
    borderRadius: "4px",
    transition: "border-color .2s cubic-bezier(.645,.045,.355,1)",
    "&:focus": {
        border: "solid 1px #409eff"
    }
}

type TextInputProps = {
    placeholder?: string
}

const TextInput = ({ placeholder }: TextInputProps): ReactElement => (
    <input type="text" placeholder={placeholder} css={TextInputStyle}/>
)

export default TextInput;
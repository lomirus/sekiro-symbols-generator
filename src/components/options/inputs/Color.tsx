import { ReactElement, ChangeEventHandler } from 'react';
import { CSSObject } from '@emotion/react';

const colorInputStyle: CSSObject = {
    border: "1px solid #dcdfe6",
    transition: "border-color .2s cubic-bezier(.645,.045,.355,1)",
    "&:focus": {
        border: "solid 1px #409eff"
    }
}

type ColorInputProps = {
    value: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const ColorInput = ({ value, onChange }: ColorInputProps): ReactElement => {
    return (
        <input type="color" value={value} css={colorInputStyle} onChange={onChange} />
    )
}


export default ColorInput;
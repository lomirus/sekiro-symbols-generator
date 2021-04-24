import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

const colorInputStyle: CSSObject = {
    border: "1px solid #dcdfe6",
    transition: "border-color .2s cubic-bezier(.645,.045,.355,1)",
    "&:focus": {
        border: "solid 1px #409eff"
    }
}

type ColorInputProps = {
    value: string
}

const ColorInput = ({ value }: ColorInputProps): ReactElement => (
    <input type="color" defaultValue={value} css={colorInputStyle} />
)


export default ColorInput;
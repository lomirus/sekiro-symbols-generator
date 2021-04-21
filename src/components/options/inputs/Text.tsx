import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

const Styles: Record<string, CSSObject> = {
    root: {
        position: "relative",
        border: "1px solid #dcdfe6",
        padding: "8px",
        borderRadius: "4px",
        transition: "border-color .2s cubic-bezier(.645,.045,.355,1)",
        overflow: "hidden",
        "&:focus-within": {
            border: "solid 1px #409eff"
        }
    },
    prefix: {
        marginRight: "5px"
    },
    textInput: {
        outline: "none",
        border: "none",
        padding: "0"
    }
}

type TextInputProps = {
    prefix?: string,
    placeholder?: string
}

const TextInput = ({ prefix, placeholder }: TextInputProps): ReactElement => (
    <div css={Styles.root}>
        { prefix ? <span className="prefix" css={Styles.prefix}>{prefix}</span> : null }
        <input type="text" placeholder={placeholder} css={Styles.textInput} />
    </div>
)

export default TextInput;
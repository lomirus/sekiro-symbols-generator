import { useRef, ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

const Styles: Record<string, CSSObject> = {
    root: {
        position: "relative",
        border: "1px solid #dcdfe6",
        padding: "8px",
        borderRadius: "4px",
        transition: "border-color .2s cubic-bezier(.645,.045,.355,1)",
        overflow: "hidden",
        cursor: "text",
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

const TextInput = ({ prefix, placeholder }: TextInputProps): ReactElement => {
    const input = useRef<HTMLInputElement>(null)
    const focusInput = () => input.current?.focus()
    return (
        <div css={Styles.root} onClick={focusInput}>
            {prefix ? <span className="prefix" css={Styles.prefix}>{prefix}</span> : null}
            <input type="text" placeholder={placeholder} css={Styles.textInput} ref={input} />
        </div>
    )
}

export default TextInput;
import { useRef, ReactElement, ChangeEventHandler } from 'react';
import { CSSObject } from '@emotion/react';

const Styles: Record<string, CSSObject> = {
    root: {
        display: "flex",
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
        marginRight: "5px",
        userSelect: "none",
    },
    textInput: {
        outline: "none",
        border: "none",
        padding: "0",
        width: "100%",
    }
}

type TextInputProps = {
    prefix?: string,
    placeholder?: string,
    numeric?: boolean,
    minNumber?: number,
    maxNumber?: number,
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const TextInput = ({
    prefix, placeholder, numeric, minNumber, maxNumber, value, onChange
}: TextInputProps): ReactElement => {
    const input = useRef<HTMLInputElement>(null)
    const focusInput = () => input.current?.focus()
    return (
        <div css={Styles.root} onClick={focusInput}>
            {prefix ? <span className="prefix" css={Styles.prefix}>{prefix}</span> : null}
            <input
                ref={input}
                min={minNumber}
                max={maxNumber}
                value={value ?? ''}
                css={Styles.textInput}
                onChange={onChange}
                placeholder={placeholder}
                type={numeric ? "number" : "text"}>
            </input>
        </div>
    )
}

export default TextInput;
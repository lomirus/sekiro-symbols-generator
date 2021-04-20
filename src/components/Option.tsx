import { CSSObject } from '@emotion/react';
import { ReactNode, ReactElement } from 'react';

type BoxProps = {
    title: string,
    preset?: ReactElement,
    children: ReactNode,
    childrenStyle?: CSSObject,
}

const styles: CSSObject = {
    root: {
        fontFamily: "Arial",
    },
    title: {
        fontWeight: "normal"
    }
}

const Option = ({ title, preset, children, childrenStyle }: BoxProps): ReactElement => (
    <div css={styles.root}>
        <h2 css={styles.title}>{title}</h2>
        {preset}
        <div css={{
            display: "grid",
            gridTemplateColumns: "80px auto",
            rowGap: "5px",
            alignItems: "center",
            ...childrenStyle
        }}>
            {children}
        </div>
    </div>
)

export default Option
import { CSSObject } from '@emotion/react';
import { ReactNode, ReactElement } from 'react';

type BoxProps = {
    title: string,
    children: ReactNode
}

const styles: CSSObject = {
    root: {
        fontFamily: "Arial",
    },
    title: {
        fontWeight: "normal"
    }
}

const Box = ({ title, children }: BoxProps): ReactElement => (
    <div css={styles.root}>
        <h2 css={styles.title}>{title}</h2>
        {children}
    </div>
)

export default Box
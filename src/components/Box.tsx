import { ReactNode, ReactElement } from 'react';

type BoxProps = {
    title: string,
    children: ReactNode
}

const Box = ({ title, children }: BoxProps): ReactElement => (
    <div>
        <h2>{title}</h2>
        {children}
    </div>
)

export default Box
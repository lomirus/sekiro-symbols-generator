import { ReactElement } from 'react';

type RadioProps = {
    group: string,
    children: string
}

const Radio = ({ group, children }: RadioProps): ReactElement => (
    <div>
        <input type="radio" name={group} id={children} />
        <label htmlFor={children}>{children}</label>
    </div>
)

export default Radio;
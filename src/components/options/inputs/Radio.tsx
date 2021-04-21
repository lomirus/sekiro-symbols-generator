import { ReactElement } from 'react';

type RadioProps = {
    group: string,
    children: string,
    checked?: boolean
}

const Radio = ({ group, children, checked }: RadioProps): ReactElement => (
    <div>
        <input type="radio" name={group} id={children} defaultChecked={checked}/>
        <label htmlFor={children}>{children}</label>
    </div>
)

export default Radio;
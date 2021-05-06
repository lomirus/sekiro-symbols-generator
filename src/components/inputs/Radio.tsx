import { ReactElement } from 'react';

type RadioProps = {
    group: string,
    children: string,
    checked?: boolean
}

const Radio = ({ group, children, checked }: RadioProps): ReactElement => (
    <div>
        <input type="radio" name={group} id={children}
            defaultChecked={checked} css={{cursor: "pointer"}} />
        <label htmlFor={children} css={{cursor: "pointer"}}>{children}</label>
    </div>
)

export default Radio;
import { CSSObject } from '@emotion/react';
import { useState, ReactElement, CSSProperties, } from 'react';
import { getUrl } from '../../modules/Preview'
import ButtonStyle from './styles/Button'

type DownloadProps = {
    style?: CSSProperties,
    filename: string,
}

const DownloadStyle: CSSObject = {
    height: "36px",
    width: "96px",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const Download = ({ style, filename }: DownloadProps): ReactElement => {
    const [url, setUrl] = useState('');
    const handleClick = () => setUrl(getUrl())
    return (
        <a css={{
            ...ButtonStyle,
            ...DownloadStyle,
            ...style
        }} download={filename} href={url} onClick={handleClick}>Download</a>
    )
}

export default Download
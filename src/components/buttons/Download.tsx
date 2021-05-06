import { CSSObject } from '@emotion/react';
import { ReactElement, CSSProperties, } from 'react';
import ButtonStyle from './styles/Button'

type DownloadProps = {
    style?: CSSProperties,
    filename: string,
    url: string
}

const DownloadStyle: CSSObject = {
    height: "36px",
    width: "96px",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const Download = ({ style, filename, url }: DownloadProps): ReactElement => {
    return (
        <a css={{
            ...ButtonStyle,
            ...DownloadStyle,
            ...style
        }} download={filename} href={url}>Download</a>
    )
}

export default Download
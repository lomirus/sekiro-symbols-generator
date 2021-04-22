import { CSSObject } from '@emotion/react';
import { ReactElement, CSSProperties } from 'react';
import ButtonStyle from './styles/Button'

type DownloadProps = {
    style?: CSSProperties
}

const DownloadStyle: CSSObject = {
    height: "36px",
    width: "96px",
}

const Download = ({ style }: DownloadProps): ReactElement => (
    <button css={{
        ...ButtonStyle,
        ...DownloadStyle,
        ...style
    }}>Download</button>
)

export default Download
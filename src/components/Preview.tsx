import { ReactElement } from 'react';
import { CSSObject } from '@emotion/react';

const canvasStyle: CSSObject = {
    border: "1px solid #DCDFE6",
    width: "100%",
    height: "100%"
}

const Preview = (): ReactElement => (
    <canvas id="preview" css={canvasStyle}></canvas>
)

export default Preview
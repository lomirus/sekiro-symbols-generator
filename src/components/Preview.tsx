import { ReactElement } from 'react';

const Preview = (): ReactElement => (
    <canvas id="preview" css={{
        border: "1px solid #DCDFE6",
        width: "100%",
        height: "100%"
    }}></canvas>
)

export default Preview
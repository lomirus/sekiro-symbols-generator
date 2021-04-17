import { ReactElement } from 'react';

import Box from '../Box';

const SizeOptions = (): ReactElement => (
    <Box title="Size">
        <div style={{
            display: "grid",
            gridTemplateColumns: "auto auto"
        }}>
            <span>Width</span><input type="text" />
            <span>Height</span><input type="text" />
        </div>
    </Box>
)

export default SizeOptions
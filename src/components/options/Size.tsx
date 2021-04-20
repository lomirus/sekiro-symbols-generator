import { ReactElement } from 'react';

import Box from '../Box';
import TextInput from '../TextInput';

const SizeOptions = (): ReactElement => (
    <Box title="Size">
        <div style={{
            display: "grid",
            gridTemplateColumns: "80px auto",
            rowGap: "5px",
            alignItems: "center",
        }}>
            <span>Width</span><TextInput />
            <span>Height</span><TextInput />
        </div>
    </Box>
)

export default SizeOptions
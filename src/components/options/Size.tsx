import { ReactElement } from 'react';

import Box from '../Box';
import TextInput from '../TextInput';

const SizeOptions = (): ReactElement => (
    <Box title="Size">
        <div css={{
            display: "grid",
            gridTemplateColumns: "80px auto",
            rowGap: "5px",
            alignItems: "center",
            "&>span": {
                userSelect: "none",
            }
        }}>
            <span>Width</span><TextInput />
            <span>Height</span><TextInput />
        </div>
    </Box>
)

export default SizeOptions
import { ReactElement } from 'react';

import Box from '../Box';

const BackgroundOptions = (): ReactElement => (
    <Box title="Background">
        <div style={{
            display: "grid",
            gridTemplateColumns: "auto auto"
        }}>
            <div>
                <input type="radio" name="background" id="Image" />
                <label htmlFor="Image">Image</label>
            </div>
            <input type="file" />
            <div>
                <input type="radio" name="background" />
                <label htmlFor="Color">Color</label>
            </div>
            <input type="text" />
            <div>
                <input type="radio" name="background" />
                <label htmlFor="None">None</label>
            </div>
        </div>
    </Box>
)

export default BackgroundOptions
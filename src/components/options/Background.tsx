import { ReactElement } from 'react';

import { FileInput } from '../Buttons';
import TextInput from '../TextInput'
import Box from '../Box';

const BackgroundOptions = (): ReactElement => (
    <Box title="Background">
        <div style={{
            display: "grid",
            gridTemplateColumns: "80px auto",
            rowGap: "5px",
            alignItems: "center",
        }}>
            <div>
                <input type="radio" name="background" id="Image" />
                <label htmlFor="Image">Image</label>
            </div>
            <FileInput />

            <div>
                <input type="radio" name="background" />
                <label htmlFor="Color">Color</label>
            </div>
            <TextInput />

            <div>
                <input type="radio" name="background" />
                <label htmlFor="None">None</label>
            </div>
        </div>
    </Box>
)

export default BackgroundOptions
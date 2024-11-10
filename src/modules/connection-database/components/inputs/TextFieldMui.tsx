import React from 'react';
import {
    Box,

    TextField
} from "@mui/material";

function TextFieldMui() {

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <TextField
                id="outlined-required"
                label="Select"
                defaultValue="Hello World"
                sx={{ width: '100%'}}
            />

        </Box>
    );
}

export default TextFieldMui;
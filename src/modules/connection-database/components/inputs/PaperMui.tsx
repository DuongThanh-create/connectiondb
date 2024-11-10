import {Box} from "@mui/material";

function PaperMui() {
    return (
        <Box
            sx={{
                    p: 1,
                    my: 1,
                    bgcolor: '#d4cfcf',
                    color: 'grey.800',
                    border: '1px solid',
                    borderColor: 'grey.300',
                    borderRadius: 2,
                    fontSize: 20,
                    fontWeight: '700',
                    textAlign: 'center',

                }}
            >
                QUERY FROM TO WEB
            </Box>
    );
}

export default PaperMui;
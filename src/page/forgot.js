import React, { Component } from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

class Lupa extends Component {
    render() {
        return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Box width={800} height={300} bgcolor="grey.300" p={1} my={0.5}>
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <TextField id="standard-basic" label="Masukan Username" />
                        <br></br>
                        <Button variant="contained" color="secondary" style={{ minWidth: '185px' }}>Next</Button>
                    </div>
                </Box >
            </ div >
        )
    }
}

export default Lupa
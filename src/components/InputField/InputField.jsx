import React from 'react'
import TextField from '@mui/material/TextField';

export default function InputField({ label, type }) {
    return (
        <TextField id="standard-basic" label={label} variant="standard" type={type} />
    )
}

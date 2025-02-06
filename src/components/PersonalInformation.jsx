import React, { useEffect, useState } from 'react'
import {TextField, Grid } from '@mui/material';

const PersonalInformation = ({userData}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('carBookingData'));
        if (data) {
            setUser(data);
        }
    }, []);
    
    return (
        <>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField
                            label="National ID"
                            value={userData.nationalId}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Month"
                            value={userData.month}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Year"
                            value={userData.year}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            label="Mobile"
                            value={userData.mobile}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Make"
                            value={userData.make}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Model"
                            value={userData.model}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            label="Financing Type"
                            value={userData.financingType}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Bank"
                            value={userData.bank}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Income Source"
                            value={userData.incomeSource}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            label="Income"
                            value={userData.income}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Company Name"
                            value={userData.companyName}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Estimated Amount"
                            value={userData.estimatedAmount.join(' - ')}
                            fullWidth
                            InputProps={{
                                readOnly: true,
                                style: { fontSize: '1.25rem' } // Increase font size for input text
                            }}
                            InputLabelProps={{
                                style: { fontSize: '1.5rem' } // Increase font size for label
                            }}
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default PersonalInformation

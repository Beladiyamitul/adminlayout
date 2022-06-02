import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';


function Medicines(props) {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');
    const [datamed, setDatamed] = useState([]);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSubmit = () => {
        // console.log(name,price,quantity,expiry);


        let data = {
            id: Math.floor(Math.random() * 1000),
            name,
            price,
            quantity,
            expiry
        }
        let medicinesdata = JSON.parse(localStorage.getItem('Medicines'));

        if (medicinesdata === null) {
            localStorage.setItem('Medicines', JSON.stringify([data]));

        } else {
            medicinesdata.push(data)
            localStorage.setItem('Medicines', JSON.stringify(medicinesdata));
        }

        handleClose();
        getData();
        setName('');
        setPrice('');
        setQuantity('');
        setExpiry(''); 

        

    }
    const getData = () => {
        let getMedData = JSON.parse(localStorage.getItem('Medicines'));

        if (getMedData !== null){
            setDatamed(getMedData);
        }

    }   

    useEffect(
        () => {
            getData();
        },
    [])


    const columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
    ];

    

    return (
        <div>
            <h1>Medicines Component</h1>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicines
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={datamed}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Medicines</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Medicines Name"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        name="price"
                        label="Medicines price"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPrice(e.target.value)}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantity"
                        name="quantity"
                        label="Medicines quantity"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setQuantity(e.target.value)}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="expiry"
                        name="expiry"
                        label="Medicines expiry"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setExpiry(e.target.value)}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Medicines;
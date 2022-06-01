import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Medicines(props) {

    const [open, setOpen] = useState(false);
    const [name , setName] = useState('');
    const [price , setPrice] = useState('');
    const [quantity , setQuantity] = useState('');
    const [expiry , setExpiry] = useState('');


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleSubmit = () => {
        console.log(name,price,quantity,expiry);
     

        let data = {
            id:Math.floor(Math.random() * 1000),
            name,
            price,
            quantity,
            expiry
        }
        localStorage.setItem("Medicines",JSON.stringify(data));
        console.log(data);

        handleClose();
        setName('');
        setPrice('');
        setQuantity('');
        setExpiry('');
    }
    

    return (
        <div>
            <h1>Medicines Component</h1>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicines
            </Button>
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
                        onChange={(e)=> setName(e.target.value)}
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        name="price"
                        label="Medicines price"
                        fullWidth
                        variant="standard"
                        onChange={(e)=> setPrice(e.target.value)}
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantity"
                        name="quantity"
                        label="Medicines quantity"
                        fullWidth
                        variant="standard"
                        onChange={(e)=> setQuantity(e.target.value)}
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="expiry"
                        name="expiry"
                        label="Medicines expiry"
                        fullWidth
                        variant="standard"
                        onChange={(e)=> setExpiry(e.target.value)}
                        
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
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import * as yup from 'yup';
import { useFormik, Formik, Form } from 'formik';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';




function Medicines(props) {

    const [open, setOpen] = useState(false);
    const [dopen, setDOpen] = useState(false);
    const [editopen, setEditopen] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');
    const [datamed, setDatamed] = useState([]);
    const [did, setDid] = useState("");


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickEditOpen = () => {
        setEditopen(true);
    };

    const handleDOpen = (id) => {
        setDOpen(true);
        setDid(id);
    };

    const handleClose = () => {
        setOpen(false);
        setDOpen(false);
        setEditopen(false);
    };



    const handleSubmit = (values) => {
        // console.log(name,price,quantity,expiry);


        let data = {
            id: Math.floor(Math.random() * 1000),
            name: values.name,
            price: values.price,
            quantity: values.quantity,
            expiry: values.expiry
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

        if (getMedData !== null) {
            setDatamed(getMedData);
        }

    }

    useEffect(
        () => {
            getData();
        },
        [])


    const handleDelete = () => {
        let removedata = JSON.parse(localStorage.getItem("Medicines"));

        let filterdata = removedata.filter((r, i) => r.id !== did);

        localStorage.setItem("Medicines", JSON.stringify(filterdata));
        getData();
        setDOpen(false);

    }


    const columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Button startIcon={<DeleteIcon />} onClick={() => handleDOpen(params.id)}></Button>

                        <IconButton aria-label="edit" onClick={()=>handleClickEditOpen()}><ModeEditIcon /></IconButton>

                    </>
                )
            }

        },
    ];
    
    let schema = yup.object().shape({
        name: yup.string().required("please enter medicine name"),
        price: yup.string().required("please enter medicine price"),
        quantity: yup.string().required("please enter medicine quantity"),
        expiry: yup.string().required("please enter medicine expiry"),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            expiry: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            handleSubmit(values);

        },
    });







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

                <Formik values={formik}>
                    <Form key={formik} onSubmit={formik.handleSubmit}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                name="name"
                                label="Medicines Name"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.name ? <p>{formik.errors.name}</p> : null}
                            <TextField
                                autoFocus
                                margin="dense"
                                id="price"
                                name="price"
                                label="Medicines price"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="quantity"
                                name="quantity"
                                label="Medicines quantity"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="expiry"
                                name="expiry"
                                label="Medicines expiry"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>

                        </DialogContent>
                    </Form>
                </Formik>

            </Dialog>

            <Dialog
                open={dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure Delete Data?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={() => handleDelete()} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>


            <Dialog open={editopen} onClose={handleClose}>
                <DialogTitle>Edit Medicines</DialogTitle>

                <Formik values={formik}>
                    <Form key={formik} onSubmit={formik.handleSubmit}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                name="name"
                                label="Medicines Name"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.name ? <p>{formik.errors.name}</p> : null}
                            <TextField
                                autoFocus
                                margin="dense"
                                id="price"
                                name="price"
                                label="Medicines price"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="quantity"
                                name="quantity"
                                label="Medicines quantity"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="expiry"
                                name="expiry"
                                label="Medicines expiry"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>

                        </DialogContent>
                    </Form>
                </Formik>

            </Dialog>
        </div>
    );
}

export default Medicines;
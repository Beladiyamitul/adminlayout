import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik, Formik, Form } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import * as yup from 'yup';


function Doctor(props) {

    const [open, setOpen] = useState(false);
    const [docopen, setDocopen] = useState(false);
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [sallery, setSallery] = useState('');
    const [post, setPost] = useState('');
    const [experience, setExperience] = useState('');
    const [datadoc , setDatadoc] = useState('');
    const [docdid , setDocdid] = useState('');
    const [update , setUpdate] = useState('');
    const [eid , setEid] = useState('');


    const handleClickOpen = () => {
        setOpen(true);
    };
   
    const handleDClickOpen = (id) => {
        setDocopen(true);
        setDocdid(id);
      
    };

    const handleClickEditOpen = (params) => {
        console.log(params.row);
        setOpen(true);

        formik.setValues({
            name: params.row.name,
            email: params.row.email,
            sallery: params.row.sallery,
            post: params.row.post,
            experience: params.row.experience,
        })
        setEid(params.id);
        setUpdate(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDocopen(false);
        

    };

    let schema = yup.object().shape({
        name: yup.string().required("Please enter name"),
        email: yup.string().email("Please enter valid name").required("Please enter name"),
        post: yup.string().required("Please enter Post"),
        experience: yup.string().required("Please enter experience")

    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            post: '',
            experience: ''
        },
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {

            if (update) {
                handleEdit(values)   
            }else{

            //   alert(JSON.stringify(values, null, 2));
            const {
                name,
                email,
                sallery,
                post,
                experience
            } = values;

            const docdata = {
                id: Math.floor(Math.random() * 1000),
                name,
                email,
                sallery,
                post,
                experience
            }

            let newdata = JSON.parse(localStorage.getItem("doctor"));
            console.log(newdata);

            if (newdata == null) {
                localStorage.setItem('doctor', JSON.stringify([docdata]));
            } else {
                newdata.push(docdata)
                localStorage.setItem('doctor', JSON.stringify(newdata));
            }

            handleClose();
            getData();
            // console.log(data);
            resetForm();
        }
      
        },
        
       
    });


    const handleEdit = (values) =>{
        console.log(values)

        let eData = JSON.parse(localStorage.getItem("doctor"));
        console.log(eData);

        let editData = eData.map((u) => {
            if (u.id == eid) {
                return(
                    {id: eid , ...values}
                )
            }else{
                return u;
            }
        });

        localStorage.setItem("doctor", JSON.stringify(editData));
        getData();
        setOpen(false);
        setUpdate(false);
        setEid();

    }


    const getData = () => {
        let getDocData =JSON.parse( localStorage.getItem('doctor'));

        if(getDocData !== null){
            setDatadoc(getDocData);
        }
    }

    useEffect (
        () =>{
            getData();
        },
    [])

    const handleDelete = () => {
        let deldata = JSON.parse(localStorage.getItem("doctor"));

        let filterdata = deldata.filter((r, i) => r.id !== docdid);

        localStorage.setItem("doctor", JSON.stringify(filterdata));
        getData();
        setDocopen(false);

    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'sallery', headerName: 'Sallery', width: 130 },
        { field: 'post', headerName: 'Post', width: 130 },
        { field: 'experience', headerName: 'Experience', width: 130 },
        { field: 'action', 
        headerName: 'Action',
         width: 130,
         renderCell : (params) =>{
            return (
                <>
                
                <Button startIcon={<DeleteIcon />} onClick={() =>handleDClickOpen(params.id)}></Button>
                
                <IconButton aria-label="edit" onClick={()=>handleClickEditOpen(params)}>
                <ModeEditIcon />
              </IconButton>
                </>
               
            )
         }
        },

    ];


    return (
        <div>
            <h1>Doctor Data</h1>
            <Button variant="outlined" onClick={handleClickOpen}>
                Empoyee Data
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={datadoc}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Empoyee Data</DialogTitle>
                <Formik value={formik}>
                    <Form key={formik} onSubmit={formik.handleSubmit}>
                        <DialogContent>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                name="name"
                                value={formik.values.name}
                                label="Employrr Name"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            {
                                formik.errors.name ? <p>{formik.errors.name}</p> : null
                            }

                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                name="email"
                                value={formik.values.email}
                                label="Employrr Email"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}


                            />
                                {
                                    formik.errors.email ? <p>{formik.errors.email}</p> : null
                                }
                            <TextField
                                autoFocus
                                margin="dense"
                                id="sallery"
                                name="sallery"
                                value={formik.values.sallery}
                                label="Employrr Sallery"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />

                            <TextField
                                autoFocus
                                margin="dense"
                                id="post"
                                name="post"
                                value={formik.values.post}
                                label="Employrr Post"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            {
                                formik.errors.post ? <p>{formik.errors.post}</p> : null
                            }
                            <TextField
                                autoFocus
                                margin="dense"
                                id="experience"
                                name="experience"
                                value={formik.values.experience}
                                label="Employrr Experience"
                                fullWidth
                                variant="standard"
                                onChange={formik.handleChange}

                            />
                            {
                                formik.errors.experience ? <p>{formik.errors.experience}</p> : null
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>

           

            <Dialog
                open={docopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure Delete Data?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={ handleDelete} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>


        </div>
    );
}

export default Doctor;
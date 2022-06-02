import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik,Formik,Form } from 'formik';
import * as yup from 'yup';


function Doctor(props) {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [sallery, setSallery] = useState(false);
    const [post, setPost] = useState(false);
    const [experience, setExperience] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleSubmit = () => {
        let data = {
            id: Math.floor(Math.random() * 1000),
            name,
            email,
            sallery,
            post,
            experience
        }
        console.log(data);
    }
    const handleClose = () => {
      setOpen(false);
    };



    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          post: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      let schema = yup.object().shape({
        name: yup.string().required("Please enter name"),
        email: yup.string().email("Please enter valid name") .required("Please enter name"),
        post: yup.string().required("Please enter Post"),
        createdOn: yup.date().default(function () {
          return new Date();
        }),
      });

    return (
        <div>
            <h1>Doctor Data</h1>
            <Button variant="outlined" onClick={handleClickOpen}>
                Empoyee Data
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Empoyee Data</DialogTitle>
                <Formik value={formik}>
                    <Form>
                <DialogContent>
                
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Employrr Name"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="email"
                        label="Employrr Email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="sallery"
                        name="sallery"
                        label="Employrr Sallery"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setSallery(e.target.value)}
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="post"
                        name="post"
                        label="Employrr Post"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPost(e.target.value)}
                        
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="experience"
                        name="experience"
                        label="Employrr Experience"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setExperience(e.target.value)}
                        
                    />
                </DialogContent>    
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button  type="submit"onClick={handleSubmit}>Submit</Button>
                </DialogActions>
                </Form>
                </Formik>
            </Dialog>
        </div>
    ); 
}

export default Doctor;
import React, { useEffect, useState } from 'react';
import { Container, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Viewproduct = () => {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5999/productdetails')
            .then((res) => {
                setRows(res.data);
                console.log(res);
            })
            .catch((error) => {
                console.log('error:', error);
            });
    }, []);

    function del_Value(id) {
        axios.delete('http://localhost:5999/deleteproduct/' + id)
            .then((res) => {
                alert('Data deleted');
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function update_Value(val) {
        navigate('/addproduct', { state: { val } });
    }

    return (
        <Container sx={{ py: 4 }}>
            {rows.map((row, index) => (
                <Card sx={{ minWidth: 275, mb: 3, boxShadow: 3, '&:hover': { boxShadow: 6 } }} key={index}>
                    <CardContent>
                        <Typography variant="h6" component="div" gutterBottom>
                            {row.productName}
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary">
                            Price: ${row.productPrice}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" paragraph>
                            {row.productDescription}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Category: {row.productCategory}
                        </Typography>

                        {/* Uncomment and style the image if available */}
                        {/* <img src={row.productImage} alt={row.productName} style={{ width: '100%', height: 'auto', marginTop: '10px' }} /> */}
                    </CardContent>
                    <CardActions>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            onClick={() => update_Value(row)}
                            sx={{ mr: 1 }}
                        >
                            Update Details
                        </Button>
                        <Button 
                            variant='contained' 
                            color='secondary' 
                            onClick={() => del_Value(row._id)}
                        >
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Container>
    );
}

export default Viewproduct;

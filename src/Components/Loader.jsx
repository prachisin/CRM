import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const Loader = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
            navigate('/Login'); // Use navigate instead of history.push
        }, 3000);

        // Clear timeout on component unmount to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <div className='loader'>
            {loading ? (
                <Card sx={{ width:'fit-content',marginLeft:80,marginTop:30}}>
                    <CardContent>
                       
                            <img src="https://img.icons8.com/?size=96&id=lcYmxfUf3nvb&format=gif" alt="no_img" />
                            
                    </CardContent>


                    </Card>
                    ) : (
                        
                    <CardContent>
                     
                    </CardContent>
               
            )}
              
        </div>
    );
};

export default Loader;

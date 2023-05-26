import React from 'react';
import Rating from '@mui/material/Rating';
import { CardActionArea, CardMedia, Typography, Card , Grid, CardContent, Box} from "@mui/material";
const CardItem = ({product}) => {    
    const {title, thumbnail, price, rating, category, discountPercentage, brand, stock} = product;
    return (
        <>
            <Grid item xs={12} sm={6} md={4} padding={2} spacing={2}>
                <Card sx={{ height : '370px' , marginTop : 5, boxShadow : '5px'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="210"
                            width="220"
                            image={thumbnail || ""}
                            alt="User Image"
                            sx={{minHeight: '50px'}}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '45%',
                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                            color: 'white',
                            padding: '10px',
                            borderBottomRightRadius: '25px'
                          }}
                        >
                            <Typography variant="h5">{category}</Typography>
                        </Box>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 4,
                            right: 4,
                            width: '14%',
                            bgcolor: 'RGB(82, 4, 20)',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '10px',
                            justifyContent: "center",
                          }}
                        >
                            <Typography variant="h6" sx={{justifyContent: "center"}}>{`${Math.round(discountPercentage)}%`}</Typography>
                        </Box>
                        <CardContent sx={{marginTop : 2}}>
                            <Box>
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        <Rating name="size-small" value={rating} size="small" precision={0.1} readOnly />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {`Price:  $${price}`}
                                    </Typography>
                                </Box>
                                <Box marginBottom={2} sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                    <Typography variant="body2" color="text.secondary">
                                        {`Company :  ${brand}`}
                                    </Typography> 
                                    <Typography variant="body2" color="text.secondary">
                                        {`Avaiable Stock :  ${stock}`}
                                    </Typography> 
                                </Box>                              
                                <Grid container>
                                    <Grid item xs>
                                    </Grid>
                                    <Grid item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>    
            </Grid>  
        </>
    )
}

export default CardItem
// Footer.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#EEF2F6',
        py: 5,
        mt: 'auto',
        position: 'absolute',
        bottom: '1',
        width: '100%',
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              THÔNG TIN CỬA HÀNG 
            </Typography>
            <Typography variant='body2'>
              CỬA HÀNG QUẦN ÁO TRẺ EM MILEBY
            </Typography>
            <Typography variant='body2'>Địa chỉ: 28 Trần Nguyên Đán, Định Công, Hoàng Mai, Hà Nội</Typography>
            <Typography variant='body2'></Typography>
            <Box sx={{ mt: 2 }}>
              <Link href='#' color='inherit' sx={{ mr: 2 }}>
                <Facebook />
              </Link>
              <Link href='#' color='inherit' sx={{ mr: 2 }}>
                <Instagram />
              </Link>
              <Link href='#' color='inherit'>
                <Twitter />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              
            </Typography>
            <Typography variant='body2'>
              <Link href='#' color='inherit'>
                
              </Link>
            </Typography>
            <Typography variant='body2'>
              <Link href='#' color='inherit'>
               
              </Link>
            </Typography>
            <Typography variant='body2'>
              <Link href='#' color='inherit'>
                
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              LIÊN HỆ
            </Typography>
            <Typography variant='body2'>
              {/* <Link href='#' color='inherit'> */}
                Email: mileby28@gmail.com
              {/* </Link> */}
            </Typography>
            <Typography variant='body2'>
              {/* <Link href='#' color='inherit'> */}
                Số điện thoại: 0388 343 898
              {/* </Link> */}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

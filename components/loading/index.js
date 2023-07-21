import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <>
    <div style={{margin : '12px' , width : '90%' , display: 'flex' , justifyContent: 'center'}}>
    <div style={{display : 'flex' , margin : '5px', justifyContent: 'space-evenly' , flexWrap : 'wrap'}}> 
    <div className='loader'>
    <Stack spacing={1} >
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={320} height={200} />
      {/* <Skeleton variant="text" sx={{ fontSize: '4rem' }} /> */}
      <Skeleton variant="rounded" width={80} height={40} />
    </Stack>
    </div>
    <div className='loader'>
    <Stack spacing={1} >
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={320} height={200} />
      {/* <Skeleton variant="text" sx={{ fontSize: '4rem' }} /> */}
      <Skeleton variant="rounded" width={80} height={40} />
    </Stack>
    </div>
    <div className='loader'>
    <Stack spacing={1} >
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={320} height={200} />
      {/* <Skeleton variant="text" sx={{ fontSize: '4rem' }} /> */}
      <Skeleton variant="rounded" width={80} height={40} />
    </Stack>
    </div>


    {/* <div style={{display : 'flex' , margin : '5px', justifyContent: 'space-between'}}>  */}
    <div className='loader'>
    <Stack spacing={1} >
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={320} height={200} />
      {/* <Skeleton variant="text" sx={{ fontSize: '4rem' }} /> */}
      <Skeleton variant="rounded" width={80} height={40} />
    </Stack>
    </div>
    <div className='loader'>
    <Stack spacing={1} >
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={320} height={200} />
      {/* <Skeleton variant="text" sx={{ fontSize: '4rem' }} /> */}
      <Skeleton variant="rounded" width={80} height={40} />
    </Stack>
    </div>
    <div className='loader'>
    <Stack spacing={1} >
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={320} height={200} />
      {/* <Skeleton variant="text" sx={{ fontSize: '4rem' }} /> */}
      <Skeleton variant="rounded" width={80} height={40} />
    </Stack>
    </div>
    </div>
    </div>
    </>
  );
}
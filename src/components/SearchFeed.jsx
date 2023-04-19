import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromApi } from '../utils/fetchFromApi';
import { Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromApi(`search?part=snippet&q=${searchTerm}`);
      setVideos(data.items);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' md={2} sx={{ color: '#fff' }}>
        Sökresultat för: <span style={{ color: '#F31503' }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;

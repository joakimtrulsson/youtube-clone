import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const channelData = await fetchFromApi(`channels?part=snippet&id=${id}`);
      setChannelDetail(channelData?.items[0]);

      const videoData = await fetchFromApi(`search?channelId=${id}&part=snippet&&order=date`);
      setVideos(videoData?.items);
    };
    fetchData();
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <article
          style={{
            background: 'linear-gradient(90deg, rgba(209,141,62,1) 0%, rgba(126,227,254,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={'-125px'} />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;

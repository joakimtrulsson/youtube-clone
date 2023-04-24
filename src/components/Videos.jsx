import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return 'Laddar...';

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((video, id) => {
        return (
          <Box key={id}>
            {video.id.channelId && <ChannelCard channelDetail={video} />}
            {video.id.videoId && <VideoCard video={video} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;

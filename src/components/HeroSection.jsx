import React, { useEffect, useState } from 'react';

const VimeoVideo = () => {
  const [videoExists, setVideoExists] = useState(true); // Assume video exists by default

  useEffect(() => {
    // Load Vimeo Player API script dynamically
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleLoadError = () => {
    setVideoExists(false); // Set videoExists to false if load error occurs
  };

  return (
    <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
      {videoExists ? (
        <iframe
          src="https://player.vimeo.com/video/966384364?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
          title="Vimeo Video"
          onError={handleLoadError}
        ></iframe>
      ) : (
        <p>Sorry, This video does not exist.</p>
      )}
    </div>
  );
};

export default VimeoVideo;

import { useState, useEffect } from 'react';

type TLocalMedia = () => {
  localStream: MediaStream | undefined, loading: boolean, error: boolean
};

export const useLocalMedia: TLocalMedia = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [localStream, setLocalStream] = useState<MediaStream>();

  useEffect(() => {
    (async () => {
      try {
        const response = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { min: 640, ideal: 1280, max: 1920 },
            height: { min: 480, ideal: 720 }
          }
        });
        setLocalStream(response);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return { localStream, loading, error };
}
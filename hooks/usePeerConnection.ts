export const usePeerConnection = (): RTCPeerConnection => {
  const servers: RTCConfiguration = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ]
      }
    ],
    iceCandidatePoolSize: 4
  };

  const peerConnection = new RTCPeerConnection(servers);
  return peerConnection;
}
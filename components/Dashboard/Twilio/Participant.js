import React, { useState, useEffect, useRef } from 'react'

const Participant = props => {
  // variables
  const { participant, viewport, selectParticipant } = props
  const [videoTracks, setVideoTracks] = useState([])
  const [audioTracks, setAudioTracks] = useState([])

  const videoRef = useRef()
  const audioRef = useRef()

  // handlers
  const trackpubsToTracks = trackMap =>
    Array.from(trackMap.values())
      .map(publication => publication.track)
      .filter(track => track !== null)

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks))
    setAudioTracks(trackpubsToTracks(participant.audioTracks))

    const trackSubscribed = track => {
      if (track.kind === 'video') {
        setVideoTracks(videoTracks => [...videoTracks, track])
      } else if (track.kind === 'audio') {
        setAudioTracks(audioTracks => [...audioTracks, track])
      }
    }

    const trackUnsubscribed = track => {
      if (track.kind === 'video') {
        setVideoTracks(videoTracks => videoTracks.filter(v => v !== track))
      } else if (track.kind === 'audio') {
        setAudioTracks(audioTracks => audioTracks.filter(a => a !== track))
      }
    }

    participant.on('trackSubscribed', trackSubscribed)
    participant.on('trackUnsubscribed', trackUnsubscribed)

    return () => {
      setVideoTracks([])
      setAudioTracks([])
      participant.removeAllListeners()
    }
  }, [participant])

  useEffect(() => {
    const videoTrack = videoTracks[0]
    if (videoTrack) {
      videoTrack.attach(videoRef.current)
      return () => {
        videoTrack.detach()
      }
    }
  }, [videoTracks])

  useEffect(() => {
    const audioTrack = audioTracks[0]
    if (audioTrack) {
      audioTrack.attach(audioRef.current)
      return () => {
        audioTrack.detach()
      }
    }
  }, [audioTracks])

  return (
    <div
      className="flex justify-center mt-1 bg-black cursor-pointer"
      style={{
        border: '1px solid #C4C4C4',
      }}
      onClick={() => selectParticipant(participant)}
    >
      <video
        style={{ width: viewport === 'mobile' ? '120px' : '240px', height: viewport === 'mobile' ? '67px' : '134px' }}
        ref={videoRef}
        autoPlay={true}
      />
      <audio ref={audioRef} autoPlay={true} muted={false} />
    </div>
  )
}

export default Participant

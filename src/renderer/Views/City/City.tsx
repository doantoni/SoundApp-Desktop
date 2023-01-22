import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Sound {
  title: string;
  pathToAudio: string;
}

const sounds: Sound[] = [
  {
    title: 'Horn',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674420449/SoundApp/City/car-horn-6408_xa4jtl.mp3',
  },
  {
    title: 'Traffic',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674421165/SoundApp/City/city-traffic-outdoor-6414_kscvsn.mp3',
  },
  {
    title: 'Highway',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674421197/SoundApp/City/highway-14475_o5uw9b.mp3',
  },
];

const City = () => {
  const navigate = useNavigate();

  const [playing, setPlaying] = useState<any>();

  useEffect(() => {
    if (playing) playing.play();
  }, [playing]);

  const playSound = async (pathToAudio?: string) => {
    if (playing) playing.pause();
    const audio = new Audio(pathToAudio);
    setPlaying(audio);
  };

  const stopSound = () => {
    if (playing) {
      playing.pause();
      setPlaying(null);
    }
  };
  return (
    <div className="buttons">
      <button onClick={() => navigate('/')} className="home" type="button">
        <span role="img" aria-label="filip">
          🏠
        </span>
        Home
      </button>
      {playing && (
        <button onClick={stopSound} className="stop" type="button">
          <span role="img" aria-label="home">
            ⛔
          </span>
          Stop Sound
        </button>
      )}
      {sounds.map((sound) => {
        return (
          <button onClick={() => playSound(sound.pathToAudio)} type="button">
            <span role="img" aria-label="folded hands">
              🌃
            </span>
            {sound.title}
          </button>
        );
      })}
    </div>
  );
};

export default City;

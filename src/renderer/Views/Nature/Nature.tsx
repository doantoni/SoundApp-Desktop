import { electron } from 'process';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Sound {
  title: string;
  pathToAudio: string;
}

const sounds: Sound[] = [
  {
    title: 'Rain',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674420461/SoundApp/Nature/rain-and-thunder-nature-sounds-7803_ag4jsm.mp3',
  },
  {
    title: 'Tropical',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674421445/SoundApp/Nature/nature-soundstropicaljunglebirds-108380_lhxygu.mp3',
  },
  {
    title: 'Fire',
    pathToAudio:
      'https://res.cloudinary.com/doantoni/video/upload/v1674421452/SoundApp/Nature/crackling-fireplace-nature-sounds-8012_pvpv96.mp3',
  },
];

const Nature = () => {
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
        <span role="img" aria-label="home">
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
              🌳
            </span>
            {sound.title}
          </button>
        );
      })}
    </div>
  );
};

export default Nature;

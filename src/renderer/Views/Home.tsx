import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from 'renderer/Components/Title/Title';
import icon from '../../../assets/icon.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="buttons">
        <img width="200" alt="icon" src={icon} />
      </div>
      <Title title="SoundsApp" />
      <div className="buttons">
        <button onClick={() => navigate('/city')} type="button">
          <span role="img" aria-label="filip">
            🌃
          </span>
          City
        </button>

        <button onClick={() => navigate('/nature')} type="button">
          <span role="img" aria-label="folded hands">
            🌳
          </span>
          Nature
        </button>
      </div>
    </div>
  );
};

export default Home;

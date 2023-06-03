import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Makanan Tradisional </h2>
      <div className="food-card">
        <div className="food">
          <img src="food1.jpg" alt="Gado-Gado" className="food-image" />
          <div className="food-details">
            <h3 className="food-name">Gado-Gado</h3>
            <p className="food-description">
            Gado-gado adalah salad sayuran dengan kuah kacang, terdiri dari campuran sayuran segar yang disajikan dengan bumbu kacang gurih.
            </p>
            <Link to="/food1.jpg" className="food-link">
              Lihat Detail
            </Link>
          </div>
        </div>
        <div className="food">
          <img src="food2.jpg" alt="Rawon" className="food-image" />
          <div className="food-details">
            <h3 className="food-name">Rawon</h3>
            <p className="food-description">
            Rawon adalah sup daging hitam khas Jawa Timur yang menggunakan bumbu kluwek, memberikan warna hitam dan rasa khas pada hidangan tersebut.
            </p>
            <Link to="/food2.jpg" className="food-link">
              Lihat Detail
            </Link>
          </div>
        </div>
        <div className="food">
          <img src="food3.jpg" alt="Gudeg" className="food-image" />
          <div className="food-details">
            <h3 className="food-name">Gudeg</h3>
            <p className="food-description">
            Gudeg adalah masakan nangka muda yang dimasak dalam santan, dengan rasa manis dan lembut, sering disajikan dengan nasi, ayam, telur, dan sambal goreng krecek.
            </p>
            <Link to="/food3.jpg" className="food-link">
              Lihat Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { Component } from 'react';
import { SpringGrid, measureItems, layout } from 'react-stonecutter';
import './App.css';
import data from './data';

const Grid = measureItems(SpringGrid, { measureImages: true });

const Card = ({ title, image }) => (
  <div className="Card">
    <h3>{title}</h3>
    <img src={image} alt={title} />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid
          component="ul"
          columns={5}
          columnWidth={150}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.pinterest}
        >
          {data.map(({ name, image }) => (
            <li key={name}>
              <Card title={name} image={image} />
            </li>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;

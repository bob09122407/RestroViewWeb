import React, { Component } from 'react';
import './inrestro.css';

class Price extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: 2500,
      maxPrice: 7500,
    };
  }

  componentDidMount() {
    const rangeInput = document.querySelectorAll('.range-input input');
    const priceInput = document.querySelectorAll('.price-input input');
    const range = document.querySelector('.slider .progress');
    const priceGap = 1000;

    priceInput.forEach((input) => {
      input.addEventListener('input', (e) => {
        let minPrice = parseInt(priceInput[0].value, 10);
        let maxPrice = parseInt(priceInput[1].value, 10);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
          if (e.target.className === 'input-min') {
            rangeInput[0].value = minPrice;
            range.style.left = (minPrice / rangeInput[0].max) * 100 + '%';
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
          }
        }
      });
    });

    rangeInput.forEach((input) => {
      input.addEventListener('input', (e) => {
        let minVal = parseInt(rangeInput[0].value, 10);
        let maxVal = parseInt(rangeInput[1].value, 10);

        if (maxVal - minVal < priceGap) {
          if (e.target.className === 'range-min') {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';

          this.setState({ minPrice: minVal, maxPrice: maxVal });
        }
      });
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <header>
            <h2>Price Range</h2>
           
          </header>
          <div className="price-input">
            <div className="field">
              <span>Min</span>
              <input
                type="number"
                className="input-min"
                value={this.state.minPrice}
              />
            </div>
            <div className="separator">-</div>
            <div className="field">
              <span>Max</span>
              <input
                type="number"
                className="input-max"
                value={this.state.maxPrice}
              />
            </div>
          </div>
          <div className="slider">
            <div className="progress"></div>
          </div>
          <div className="range-input">
            <input
              type="range"
              className="range-min"
              min="0"
              max="10000"
              value={this.state.minPrice}
              step="100"
            />
            <input
              type="range"
              className="range-max"
              min="0"
              max="10000"
              value={this.state.maxPrice}
              step="100"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Price;

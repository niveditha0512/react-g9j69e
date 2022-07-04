import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      {' '}
      Super Heroes!
    </h1>
    <div className="parent">
      <div className="container" id="image1">
        <img
          src="https://cdn.pocket-lint.com/r/s/970x/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj-jpg.webp"
          alt="spiderman"
        />
        <div className="overlay">
          <div className="text">Spider-Man</div>
        </div>
      </div>

      <div className="container" id="image2">
        <img
          src="https://www.comingsoon.net/assets/uploads/2022/04/infinity-war-768x429.jpg"
          alt="iornman"
        />
        <div className="overlay">
          <div class="text">Iorn-Man</div>
        </div>
      </div>
      <div className="container" id="image3">
        <img
          src="https://www.indiewire.com/wp-content/uploads/2019/04/D5Up3sIW0AEMM3R.jpg?resize=800,450"
          alt="thor"
        />
        <div className="overlay">
          <div className="text">Thor</div>
        </div>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);

/*
const fname = 'Niveditha',
  lname = 'AT',
number1 = 5;
ReactDOM.render(
  <div>
    <h1>Hello my name is {fname + ' ' + lname}</h1>
    <p>My lucky number is {number1}</p>
  </div>,
  document.getElementById('root')
);
*/
/*
const name = 'Niveditha';
var date = Date();
var year = new Date().getFullYear();
var month = new Date().getMonth();

ReactDOM.render(
  <div>
    <p>
      <strong>
        the main function from which dynamic year is derieved by using the method - getFullYear() ."{date}"
      </strong>
    </p>
    <p>
      created by {name} 
    </p>
    <p>
      copyright@ {year}
    </p>
  </div>,
  document.getElementById('root')
);
*/

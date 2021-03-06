
import React, { useState } from 'react';
import './../App.css'


export const RandomPage = () => {
  const [random, setRandom] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(1000)


  let number = localStorage.getItem('secretNumber')
  const truth = localStorage.getItem('truth')

  const changeHandler = event => {

    if ('min' === event.target.name) {

      setMin(event.target.value)

    }
    else if ('max' === event.target.name) {
      setMax(event.target.value)

    }
  }
  const Randomize = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + +min;
    return num
  }
  const pressedBtn = () => {
    setRandom('')
    if (number && truth === 'true' && number !== random && number > min && number < max) {
      setRandom(number)
      localStorage.removeItem('secretNumber')

    }
    else {

      let lastNum = (Randomize(min, max))
      setRandom(lastNum)



    }
  }
  const select = (event) => {
    event.target.select()
  }


  return (


    <div class="row ">
      <div class="col s6 center offset-s3">
        <div class="card">
          <div class="card-content black-text">
            <div className='app-wrapper'>
              <div className="title">Испытай удачу</div>
              <div className="luckyTitle">Твое число</div>
              <div className="random" >
                {random}
              </div>
              <div className="btnHover" ><button className='randomBtn' onClick={pressedBtn} >Крутить</button></div>
              <div className="diaptitle">Диапазон</div>
              <div className='otdo'>
                <div className="diap2title">От <input className="input" type="number" onChange={changeHandler} onClick={select} defaultValue={min} min='0' name="min" /> </div>
                <div className="diap2title">До <input className="input" type="number" onChange={changeHandler} onClick={select} defaultValue={max} name="max" /> </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>


  );
};


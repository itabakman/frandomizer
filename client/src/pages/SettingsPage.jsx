import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const SettingsPage = () => {


    const changeHandler = event => {
       localStorage.setItem('secretNumber',event.target.value)
    }
    const changeRadio = event =>{
        if ('true'===event.target.value)
        {
        localStorage.setItem('truth',event.target.value)
        console.log(localStorage.getItem('truth'))
        }
        else if ('false'===event.target.value){
            localStorage.setItem('truth',event.target.value)
            console.log(localStorage.getItem('truth'))
        }

}


    return (
        
           
        
      <div class="col s6 center offset-s3">
      <div class="card">
        <div class="card-content black-text">
          <div className='app-wrapper'>
            <div className="luckyTitle">Введите секретное число</div>
           
            
            <div> <input  className="input"type='number' name='rNumber' onChange={changeHandler}/> </div>
            <div className="secretTitle">Берем ?</div>
            {/* <label>
        <input   className="with-gap" type="radio" name='group1'  value='true' onChange={changeRadio}/>
        <span>Да</span>
      </label>
      <label>
        <input className="with-gap"  type="radio" name='group1' value='false' onChange={changeRadio} />
        <span>Нет</span>
      </label> */}
       <div className='btnCont'>
        <div  ><button className='randomBtn2' value='true' onClick={changeRadio} >Да</button></div>
        <div ><button className='randomBtn2' value='false'onClick={changeRadio} >Нет</button></div>
      </div>
        
        </div>
        </div>
        </div>

        </div>

        
    
    

  
        );
};


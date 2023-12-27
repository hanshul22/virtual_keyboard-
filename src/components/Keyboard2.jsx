import React from 'react'
import Display from './Display'
import { useState } from 'react'
import backspace from '../assets/backspace.png';



export default function Keyboard2() {
    const [inputText, setInputText] = useState('')
    const handleClick = (manya) => {
        setInputText(inputText + manya)
          console.log(inputText)
    }

      const handleDEL=()=>{
        if (typeof expression != "string"){
            let ex1 = inputText.toString()
            ex1 = ex1.substring(0,ex1.length-1)
            setInputText(ex1)
        }else{
            setInputText(inputText.substring(0,inputText.length-1))
        }
        }
  return (
    <>
        <div className="display">
            <Display text={inputText}/>
        </div>

        <div className="rowN">
            <button className="btn" onClick={()=>handleClick('1')}>1</button>
            <button className="btn" onClick={()=>handleClick('2')}>2</button>
            <button className="btn" onClick={()=>handleClick('3')}>3</button>
            <button className="btn" onClick={()=>handleClick('4')}>4</button>
            <button className="btn" onClick={()=>handleClick('5')}>5</button>
            <button className="btn" onClick={()=>handleClick('6')}>6</button>
            <button className="btn" onClick={()=>handleClick('7')}>7</button>
            <button className="btn" onClick={()=>handleClick('8')}>8</button>
            <button className="btn" onClick={()=>handleClick('9')}>9</button>
            <button className="btn" onClick={()=>handleClick('0')}>0</button>
      </div>

      <div className="row1">
            <button className="btn" onClick={()=>handleClick('+')}>+</button>
            <button className="btn" onClick={()=>handleClick('/')}>x</button>
            <button className="btn" onClick={()=>handleClick('e')}>/</button>
            <button className="btn" onClick={()=>handleClick('r')}>_</button>
            <button className="btn" onClick={()=>handleClick('t')}></button>
            <button className="btn" onClick={()=>handleClick('y')}>y</button>
            <button className="btn" onClick={()=>handleClick('u')}>u</button>
            <button className="btn" onClick={()=>handleClick('i')}>i</button>
            <button className="btn" onClick={()=>handleClick('o')}>o</button>
            <button className="btn" onClick={()=>handleClick('p')}>p</button>
      </div>

      <div className="row2">
            <button className="btn" onClick={()=>handleClick('q')}>q</button>
            <button className="btn" onClick={()=>handleClick('w')}>w</button>
            <button className="btn" onClick={()=>handleClick('e')}>e</button>
            <button className="btn" onClick={()=>handleClick('r')}>r</button>
            <button className="btn" onClick={()=>handleClick('t')}>t</button>
            <button className="btn" onClick={()=>handleClick('y')}>y</button>
            <button className="btn" onClick={()=>handleClick('u')}>u</button>
            <button className="btn" onClick={()=>handleClick('i')}>i</button>
            <button className="btn" onClick={()=>handleClick('o')}>o</button>
            <button className="btn" onClick={()=>handleClick('p')}>p</button>
      </div>
      <div className="row2">
        <button className="btn" onClick={()=>handleUpperCase()}>&#8679;</button>
        <button className="btn" onClick={()=>handleClick('z')}>z</button>
        <button className="btn" onClick={()=>handleClick('x')}>x</button>
        <button className="btn" onClick={()=>handleClick('c')}>c</button>
        <button className="btn" onClick={()=>handleClick('v')}>v</button>
        <button className="btn" onClick={()=>handleClick('b')}>b</button>
        <button className="btn" onClick={()=>handleClick('n')}>n</button>
        <button className="btn" onClick={()=>handleClick('m')}>m</button>
        <button className='btn-backspace' onClick={()=>handleDEL()}><img src={backspace} alt="Button Image"/></button>
    </div>
    <div className="row4">
        <button className='btn'>!#1</button>
        <button className='btn' onClick={()=>handleClick(',')}>,</button>
        <button className='btn' id='space' onClick={()=>handleClick(' ')}>SpaceBar</button>
        <button className='btn' onClick={()=>handleClick('.')}>.</button>
        <button className='btn' onClick={()=>handleClick('\n')}>Enter</button>
    </div>
    </>
  )
}

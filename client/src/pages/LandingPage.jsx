import React, { useState } from 'react'
import Button from '../component/Button'
import toni from "../assets/characters/toni/default/0.png"
import bo from "../assets/characters/bo/stand1_0.png"
import franz from "../assets/characters/franz/stand1_0.png"
import rachael from "../assets/characters/rachael/stand1_0.png"
import river from "../assets/characters/river/stand2_3.png"
import rhys from "../assets/characters/rhys/stand1_2.png"
import cassidy from "../assets/characters/cassidy/stand2_0.png"
import lila from "../assets/crew/lila_neugebauer/0.png"
import bjj from "../assets/crew/bjj/stand1_2.png"
import jc from "../assets/crew/jane_cox/fly_1.png"
import da from "../assets/crew/dede_ayite/stand1_2.png"
import ainsley from "../assets/characters/ainsley/1.png"
import dots from "../assets/crew/dots/3.png"
import pp from "../assets/crew/pickens_poor/2.png"
import toniL from "../assets/characters/toni/letter/letter_test.gif"
import rhysL from "../assets/characters/rhys/letter/letter_gif.gif"
import boL from "../assets/characters/bo/letter/letter.gif"
import riverL from "../assets/characters/river/letter/letter.gif"
import cassidyL from "../assets/characters/cassidy/letter/letter.gif"
import ainsL from "../assets/characters/ainsley/letter/letter.gif"
import rachaelL from "../assets/characters/rachael/letter/letter.gif"
import dotsL from "../assets/crew/dots/letter/letter.gif"
import ppL from "../assets/crew/pickens_poor/letter/letter.gif"
import jcL from "../assets/crew/jane_cox/letter/letter.gif"
import lnL from "../assets/crew/lila_neugebauer/letter/letter.gif"
import daL from "../assets/crew/dede_ayite/letter/letter.gif"
import franzL from "../assets/characters/franz/letter/letter.gif"
import bjjL from "../assets/crew/bjj/letter/letter.gif"
import ModalLetterPage from './ModalLetterPage'
import heart from "../assets/heart.png"
import circle from "../assets/circle.png"
import note from "../assets/note.png"

function LandingPage() {
  const [showLetter, setSetLetter] = useState(false)
  const [chosenCharacter, setChosenCharacter] = useState(0);
  const charactersMap = [
    {id: 0, charName: 'Lila Neugebauer', img: lila, desc: "La Maestra of this Orchestra", letter: lnL},
    {id: 1, charName: 'Branded Jacobs-Jenkins', img: bjj, desc: "The Origin of this Great Work", letter: bjjL},
    {id: 2, charName: 'Kimie Nishikawa, Andrew Moerdyk, Santiago Orjuela-Laverde', img: dots, desc: "...", letter: dotsL},
    {id: 3, charName: 'Jane Cox', img: jc, desc: "The Moonlight Maker", letter: jcL},
    {id: 4, charName: 'Dede Ayite', img: da , desc: "Goddess", letter: daL},
    {id: 5, charName: 'Will Pickens & Bray Poor', img: pp, desc: "The Tension Morderators", letter: ppL},
    {id: 6, charName: 'Ms. Sarah Catharine Paulson', img: toni, desc: "The Iconic Mother of the House", letter: toniL},
    {id: 7, charName: 'Corey Stoll', img: bo, desc: "The Slow Timer Bomb", letter: boL },
    {id: 8, charName: 'Michael Esper', img: franz, desc: "*Sigh* The Black Sheep", letter: franzL },
    {id: 9, charName: 'Natalie Gold', img: rachael, desc:  "*Sigh again* The Initiator", letter: rachaelL },
    {id: 10, charName: 'Ella Beatty', img: river, desc: "The Only Naive One", letter: riverL },
    {id: 11, charName: 'Graham Campbell', img: rhys, desc: "Should've Been Me", letter: rhysL},
    {id: 12, charName: 'Alyssa Marvin', img: cassidy, desc: "No you're not almost an adult", letter: cassidyL},
    {id: 13, charName: 'Everett Sobers', img: ainsley, desc: "Cool [Klux klan] Kid (jokes)", letter: ainsL},
  ]

  //done letters + redesign ui latest Thursday

  function handleChosenCharacter(){
    setSetLetter(true)
  }

  function closeModalLetter(){
    setSetLetter(false)
  }


  function handleLeftClick(){
    let temp = chosenCharacter - 1;
    if (temp >= 0){
      setChosenCharacter(temp)
    }
    else {
      setChosenCharacter(charactersMap.length - 1)
    }
  }

  function handleRightClick(){
    let temp = chosenCharacter + 1;
    if (temp < charactersMap.length){
      setChosenCharacter(temp)
    }
    else {
      setChosenCharacter(0)
    }
  }


  return (
    <div className='main-container'>
      
      {showLetter && <ModalLetterPage show={showLetter} char={charactersMap[chosenCharacter]} onClose={closeModalLetter}  />}
      <div className='background-container'>

        <h5 style={{marginTop: 10, color: 'white'}}>
          <span><img src={circle} width={20} alt='' />  </span>
          Appreciation for Appropriate 
          <span><img src={heart} width={20} alt='' />  </span>
        </h5>
      </div>
      
      <h1 className='choose-char-msg'>Choose Character</h1> 
       
      <div className='character-options-container'>
        <Button direction='left' onClick={handleLeftClick}/>

        {/**Maybe circle around the character */}
        <div className='char-image-container'> 
          <img style= {{marginLeft: 5, marginRight: 5}}src={charactersMap[chosenCharacter].img} alt="" />
        </div>

        <Button direction='right' onClick={handleRightClick}/>   

      </div>
      <h4>{charactersMap[chosenCharacter].desc}</h4>

      <button className='confirm-button' onClick={handleChosenCharacter} >
        <b>Choose</b></button>
      <div style={{marginBottom: 30}} />
      
      {/**Modal pop up for this one */}
      <button className='confirm-button' style={{backgroundColor: 'green'}}><i>Didn't see yours?</i></button>
      <div style={{marginBottom: 30}} />  


      <img src={note} alt='' width={'100%'}/>
    </div>
  )
}

export default LandingPage
import React from 'react'
import style from "./style.module.css"
import Azaa from "../../../images/AzbayarMunkhbayar.jpg"


const AdvisorsCard = () => {
  return (
   
        <div className={style.card}>
            <div className={style.cardImage}>
                <img src={Azaa} alt='zurag1'/>
            </div>
            <div className={style.cardInfo}>
                <h2 className={style.fullname}>М.Азбаяр</h2>
                <h3 className={style.job}>Huree IC</h3>
            </div>
    </div>
  )
}

export default AdvisorsCard
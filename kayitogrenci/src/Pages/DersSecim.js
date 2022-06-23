import { useState } from "react";
import React from 'react';
import Ogretmen from "./Ogretmen";

import Swaler from "sweetalert2";
function DersSecim() {
  const [userinfo, setUserInfo] = useState({
    dersler: [],
    response: [],
    liste: [],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const kayit = (e) => {
    e.preventDefault()
    Swaler.fire({
      icon:"success",
      title: "KAYDEDİLDİ",
      text:"DERS SEÇİMİNİZ KAYDEDİLDİ",
      button:'OK',
      timer:10000
    })
   

  };



  const handleOnChange = (e) => {
    const { value, checked } = e.target;
    const { dersler } = userinfo;
    

    console.log(`${value} is ${checked}`);
    if (checked) {
      setUserInfo({
        dersler: [...dersler, value],
        response: [...dersler, value]
        
      });

    }


    else {
      setUserInfo({
        dersler: dersler.filter((e) => e !== value),
        response: dersler.filter((e) => e !== value)
        
      });
    }
  }





  const renderForm = (
    <div>
      <form>

        <div className="row">
          <div className="col-md-6">
            <div className="form-check m-3">
              <input type='checkbox' name='dersler' value='TÜRKÇE' id='turkce' placeholder='Türkçe'
                onChange={handleOnChange} />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
                TÜRKÇE
              </label>
            </div>
            <div className="form-check m-3">
              <input type='checkbox' value='MATEMATİK' name='dersler' id='mat'
                onChange={handleOnChange} />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
                MATEMATİK
              </label>
            </div>
            <div className="form-check m-3">
              <input type='checkbox' value='İNGİLİZCE' name='dersler' id='ingilizce'
                onChange={handleOnChange} />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
                İNGİLİZCE
              </label>
            </div>
            <div className="form-check m-3">
              <input type='checkbox' value='NESNEYE YÖNELİK PROGRAMLAMA' name='dersler' id='nyp'
                onChange={handleOnChange} />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
                NESNEYE YÖNELİK PROGRAMLAMA
              </label>
            </div>
            <div className="form-check m-3">
              <input type='checkbox' value='WEB PROGRAMLAMA' name='dersler' id='web'
                onChange={handleOnChange} />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
                WEB PROGRAMLAMA
              </label>
            </div>
            <div className="form-check m-3">
              <input type='checkbox' value='C DİLİ İLE PROGRAMLAMA' name='dersler' id='cprog'
                onChange={handleOnChange} />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
                C PROGRAMLAMA
              </label>
            </div>
            <div className="form-check m-3">
              <input type='checkbox' value='ELEKTRİK LABORATUVARI' name='dersler' id='lab'
                onChange={handleOnChange} />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
                LABORATUVAR
              </label>
            </div>
            <div className="form-check m-3">
              <input type='checkbox' value='BİLGİSAYAR AĞLARI' name='dersler' id='bilag'
                onChange={handleOnChange} />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
                BİLGİSAYAR AĞLARI
              </label>
            </div>
            <div className="form-check m-3">
              <input type='checkbox' value='İŞLETİM SİSTEMLERİ' name='dersler' id='isletim'
              onChange={handleOnChange}/>
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
                İŞLETİM SİSTEMLERİ
              </label>
            </div>
            <br />
            <br />
            <br />

          </div>
        </div >

        <div className="form-floating mt-3 mb-3 text-center">
          <label htmlFor="exampleFormControlTextarea1">
            SEÇİLEN DERSLER :{" "}
          </label>
          <div>
            <br />
            <br />

            <textarea
              className="col-md-12 col-xa-6 col-sm-4"
              name="response"
              value={
                userinfo.response}

              id="floatingTextarea2"
              style={{ width: "600px", height: "150px", rows: "50" }}
              onChange={handleOnChange}

            ></textarea>


          </div>
        </div>
        <form><button  onClick={kayit}>KAYDET</button>     </form>

      </form>
    </div>
  );






  return (

    <div className="ogretmen">
      <div className="">

        {isSubmitted ? <div>
          </div> : renderForm}
      </div>
    </div>
  );
}


export default DersSecim;
import React from 'react'
import Swaler from "sweetalert2";
import './OgrenciBilgisi.css';
import {Link} from "react-router-dom";
function OgrenciBilgisi(props) {
  const kayit = (e) => {
    e.preventDefault()
    Swaler.fire({
      icon:"success",
      title: "ONAYLANDI",
      text:"DERS SEÇİMİNİ ONAYLADINIZ",
      button:'OK',
      timer:10000
    })
   

  };

  return (
   <div >
    <div class="donus"><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    <br></br><br></br>
    <Link to="/Home">ANASAYFAYA DÖNÜŞ</Link></div>
    <div class="tablo">
      <table border="1">
<caption >DERS SEÇİM ONAY SAYFASI</caption>
<tr>
  <th> ADI</th>
  <th>SOYADI</th>
  <th>NUMARASI</th>
  <th>SINIFI</th>
  <th>SEÇTİĞİ DERS</th>
</tr>
<tr>
    <td>EDA NUR</td>
    <td>AYDIN</td>
    <td>1191602043</td>
    <td>3. SINIF</td>
    <td>WEB PROGRAMLAMA</td>
</tr>
<tr>
    <td>EDA NUR</td>
    <td>AYDIN</td>
    <td>1191602043</td>
    <td>3. SINIF</td>
    <td>İNGİLİZCE</td>
</tr>
<tr>
    <td>EDA NUR</td>
    <td>AYDIN</td>
    <td>1191602043</td>
    <td>3. SINIF</td>
    <td>C DİLİ İLE PROGRAMLAMA</td>
</tr>
<tr>
    <td>EDA NUR</td>
    <td>AYDIN</td>
    <td>1191602043</td>
    <td>3. SINIF</td>
    <td>İŞLETİM SİSTEMLERİ</td>
</tr>
<tr>
    <td>EDA NUR</td>
    <td>AYDIN</td>
    <td>1191602043</td>
    <td>3. SINIF</td>
    <td>NESNEYE YÖNELİK PROGRAMLAMA</td>
</tr>

    
</table>
<div><button onClick={kayit}>ONAYLA</button></div>  

  </div>
  </div> 
    
  )
}

export default OgrenciBilgisi
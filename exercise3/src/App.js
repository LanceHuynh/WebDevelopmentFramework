import React, { useState, useEffect } from 'react';
import './App.css';
import laptop1 from './laptop1.jpg';
import laptop1Info from './laptop1-info.png';
import laptop2 from './laptop2.jpg';
import laptop2Info from './laptop2-info.png';
import laptop3 from './laptop3.jpg';
import laptop3Info from './laptop3-info.png';
import tv1 from './tv1.jpg';
import tv1Info from './tv1-info.png';
import tv2 from './tv2.jpg';
import tv2Info from './tv2-info.png';
import tv3 from './tv3.jpg';
import tv3Info from './tv3-info.png';
import router1 from './router1.jpg';
import router1Info from './router1-info.png';
import router2 from './router2.jpg';
import router2Info from './router2-info.png';
import router3 from './router3.jpg';
import router3Info from './router3-info.png';

const productData= [
  {name: "Lenovo IdeaPad 1 14 14.0&#34; Laptop, 14.0&#34; HD (1366 x 768) Display, Intel Celeron N4020 Processor, 4GB DDR4 RAM, 64 GB SSD Storage, Intel UHD Graphics 600, Win 10 in S Mode, 81VU0079US, Ice Blue", info: laptop1Info , image: laptop1},
  {name: "2021 Newest HP 14&#34 Ultra Light Laptop, Intel N4020 Processor(Up to 2.8GHz), 4GB RAM, 128GB Storage(64GB eMMC+64GB Micro SD), 1 Year Office 365, Webcam, HDMI, WiFi, USB-A&C, (Google Classroom or Zoom)", info: laptop2Info, image: laptop2},
  {name: "2021 Newest Lenovo Ideapad 3 Laptop, 15.6 Full HD 1080P Non-Touch Display, AMD Ryzen 3 3250U Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, Webcam, Wi-Fi, HDMI, Windows 10 Home, KKE Mousepad, Grey", info: laptop3Info, image: laptop3},
  {name: "Insignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV", info: tv1Info, image: tv1},
  {name: "Insignia NS-39DF310NA21 39-inch Smart HD 720p TV - Fire TV", info: tv2Info, image: tv2},
  {name: "All-New Insignia 55 inch NS-55F301NA22 F30 Series LED 4K UHD Smart Fire TV, Released 2021", info: tv3Info, image: tv3},
  {name: "Gigabit WiFi Router, Dual Band Smart Wireless Router, Speedefy AC2100 4x4 MU-MIMO & 7 External Antennas for Strong Signal and High Speed, Parental Control, Guest Network, Easy Setup (Model K7W)", info: router1Info, image: router1},
  {name: "Tenda AC2100 Smart WiFi Router AC19 - Dual Band Gigabit Wireless (up to 2033 Mbps) Internet Router for Home | 4 LAN Ports+1 USB Port | 4X4 MU-MIMO Technology | Parental Control Compatible with Alexa", info: router2Info, image: router2},
  {name: "Speedefy High Speed Pro WiFi Router - Dual Band AC2100 Wireless Router for Streaming & Gaming, Up to 35 Devices, 2000 sq.ft Coverage, 4X4 MU-MIMO, USB Port, Parental Control (Model: K8)", info: router3Info, image: router3}
];

function App() {
  const [inputValue, setValue] = useState("");
  let filteredData = ReturnNewProducts() == null ? productData : ReturnNewProducts() ;
  const listOfProduct = filteredData.map(product =><Product product={product}/>);

  function isMatch(s) {
    return s.match(inputValue)!== null;
  }

  function ReturnNewProducts() {
    let array = []
    productData.forEach((product) => {
      if (isMatch(product.name)) {
        array.push(product);
      }
    });
    return array;
  }

  return (
    <div className="App">
      <SearchField onInputChange={setValue}/>
      <div className="ProductContainer">
        {listOfProduct}
      </div>
    </div>
  );
}
function SearchField(props) {
  return (
    <div className="SearchField">
      <input onChange={e => props.onInputChange(e.target.value)}/><i className="SearchIcon"/>
    </div>
  );
}

function Product(props) {
  return (
    <div className="Product">
      <div className="imageContainer">
        <img className="image" src={props.product.image}/>
      </div>
      <div className="ProductInfo">
        <div>
          {props.product.name}
        </div>
        <div>
          <img src={props.product.info}/>
            </div>
      </div>
    </div>
  );
}



export default App;

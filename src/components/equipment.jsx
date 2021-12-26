import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';
import { checkEquipment } from '../action/actions';
import TR from './TR';

import { insertSignature } from '../action/actions';

function Equipment() {
  const [imageURL, setImageURL] = useState(null);
  // const [signature, setSignature] = useState(null);
  const sigCanvas = useRef({});
  const setImage = () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
  };
  const dispatch = useDispatch();
  const fullEquipmentList = useSelector((state) => state.equipment.fullEquipmentList);
  const missingEquipmentList = useSelector((state) => state.equipment.missing);
  const workername = useSelector((state) => state.worker.fullName);
  const signUrl = useSelector((state) => state.worker.signUrl);
  const handlesubmit = (e) => {
    e.preventDefault();
    const missing = document.getElementsByClassName('missing');
    const Missing = [];
    for (let miss of missing) {
      Missing.push(parseInt(miss.innerHTML));
    }
    dispatch(insertSignature(imageURL));
    dispatch(checkEquipment(Missing));
    console.log(signUrl);
  };
  return (
    <div>
      <h2>wellcom {workername}</h2>
      <div className='equipmantTable'>
        <form onSubmit={handlesubmit}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>item's name</th>
                <th>full quantity</th>
                <th>current quantity</th>
                <th>missing now</th>
              </tr>
            </thead>
            <tbody>
              {fullEquipmentList.map((item, index) => (
                <TR item={item} index={index} key={item.name} />
              ))}
            </tbody>
          </table>
          <SignatureCanvas
            onEnd={setImage}
            ref={sigCanvas}
            penColor='blue'
            canvasProps={{
              className: 'signatureCanvas',
            }}
          />
          <button> update list</button>
          <div>
            <p>your sign</p>
            <img src={signUrl} alt='signature'></img> <br />
            <h1> missing </h1>
            {missingEquipmentList.map((item) => (
              <p key={item.name}>
                {item.name} missing :{item.missingQuantity} items
              </p>
            ))}
          </div>
        </form>
      </div>
      <Link to='/'>end </Link>
    </div>
  );
}

export default Equipment;

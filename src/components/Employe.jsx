import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { workerEnters } from '../action/actions';
function Employe() {
  const name = useRef('');
  const work = useRef('');
  const date = useRef('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const insetEmploy = (e) => {
    e.preventDefault();
    dispatch(workerEnters(name.current.value, work.current.value, date.current.value));
    navigate('/Equipment');
  };
  return (
    <div>
      <form onSubmit={insetEmploy}>
        <input type='text' placeholder='full name' ref={name} />
        <input type='text' placeholder='work place' ref={work} />
        <input type='date' placeholder='date' ref={date} />
        <button>to </button>
      </form>
    </div>
  );
}

export default Employe;


import React, {useState} from 'react';
import Calendar from 'react-calendar';
import SingleCard from './SingleCard';

const NewTask = () => {
    const [date, setDate] = useState(new Date()); 
  return (
    <div>
        <div>NewTask</div>
        <Calendar onChange={setDate} value={date}/>
        <SingleCard date={date}/>
    </div>
  )
}

export default NewTask
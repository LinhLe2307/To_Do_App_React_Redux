
import React, {useState} from 'react';
import Calendar from 'react-calendar';
import SingleCard from './SingleCard';

const NewTask = () => {
    const [date, setDate] = useState(new Date());
    const [inputForm, setInputForm] = useState({
      taskName: "",
      description: ""
    });

    const handleChange = (e) => {
      e.preventDefault()
      setInputForm({...inputForm, 
        [e.target.name] : e.target.value
      } )
    }

  return (
    <div>
        <div>NewTask</div>
        <Calendar onChange={setDate} value={date}/>
        <SingleCard date={date} handleChange={handleChange} inputForm={inputForm}/>
    </div>
  )
}

export default NewTask
import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState('');
    const [story, setStory] = useState('');
    const navigate = useNavigate();
    
    const saveUser = async (e) => {
        e.preventDefault();
        try {
        await axios.post('http://localhost:5000/add-users', {
            name,
            story
        });
        navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className='field'>
                    <label className='label'>nama</label>
                    <div className='control'>
                        <input type='text' className='input' value={nama} onChange={(e)=> setName(e.target.value)} placeholder='Name' />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>NIM</label>
                    <div className='control'>
                        <input type='text' className='input' value={story} onChange={(e)=> setStory(e.target.value)} placeholder='Story' />
                    </div>
                </div>
                <div className='field'>
                    <button type='submit' className='button is-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddUser
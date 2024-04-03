import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handelNameBlur = event => {
        setName(event.target.value);
    }

    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handelAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handelPhoneNumber = event => {
        setPhoneNumber(event.target.value);
    }

    const handelCreateUser = event => {
        event.preventDefault();
        const shiping = {name, email, address, phoneNumber}
        console.log(shiping);
        
    }

    // console.log(email);

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shiping Imformation</h2>
                <form onSubmit={handelCreateUser}> 
                    <div className="input-group">
                        <label htmlFor="Name">Name</label>
                        <input onBlur={handelNameBlur} type="text" name="name" id="" required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handelAddressBlur} type="text" name="address" id="" required/>
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="confirm-password">Phone Number</label>
                        <input onBlur={handelPhoneNumber} type="text" name="phoneNumber" id=""required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shiping" />
                </form>

            </div>
        </div>
    );
};

export default Shipment;

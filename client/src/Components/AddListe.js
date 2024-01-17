import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addListe } from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';

const AddListe=()=>{

const dispatch=useDispatch()
const navigate=useNavigate()

    const [name, setName]=useState('')
    const [age, setAge]=useState(0)
    const [email, setEmail]=useState('')
    const [phoneNumber, setPhoneNumber]=useState(0)

    const handleAdd=(e)=>{
        e.preventDefault()
        dispatch(addListe({name,age,email,phoneNumber}, navigate))
    }
    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Add Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Age</Form.Label>
                    <Form.Control onChange={(e)=>setAge(e.target.value)} type=" number" placeholder="Add Age" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control onChange={(e)=>setPhoneNumber(e.target.value)} type="number" placeholder="Add Phone Number" />
                </Form.Group>
            </Form>
            <Button onClick={(e)=>handleAdd(e)} variant="primary">Add</Button>
        </div>
    )
}

export default AddListe
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneListe, updateListe } from '../Redux/Actions';

const EditListe=()=>{

    const {id} = useParams()

    const dispatch=useDispatch()
    const navigate = useNavigate()
    
    useEffect(()=>{
    dispatch(getOneListe(id))
    },[])

    const OneListe = useSelector(state=>state.OneListe)

    const [name, setName]=useState(OneListe.name)
    const [age, setAge]=useState(OneListe.age)
    const [email, setEmail]=useState(OneListe.email)
    const [phoneNumber, setPhoneNumber]=useState(OneListe.phoneNumber)

    useEffect(()=>{
        setName(OneListe.name)
        setAge(OneListe.age)
        setEmail(OneListe.email)
        setPhoneNumber(OneListe.phoneNumber)
    },[OneListe])
    
    const handleEdit=(e)=>{
        e.preventDefault()
        dispatch(updateListe(id,{name,age,email,phoneNumber}, navigate))
    }

    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Add Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Age</Form.Label>
                    <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type=" number" placeholder="Add Age" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="number" placeholder="Add Phone Number" />
                </Form.Group>
            </Form>
            <Button onClick={(e)=>handleEdit(e)} variant="primary">Edit </Button>
        </div>
    )
}

export default EditListe
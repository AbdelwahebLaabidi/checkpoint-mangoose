import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { deleteListe } from '../Redux/Actions';
import { Link } from 'react-router-dom';


const CardListe=({el})=>{

const dispatch=useDispatch()
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{el.age}</Card.Subtitle>
                    <Card.Text>{el.email}</Card.Text>
                    <Card.Text>{el.phoneNumber}</Card.Text>
                    <Card.Link as={Link} to={`/EditListe/${el._id}`} >Edit</Card.Link>
                    <Button onClick={()=>dispatch(deleteListe(el._id))} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardListe
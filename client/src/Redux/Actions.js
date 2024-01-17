import axios from 'axios'
import { GETALLLISTE, GETONELISTE } from './ActionTypes'


export const getAllListe=()=>async(dispatch)=>{
    
    try {
        const res = await axios.get('/api/liste/getListe')

        dispatch({
            type : GETALLLISTE,
            payload : res.data.all_Liste
        })

    } catch (error) {
        console.log(error)
    }
}

export const addListe=(newUser,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/liste/addListe', newUser )
        
        dispatch(getAllListe())
        
        navigate('/ListeContact')

    } catch (error) {
        console.log(error)
    }
}

export const deleteListe=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/liste/deleteListe/${id}`)

        dispatch(getAllListe())
    } catch (error) {
        console.log(error)
    }
}

export const getOneListe=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/liste/getOneListe/${id}`)

        dispatch({
            type : GETONELISTE,
            payload : res.data.oneListe
        })
    } catch (error) {
        console.log(error)
    }
}


export const updateListe=(id,updateUser, navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/liste/updateListe/${id}`, updateUser)

        dispatch(getAllListe())
        navigate('/ListeContact')
        
    } catch (error) {
        console.log(error)
    }
}




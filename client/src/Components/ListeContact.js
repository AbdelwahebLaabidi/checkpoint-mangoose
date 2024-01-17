import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux" 
import CardListe from "./CardListe"
import { getAllListe } from "../Redux/Actions"

const ListeContact=()=>{

    const dispatch = useDispatch()
    useEffect(()=>{

        dispatch(getAllListe())
        
    })
    const Liste = useSelector(state=>state.Liste)

    return(
        <div>
                {
                    Liste.map((el,i,t)=><CardListe el={el}/>)
                }
        </div>
    )
}

export default ListeContact
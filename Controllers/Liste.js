const Liste = require("../Models/Liste")

exports.addListe= async(req,res)=>{
    try {

        const found = await Liste.findOne({email : req.body.email} )
        console.log(found)
        if(found){
            return res.status(400).send('email already used')
        }
        
    const newListe = new Liste(req.body)

        await newListe.save()
        res.status(200).send({msg : 'liste added', newListe})
    } catch (error) {
        res.status(500).send('could not add Liste')
    }
}

exports.getAllListe=async(req,res)=>{
    try {
        const all_Liste = await Liste.find()
        res.status(200).send({msg : 'liste geted', all_Liste})

    } catch (error) {
        res.status(500).send('could not get all the Liste')
    }
}

exports.deleteListe=async(req,res)=>{
    try {
        const {id}= req.params
        await Liste.findByIdAndDelete(id)
        res.status(200).send('Liste deleted')
    } catch (error) {
        res.status(500).send('could not delete Liste')
    }
}

exports.updateListe=async(req,res)=>{
    try {
        const {id}=req.params
        await Liste.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send('Liste Updated')
    } catch (error) {
        res.status(500).send('could not update Liste')
    }
}

exports.getOneListe= async(req,res)=>{
    try {
        const {id}=req.params
        const oneListe = await Liste.findById(id)
        res.status(200).send({msg : 'the Liste is bellow', oneListe})
    } catch (error) {
        res.status(500).send('could not get the Liste')
    }
}
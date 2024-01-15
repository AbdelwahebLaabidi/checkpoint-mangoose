const express = require('express')
const { addListe, deleteListe, updateListe, getAllListe, getOneListe } = require('../Controllers/Liste')

const ListeRoute = express.Router()



ListeRoute.post('/addListe',addListe)

ListeRoute.get('/getListe',getAllListe)


ListeRoute.delete('/deleteListe/:id', deleteListe)

ListeRoute.put('/updateListe/:id', updateListe)

ListeRoute.get('/getOneListe/:id', getOneListe)

module.exports = ListeRoute
'use strict'

class RelatoController {
  async criar({ request, response }){
    const Database = use('Database')
      if(request.body.RELACAO_AGRESSOR === 0){
        try {
          await Database.table('mapa').insert({
            "RELACAO_AGRESSOR": request.body.RELACAO_AGRESSOR,
            "DATA": request.body.DATA,
            "LOCAL": request.body.LOCAL,
            "DESCRICAO_LOCAL": request.body.DESCRICAO_LOCAL,
            "IDADE_DATA_FATO": request.body.IDADE_DATA_FATO,
            "IDADE_ATUAL": request.body.IDADE_DATA_FATO,
            "TIPO_VIOLENCIA": request.body.TIPO_VIOLENCIA,
            "RELIGIAO": request.body.RELIGIAO,
            "IDENTIDADE_GENERO": request.body.IDENTIDADE_GENERO,
            "ORIENTACAO_SEXUAL": request.body.ORIENTACAO_SEXUAL,
            "SEXO": request.body.SEXO,
            "ESCOLARIDADE": request.body.ESCOLARIDADE,
            "PROFISSAO": request.body.PROFISSAO,
            "NACIONALIDADE": request.body.NACIONALIDADE,
            "ETNIA": request.body.ETNIA,
            "DEFICIENCIA": request.body.DEFICIENCIA,
            "VIOLENCIA_INSTITUCIONAL": request.body.VIOLENCIA_INSTITUCIONAL,
            "FEZ_DENUNCIA": request.body.FEZ_DENUNCIA,
            "MOTIVO_NAO_DENUNCIA": request.body.MOTIVO_NAO_DENUNCIA,
            "RELATO_MAO_LIVRE": request.body.RELATO_MAO_LIVRE
          })
        } catch (error) {
          response.json({
            status:"erro",
            mensagem: error
          })
        }
        try{
          const axios = require('axios')
          const geoLoc = await axios.post('http://www.mapquestapi.com/geocoding/v1/address?key=a3lI4kNnsvyOaPsgPKApD51NV21hAWET',{
            "location": `${request.body.LOCAL} - Belo Horizonte - MG`,
            "options": {
              "thumbMaps": false,
              "maxResults": 1
            }
          })
          const latLng = geoLoc.data.results[0].locations[0].latLng
          await Database.table('localizar').insert({
            "LATITUDE":latLng.lat,
            "LONGITUDE":latLng.lng,
            "mapa_idmapa":1
          })
          response.json({
            status:"ok",
            mensagem: "Relato adicionado com sucesso ao banco de dados!"
          })
        }catch(error){
          response.json({
            status:"erro",
            mensagem: error
          })
        }
      }else{
        try {
          await Database.table('mapa').insert({
            "RELACAO_AGRESSOR": request.body.RELACAO_AGRESSOR,
            "DATA": request.body.DATA,
            "LOCAL": request.body.LOCAL,
            "DESCRICAO_LOCAL": request.body.DESCRICAO_LOCAL,
            "IDADE_DATA_FATO": request.body.IDADE_DATA_FATO,
            "IDADE_ATUAL": request.body.IDADE_DATA_FATO,
            "TIPO_VIOLENCIA": request.body.TIPO_VIOLENCIA,
            "RELIGIAO": request.body.RELIGIAO,
            "IDENTIDADE_GENERO": request.body.IDENTIDADE_GENERO,
            "ORIENTACAO_SEXUAL": request.body.ORIENTACAO_SEXUAL,
            "SEXO": request.body.SEXO,
            "ESCOLARIDADE": request.body.ESCOLARIDADE,
            "PROFISSAO": request.body.PROFISSAO,
            "NACIONALIDADE": request.body.NACIONALIDADE,
            "ETNIA": request.body.ETNIA,
            "DEFICIENCIA": request.body.DEFICIENCIA,
            "VIOLENCIA_INSTITUCIONAL": request.body.VIOLENCIA_INSTITUCIONAL,
            "FEZ_DENUNCIA": request.body.FEZ_DENUNCIA,
            "MOTIVO_NAO_DENUNCIA": request.body.MOTIVO_NAO_DENUNCIA,
            "RELATO_MAO_LIVRE": request.body.RELATO_MAO_LIVRE
          })
        } catch (error) {
          response.json({
            status:"erro",
            mensagem: error
          })
        }
        try{
          const axios = require('axios')
          const geoLoc = await axios.post('http://www.mapquestapi.com/geocoding/v1/address?key=a3lI4kNnsvyOaPsgPKApD51NV21hAWET',{
            "location": `${request.body.LOCAL} - Belo Horizonte - MG`,
            "options": {
              "thumbMaps": false,
              "maxResults": 1
            }
          })
          const latLng = geoLoc.data.results[0].locations[0].latLng
          await Database.table('localizar').insert({
            "LATITUDE":latLng.lat,
            "LONGITUDE":latLng.lng,
            "mapa_idmapa":1
          })
        }catch(error){
          response.json({
            status:"erro",
            mensagem: error
          })
        }
        try{
          await Database.table('autor').insert({
            "RELIGIAO_AUTOR":request.body.RELIGIAO_AUTOR,
            "RELACAO_COM_AUTOR":request.body.RELACAO_AGRESSOR,
            "IDENTIDADE_GENERO_AUTOR":request.body.IDENTIDADE_GENERO_AUTOR,
            "ORIENTACAO_SEXUAL_AUTOR":request.body.ORIENTACAO_SEXUAL_AUTOR,
            "SEXO_AUTOR":request.body.SEXO_AUTOR,
            "ESCOLARIDADE_AUTOR":request.body.ESCOLARIDADE_AUTOR,
            "PROFISSAO_AUTOR":request.body.PROFISSAO_AUTOR,
            "NACIONALIDADE_AUTOR":request.body.NACIONALIDADE_AUTOR,
            "ETNIA_AUTOR":request.body.ETNIA_AUTOR,
            "IDADE_AUTOR":request.body.IDADE_AUTOR,
            "mapa_idmapa":1
          })
          response.json({
            status:"ok",
            mensagem: "Relato adicionado com sucesso ao banco de dados!"
          })
        }catch(error){
          response.json({
            status:"erro",
            mensagem: error
          })
        }
      }

  }

  async excluir({ request, response }){
    const Database = use('Database')
    Database.table('mapa').where({"idmapa":request.body.idmapa}).delete()
    Database.table('localizar').where({"mapa_idmapa":request.body.idmapa}).delete()
    Database.table('autor').where({"mapa_idmapa": request.body.idmapa}).delete()
  }
}

module.exports = RelatoController

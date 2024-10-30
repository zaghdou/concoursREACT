import React, { useContext } from 'react'
import './panelInput.css'
import { useState } from 'react';
import { ContextDonnee } from '../../context/ContextProvider';


const PanelCST = () => {
    const context = useContext(ContextDonnee);
    const {donnee, setDonnee} = context;
    const [showPanel, setShowPanel] = React.useState(true)

    const handleInputChange = (e)=> {
        setDonnee({...donnee, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(donnee.nom.length > 0 && donnee.prenom.length > 0 && donnee.email.length > 0 || donnee.numTel.length === 8) {
            setShowPanel(false)
        } else {
            alert('Champ incorrect ou vide.')
        }
    }

  return (
    showPanel &&  <div className = "PanelInput">
        <div className="reward rewardInput">
          <label htmlFor = "nom">
            Saisir votre nom
          </label>
          <input 
             name = "nom"  
              id = "nom"
             value = {donnee.nom}
             onChange = {(e)=> {handleInputChange(e)}}
             type = "text" className = "inputCST" placeHolder = "Nom..." 
          />
          <label htmlFor = "prenom">
            Saisir votre prenom
          </label>
          <input 
          name = "prenom"
              id = "prenom"
             value = {donnee.prenom}
             onChange = {(e)=> {handleInputChange(e)}}
             type = "text" className = "inputCST" placeHolder = "Prenom..." 
          />
          <label htmlFor = "email">
            Saisir votre email
          </label>
          <input 
              id = "email"
              name = "email"
             value = {donnee.email}
             onChange = {(e)=> {handleInputChange(e)}}
             type = "text" className = "inputCST" placeHolder = "Email..." 
          />
          <label htmlFor = "numTel">
            Saisir votre numero de telephone
          </label>
          <input 
             name = "numTel"
              id = "numTel"
             value = {donnee.numTel}
             onChange = {(e)=> {handleInputChange(e)}}
             type = "text" className = "inputCST" placeHolder = "Numero de telephone ..." 
          />
          <button
            className="btn-close btn-code"
            onClick={(e)=> {handleSubmit(e)}}
          >
            Ok
          </button>
        </div>
        <div className="mask" />
    </div>
  )
}

export default PanelCST


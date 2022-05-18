import Nom from './components/Nom'
import Prenom from './components/Prenom'
import { useState } from 'react'
import './index.css'

const Animes = () => {

  const classeInit = [
    {
      name: "NameToto",
      firstname: "firstnameToto",
    },
    {
      name: "NameTata",
      firstname: "firstnameTata",
    },
    {
      name: "NameTiti",
      firstname: "firstnameTiti",
    },
  ];

  const [newName, setNewName] = useState('');
  const [newFirstname, setNewFirstName] = useState('');
  const [classe, setClasse] = useState(classeInit);
  const classeCopy = [...classe];
  
  return (
    <section className='content1'>
      <div className="classe">
        Ma classe:
        <div className='containerClasse'>
          {classe.map((eleve, index) => {
            return (
              <div className='containerEleve' key={index}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
                  <p>Élève : </p><button style={{ width: "24px" }} onClick={() => { classeCopy.splice(index, 1); setClasse(classeCopy) }}>X</button>
                </div>
                <Prenom propsFirstname={eleve.firstname} />
                <Nom propsName={eleve.name} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="classe">
        <div className='containerEleve'>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="styleFirstName">
                Prénom :<input type={'text'} placeholder="Entrez un prénom" value={newFirstname} onChange={(e) => { setNewFirstName(e.target.value) }} />{newFirstname}
              </div>
              <div className="styleName">
                Nom :<input type={'text'} placeholder="Entrez un nom" value={newName} onChange={(e) => { setNewName(e.target.value) }} />{newName}
              </div>
            </div>
            <button type="submit" onClick={() => {
              classeCopy.push({
                name: newName,
                firstname: newFirstname
              })
              setClasse(classeCopy);
              setNewFirstName('');
              setNewName('')
            }}>Ajouter un élève
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Animes;


        
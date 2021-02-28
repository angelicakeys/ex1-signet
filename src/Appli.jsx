import './Appli.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function Appli() {
  return (
    <div className="Appli">
      {/*  Gabarit de base d'une Application React */}
    <Entete/>

    <section className="contenuPrincipal">
   
    <ListeSignets/>
  
  <div className="BoutonAjout"> 
    <AddCircleIcon style={{fontSize:80}}/>
  </div>
   
    </section>
   
    </div>
  );
}
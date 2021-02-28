import './ListeSignets.scss';
import Signet from './Signet';
import tabSignets from './data/signets.json';

export default function ListeSignets(props){
    //console.log("Tableau des signets JSON:", tabSignets);
    return(
<>
<div className="ListeSignets">
    <ul className="ul-Signets">
    {
        //Signet mis dans le tableau au format de la page
        tabSignets.map(unSignet => <Signet nom={unSignet.titre} couleur={unSignet.couleur} date={unSignet.dateModification} id={unSignet.id}/>)
   
    }
    
    </ul>
</div>
</>
);
}
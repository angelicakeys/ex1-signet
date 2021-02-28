import './Signet.scss';
import SortIcon from '@material-ui/icons/Sort';

export default function Signet(props){

    const dateModif = (new Date()).toDateString();
    return(
       
    <div className="Signets">
     
    <div className="IconMenu"> 
        <SortIcon/>  
    </div>
  
   <img src={'images-signets/' + props.id + '.jpeg'} alt={props.nom} /> 
        

    <div className={'TitreSignet'} style={{backgroundColor: props.couleur}}>
    
        <p className="nom">{props.nom} </p> 
        <p className="date"> Modifié :{dateModif}</p>
           
        <button> <div class="dots"></div> </button> 
    </div>
    
        </div>
    );
}
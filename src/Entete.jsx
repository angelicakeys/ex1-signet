import './Entete.scss';
import FaceIcon from '@material-ui/icons/Face';

export default function Entete (props){
    return(
    <header className="entete"> 
        
        <ul className="navTitre">
          <li>Signets(Beta)</li>
        </ul>

      <ul className="navIdentifiant">
        <li>Angelica Mont..</li>
       <li><FaceIcon/> </li> 
      </ul>
        
  
    </header>

    );

}
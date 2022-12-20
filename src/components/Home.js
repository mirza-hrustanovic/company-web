import ImageHome from "./ImageHome";
import "../styles/home.css";
import { datas } from "./HomeData";
import {Link} from "react-router-dom";
const Home = () =>{
    return (<div><ImageHome/>
        
        <div className="homeContent">
                <h1 className="homeBigText">Handwerker und Hausmeister Service aus Regensburg</h1>
                <h2 className="homeSmallerText">Wir reinigen, reparieren, entrümpeln und renovieren nach Ihren Wünschen, individuell, zuverlässig und schnell</h2>
                <p className="coulumn">Heute heißt es Facility Management – gemeint ist jedoch immer noch der gute alte Hausmeisterservice! Wir erhalten Ihre Immobile – alles aus einer Hand. Egal ob Reinigungsarbeiten von Einfamilienhäusern, Mietshäusern oder Gewerbehallen und Baustellen – Sie müssen sich ab sofort nicht mehr darum kümmern. Die Gartenpflege vom Heckenschnitt bis hin zur Baumfällung und Wurzelentfernung oder auch das einfache Rasenmähen – das alles können Sie auch während Ihres Urlaubs in unsere fachmännischen Hände geben. Wir sind sowohl im Sommer wie auch im Winter mit unserem Hausmeister – und Handwerkerservice für Sie da und vermitteln Ihnen ebenfalls Spezialisten aus allen Gewerken wie zum Beispiel Heizung, Elektro und Sanitär. Sie haben nur einen Ansprechpartner und bekommen die Leistungen aus einer Hand. Legen Sie die Pflege Ihres Grundstücks und Ihrer Immobilie in unsere Hände und profitieren Sie von unserer langjährigen Erfahrung in dieser Branche. Der persönliche Kontakt, individuelle Absprachen und Ihre Zufriedenheit sind uns wichtig. Wir wollen nah am Kunden sein – denn es geht um den Werterhalt Ihrer Immobilie.</p>       
        </div>
        <hr></hr>
        <h1 className="h1Services">Our Services</h1>
        <div className="cardData">
            
            {datas.map(data =>{
                return(<div className="card"key={data.id}>
                    <Link to={"/services/" + data.title + "/?" + data.id}><img src={data.pic}></img>
                    <div className="card-body">
                        <h4 className="card-title">{data.title}</h4>
                    
                    <p className="card-text">{data.text}</p>
                    </div>
                    </Link>
                    
                    
                   
                
                </div>) 

            } 
                )}      
    </div>
    
    </div>);
        
   
}//Handwerker und Hausmeister Service
export default Home;
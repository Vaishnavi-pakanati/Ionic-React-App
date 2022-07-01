import { IonContent,IonHeader,IonButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonAvatar } from '@ionic/react';
import { findByAltText } from '@testing-library/react';
import { formatDiagnostic } from 'typescript';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
const Home: React.FC = () => {
  return (
    <IonPage>
         <div className="body">
      <IonContent fullscreen color="voilet">
      <IonAvatar className="logo">
        <IonImg src='\assets\icon\logo9.png' className="image"  />
      </IonAvatar>
      <IonAvatar className="avatar">
        <IonImg src='\assets\icon\foodpic.png' className="image"  />
      </IonAvatar> 
      <br></br>
      <IonLabel className="lb1">Eat Fit, Eat Healthy</IonLabel>
      
     <IonButton routerLink='/login'  className="btn1" color="light"><IonLabel  className="bt1">Get Started</IonLabel></IonButton>
     
      </IonContent>
      </div>
    </IonPage>
  );
};

export default Home;

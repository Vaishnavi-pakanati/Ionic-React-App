import { IonContent,IonHeader,IonButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonAvatar } from '@ionic/react';
import { findByAltText } from '@testing-library/react';
import { formatDiagnostic } from 'typescript';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color="voilet">
      
      <IonAvatar className="avatar1">
        <IonImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-9l9RqhDUf2RzxEa5flEzjhwIDFUQKssqQ&usqp=CAU' className="image"  />
      </IonAvatar>
      <IonLabel className="ff">Thank You For Visting </IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;

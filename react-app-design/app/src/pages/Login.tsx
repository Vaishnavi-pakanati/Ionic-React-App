import { IonContent,IonInput,IonIcon,IonHeader,IonButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonAvatar } from '@ionic/react';
import { findByAltText } from '@testing-library/react';
import { formatDiagnostic } from 'typescript';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';
const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color="voilet">
      {/* <IonIcon name="person"></IonIcon> */}
     <IonAvatar className="usericon">
    <IonImg src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png'></IonImg>
     </IonAvatar>
     <IonLabel  className="lg">Login</IonLabel>
     <br></br>
     <br></br>
    <IonInput className="inputbox" placeholder='Enter Your Email'></IonInput><br></br>
    <IonInput className="inputbox" placeholder='Enter Your Password'></IonInput>
    <IonButton  routerLink='/Dashboard' className="btn"  shape="round" color="light">
      <IonLabel  className="bt1"  >Login</IonLabel></IonButton>
      <br></br> <br>
      </br>
      <br>
      </br>
     <IonLabel className="lb">Don't have an Account? </IonLabel>
     <IonButton color="light" className="sin"  fill="clear" routerLink='/Signup'>Signup</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;

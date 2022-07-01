import { IonContent,IonInput,IonIcon,IonHeader,IonButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonAvatar } from '@ionic/react';
import { findByAltText } from '@testing-library/react';
import { formatDiagnostic } from 'typescript';
import ExploreContainer from '../components/ExploreContainer';
import './Signup.css';
const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color="voilet">
      {/* <IonIcon name="person"></IonIcon> */}
     <IonAvatar className="usericon">
    <IonImg src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png'></IonImg>
     </IonAvatar>
     <IonLabel  className="lg1">SignUp</IonLabel>
     <br></br>
     <br></br>
    <IonInput className="inputbox1" placeholder='Enter Your Email'></IonInput><br></br>
    <IonInput className="inputbox1" placeholder='Enter Your Password'></IonInput><br></br>
    <IonInput className="inputbox1" placeholder='Confirm Password'></IonInput>
    <IonButton routerLink='/Dashboard'className="btn" shape="round" color="light">
      <IonLabel>SignIn</IonLabel></IonButton>
      <br></br>
      {/* <IonAvatar className="line">
    <IonImg src='C:/Users/VaishnaviPakanati/Desktop/react-app-design/app/public/assets/icon/line.png'></IonImg>
     </IonAvatar> */}
      <IonAvatar className="gg">
        <div >
    <IonImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk144zI18DJswM83t-ibBvrwzh1SGS32svOSksPJBAW73qBM8pX6wR58pDksgIAfwR7rU&usqp=CAU'></IonImg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <IonImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5SVr0egnR5KSm2oepa0BHsaNBxsyVXFbVMJeHyfB8uzEQJpl53iJQqs5N7zVjkcF1bo&usqp=CAU'></IonImg>
    </div>
     </IonAvatar>
      </IonContent>
    </IonPage>
  );
};

export default Signup;

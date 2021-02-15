import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useState} from 'react';
import { HomePageSlides } from '../components/HomePageSlides';


export const Home = () => {
  // const [slideNumber, setSlideNumber] = useState(1)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> HotSpot </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <HomePageSlides />
      </IonContent>
    </IonPage>
  );
};



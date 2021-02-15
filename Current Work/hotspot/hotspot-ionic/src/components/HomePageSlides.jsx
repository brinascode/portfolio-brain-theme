import React, { useState } from "react";
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 600,
};

const styling = {
  border: "solid black",
};

export const HomePageSlides = () => {
  const [slideTitles, setSlideTitles] = useState([
    "#Fashion",
    "#Beauty",
    "#Tech",
    "#Learning",
    "#Other",
    "#MOre",
    "mmf",
    "frr",
    "pepe1",
    "pepe2",
    "pepe3",
    "pepe4",
  ]);
  const [activeSlide, setActiveSlide] = useState(slideTitles[0]);
  const swipe = async (e) => {
    let currentSlideIndex = await e.target.getActiveIndex();

    //We create a rotation effect anytime the slide changes. The first title moves to the end, so that the second title becomes the first.
    let firstTitle = slideTitles[0];
    let newTitleList = slideTitles;
    newTitleList.shift();
    newTitleList.push(firstTitle);
    setSlideTitles(newTitleList);

    // setActiveSlide(index);
  };

  return (
    <span>
      <IonContent>
        <div
          style={{
            background: "green",
            width: "100%",
            position: "relative",
            height: "50px",
            overflowX: "scroll",
            overflowY: "hidden",
            maxHeight: "50px",
          }}
        >
          <div style={{
            position: "relative",
            height:"50px",
          
            width: "1020px",
            maxHeight: "50px",
            background: "pink"
          }}> 
            {slideTitles.map((titleForList) => (
              <div
                style={{
                  position: "relative",
                  fontSize: "12px",
                  color: "black",
                  background: "yellow",
                  width: "170px",
                  height: "50px",
                  float: "left",
                  opacity: .9
                }}
              >
                {titleForList}
              </div>
            ))}
          </div>
        </div>
        <IonSlides
          pager={true}
          options={slideOpts}
          scrollbar={true}
          pager={true}
          onIonSlideDidChange={(e) => swipe(e)}
        >
          {/* Each Slide looks like this */}
          {slideTitles.map((title) => {
            return (
              <IonSlide key={title}>
                <IonGrid style={{ border: "solid black" }} fixed={true}>
                  <IonRow
                    size="12"
                    style={{ width: "100%", overflowX: "scroll" }}
                  >
                    e
                  </IonRow>
                  <IonRow size="12">
                    <IonCol style={{ border: "solid purple", height: "74vh" }}>
                      {title}
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonSlide>
            );
          })}
        </IonSlides>
      </IonContent>
    </span>
  );
};

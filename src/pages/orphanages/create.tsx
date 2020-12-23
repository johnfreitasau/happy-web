// import React, {useState, FormEvent, ChangeEvent} from "react";
// import { Marker } from 'react-leaflet';
// // import { useHistory } from "react-router-dom"
// import { LeafletMouseEvent } from "leaflet";

// // import PrimaryButton from "../../components/PrimaryButton";
// // import Sidebar from "../../components/Sidebar";

// // import api from '../../services/api'

// import './styles.css';
// import { FiPlus } from "react-icons/fi";
// // import Map from "../../components/Map";
// // import happyMapIcon from "../../components/Map/happMapIcon";

// export default function Create() {
//   // const history = useHistory();

//   const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
//   const [name, setName] = useState("");
//   const [about, setAbout] = useState("");
//   const [instructions, setInstructions] = useState("");
//   const [opening_hours, setOpeningHours] = useState("");
//   const [open_on_weekends, setOpenOnWeekends] = useState(true);

//   const handleMapClick = (event: LeafletMouseEvent) => {
//     const { lat, lng } = event.latlng;

//     setPosition({ latitude: lat, longitude: lng });
//   };

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault();

//     const { latitude, longitude } = position;

//     const data = new FormData();

//     data.append("name", name);
//     data.append("about", about);
//     data.append("latitude", String(latitude));
//     data.append("longitude", String(longitude));
//     data.append("instructions", instructions);
//     data.append("opening_hours", opening_hours);
//     data.append("open_on_weekends", String(open_on_weekends));

//     // await api.post("/orphanages", data);

//     alert("Cadastro realizado com sucesso!");

//     history.push("/app");
//   };

//   return (
//     <div id="page-create-orphanage">
//       {/* <Sidebar /> */}

//       <main>
//         <form onSubmit={handleSubmit} className="create-orphanage-form">
//           <fieldset>
//             <legend>Dados</legend>

//             {/* <Map
//               center={[-4.3032032,-38.9981043]}
//               zoom={15}
//               style={{ width: '100%', height: 280 }}
//               onclick={handleMapClick} >
//               {position.latitude !== 0 && (
//                 <Marker
//                   interactive={false}
//                   icon={happyMapIcon}
//                   position={[position.latitude, position.longitude]}
//                 />
//               )}
//             </Map> */}

//             <div className="input-block">
//               <label htmlFor="name">Nome</label>
//               <input id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             <div className="input-block">
//               <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
//               <textarea id="name"
//                 maxLength={300}
//                 value={about}
//                 onChange={(e) => setAbout(e.target.value)}
//               />
//             </div>

//             <div className="input-block">
//               <label htmlFor="images">Fotos</label>

//               {/**<div className="uploaded-image">
//               </div>
//               <button className="new-image">
//                 <FiPlus size={24} color="#15b6d6" />
//               </button>*/}
//             </div>
//           </fieldset>

//           <fieldset>
//             <legend>Visitação</legend>

//             <div className="input-block">
//               <label htmlFor="instructions">Instruções</label>
//               <textarea id="instructions"
//                 value={instructions}
//                 onChange={(e) => setInstructions(e.target.value)}
//               />
//             </div>

//             <div className="input-block">
//               <label htmlFor="opening_hours">Horarios abertos</label>
//               <input id="opening_hours"
//                 value={opening_hours}
//                 onChange={(e) => setOpeningHours(e.target.value)}
//               />
//             </div>

//             <div className="input-block">
//               <label htmlFor="open_on_weekends">Atende fim de semana</label>

//               <div className="button-select">
//                 <button type="button"
//                   className={open_on_weekends ? "active" : ""}
//                   onClick={() => setOpenOnWeekends(true)}
//                 >Sim</button>
//                 <button type="button"
//                   className={open_on_weekends ? "active" : ""}
//                   onClick={() => setOpenOnWeekends(false)}
//                 >Não</button>
//               </div>
//             </div>
//           </fieldset>

//           {/* <PrimaryButton type="submit">Confirmar</PrimaryButton> */}
//         </form>
//       </main>
//     </div>
//   );
// }
///////

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {GetServerSideProps, GetStaticProps} from 'next';
import Sidebar from '../../components/Sidebar';
import {FiPlus} from 'react-icons/fi';
import {Container, Main} from '../../styles/pages/orphanages/CreateOrphanage';
import dynamic from 'next/dynamic';

const preventDefault = (f: any) => (e: any) => {
  e.preventDefault()
  f(e)
}

interface CreateOrphanageProps {
  // create: Document[];
}

const DynamicMap = dynamic(() => import('../../components/MapEdit'), {ssr: false})

export default function CreateOrphanages({}: CreateOrphanageProps) {

  const handleSubmit = preventDefault(() => {
    console.log(`It's here`)
  })

  return (
    <Container>
    {/* <div id="page-create-orphanage"> */}
      <Sidebar />

      <Main>
      {/* <main> */}
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Orphanage form</legend>

            <DynamicMap />

            {/* <Map
              center={[-4.3032032,-38.9981043]}
              zoom={15}
              style={{ width: '100%', height: 280 }}
              onclick={handleMapClick} >
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map> */}

            <div className="input-block">
              <label htmlFor="name">Name</label>
              <input id="name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">About <span>Max of 300 caracteres</span></label>
              <textarea id="name"
                maxLength={300}
                // value={about}
                // onChange={(e) => setAbout(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">
              </div>
              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitation</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instructions</label>
              <textarea id="instructions"
                // value={instructions}
                // onChange={(e) => setInstructions(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Opening Hours</label>
              <input id="opening_hours"
                // value={opening_hours}
                // onChange={(e) => setOpeningHours(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Opened on Weekends</label>

              <div className="button-select">
                <button type="button"
                  // className={open_on_weekends ? "active" : ""}
                  // onClick={() => setOpenOnWeekends(true)}
                >Yes</button>
                <button type="button"
                  // className={open_on_weekends ? "active" : ""}
                  // onClick={() => setOpenOnWeekends(false)}
                >No</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Submit
          </button>
        </form>
      {/* </main> */}
      </Main>
    {/* </div> */}
    </Container>
  );
}

export const getStaticProps: GetStaticProps<CreateOrphanageProps> = async () => {
  //const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);

  // const recommendedProducts = await client().query([
  //   Prismic.Predicates.at('document.type','product')
  // ])

  return {
    props: {

    }
  }
}


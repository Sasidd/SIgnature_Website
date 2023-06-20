import React from "react";
// import "./ChoosingStampify.scss";
// import Grid from "../grid/Grid";
// import Heading from "../heading/Heading";
// import Text from "../text/Text";
// import Button from "../button/Button";
// import { correct_signature, wrong_signature } from "../../assests";
// import Container from "../container/Container";
import styles from './ChoosingStamplify.module.scss'
import { Link } from "react-router-dom";
const PUBLIC_URL = process.env.PUBLIC_URL;

// const ChoosingStampify = () => {
//   return (
//     <>
//       <div className="m-5">
//         <Heading className="primary center">
//           Choosing Stampify Makes biba
//         </Heading>
//         <div className="choosing-stampify-content">
//           <Container className="main">
//             <div className="mt-6 stampify-item-container">
//               <Container className="md">
//                 <Grid className="grid-4">
//                   <Item
//                     heading="Professional Designs"
//                     para="Eye-catching and business
//                         focussed designs created
//                         by email experts"
//                   />
//                   <Item
//                     heading="For Everyone"
//                     para="No matter your level of
//                         technical ability, you’ll be
//                         able to easily use Stampify"
//                   />
//                   <Item
//                     heading="Affordable Price"
//                     para="Why waste money on
//                         expensive solutions when 
//                         Stampify does it all too?"
//                   />
//                   <Item
//                     heading="Customer Service"
//                     para="On-hand, rapid response
//                         customer support to answer
//                         your questions"
//                   />
//                 </Grid>
//               </Container>
//             </div>
//           </Container>
//         </div>
//         <div className="choosingstampify">
//           <div className="choosingstampify-container">
//             <Container className="main">
//               <div className="choosingstampify-container-images">
//                 <img src={correct_signature} alt="correct" />
//                 <img src={wrong_signature} alt="correct" />
//               </div>
//               <div className="pt-6" />
//               <div className="choosingstampify-container-button m-1">
//                 <Button className="btn-primary center">About Stampify</Button>
//               </div>
//             </Container>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChoosingStampify;

// const Item = (props) => {
//   return (
//     <>
//       <div className="choosingstampify-card">
//         <div className="choosingstampify-card-container">
//           <h3>{props.heading}</h3>
//           <div className="mt-4" />
//           <Text>{props.para}</Text>
//         </div>
//       </div>
//     </>
//   );
// };

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <h5>{card.title}</h5>
      <p>{card.description}</p>
    </div>
  )
}

const cardsData = [
  {
    title: 'Professional Designs',
    description: 'Eye-catching and business focussed designs created by email experts'
  },
  {
    title: 'For Everyone',
    description: 'No matter your level of technical ability, you’ll be able to easily use Stampify'
  },
  {
    title: 'Affordable Price',
    description: 'Why waste money on expensive solutions when  Stampify does it all too?'
  },
  {
    title: 'Customer Service',
    description: 'On-hand, rapid response customer support to answer your questions'
  },
]

const ChoosingStampify = () => {
  return (
    <div className={styles.container}>
      <h2>Choosing Stampify Makes Sense</h2>
      <div className={styles.wrapper}>
        <div className={styles.wrapper2}>
          <div className={styles.cards}>
            {
              cardsData.map((card, i) => (
                <Card card={card} key={card.title + i} />
              ))
            }
          </div>
        </div>
        <div className={styles.bottomCards}>
          <div className={styles.item}>
            <div className={styles.left}>
              <div className={styles.top}>
                <h6><span>Floyd Miles</span></h6>
                <p>Designer</p>
                <p>Teddie@gmail.com</p>
                <p>+030 323 22 33</p>
                <p>Ave, New York, NY 12, USA</p>
                <p>mywebsite.com</p>
              </div>
              <div className={styles.links}>
                <Link to="#"><img src={`${PUBLIC_URL}/icons/dark-be.svg`} alt="Dark Be" /></Link>
                <Link to="#"><img src={`${PUBLIC_URL}/icons/dark-dribble.svg`} alt="Dribble" /></Link>
                <Link to="#"><img src={`${PUBLIC_URL}/icons/dark-insta.svg`} alt="Instagram" /></Link>
              </div>
              <button><img src={`${PUBLIC_URL}/icons/delete.svg`} alt="Delete" /></button>
            </div>
            <div className={styles.right}>
              <img src={`${PUBLIC_URL}/imgs/avatar.png`} alt="AVATAR" />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.left}>
              <div className={styles.top}>
                <h6><span>Floyd Miles</span></h6>
                <p>Motion Designer</p>
                <p>Floyd.m@ds.com</p>
              </div>
              <div className={styles.links}>
                <Link to="#"><img src={`${PUBLIC_URL}/icons/light-be.svg`} alt="Dark Be" /></Link>
                <Link to="#"><img src={`${PUBLIC_URL}/icons/light-insta.svg`} alt="Instagram" /></Link>
                <Link to="#"><img src={`${PUBLIC_URL}/icons/light-up.svg`} alt="Up Work" /></Link>
              </div>
              <button><img src={`${PUBLIC_URL}/icons/check.svg`} alt="Correct" /></button>
            </div>
            <div className={styles.right}>
              <img src={`${PUBLIC_URL}/imgs/avatar.png`} alt="AVATAR" />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <button>About Stampify</button>
        </div>
      </div>
    </div>
  )
}

export default ChoosingStampify
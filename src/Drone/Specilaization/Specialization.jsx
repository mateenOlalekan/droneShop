// import "./Specialization.css";
// import { FcInspection, GiMapleLeaf, FcSearch, FcMindMap } from "react-icons/fc";

// function Specialization() {
//   const specializations = [
//     {
//       icon: <GiMapleLeaf color="#81c784" size={40} />,
//       title: "Drone in Agriculture",
//       content: "Over a decade of experience in the drone industry."
//     },
//     {
//       icon: <FcInspection size={40} color="green" />,
//       title: "Drone in Inspection",
//       content: "Our team consists of skilled and certified drone pilots."
//     },
//     {
//       icon: <FcMindMap size={40} color={"green"} />,
//       title: "Drone in Geo Mapping",
//       content: "We prioritize customer satisfaction and strive to exceed expectations."
//     },
//     {
//       icon: <FcSearch size={40} className="colorful-text" />,
//       title: "Search and Rescue",
//       content: "Offering reliable repair services to keep your drones in top condition."
//     }
//   ];

//   return (
//     <div className="special-main">
//       <div className="special-Heading">
//         <h1 className="special-title">
//           Skynet Drones: Making the 
//           Impossible Possible
//         </h1>
//         <p className="special-sub">
//           We use drone technology to solve complex problems and 
//           provide innovative solutions to our customers.
//         </p>
//       </div>
//       <div className="special-card-grid">
//         {specializations.map((spec, index) => (
//           <SubSpecial key={index} {...spec} />
//         ))}
//       </div>
//     </div>
//   );
// }

// const SubSpecial = ({ icon, title, content }) => {
//   return (
//     <div className="special-card">
//       {icon}
//       <h3>{title}</h3>
//       <p>{content}</p>
//       <a className='learn-more'>Learn More</a>
//     </div>
//   );
// }

// export default Specialization;

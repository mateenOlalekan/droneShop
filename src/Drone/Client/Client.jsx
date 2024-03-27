import "./Client.css";
import Walla from "../Client/ClientImg/walla.jpg";
import Tendo from "../Client/ClientImg/TendoPay.jpg";
import Task from "../Client/ClientImg/task.jpg";
import Sounz from "../Client/ClientImg/Sounz.jpg";
import Ruze from "../Client/ClientImg/Ruze.jpg";
import Opword from "../Client/ClientImg/opword.jpg";
import Noble from "../Client/ClientImg/Noble.jpg";
import JungleBiz from "../Client/ClientImg/JungleBiz.jpg";
import blime from "../Client/ClientImg/blime.jpg";
import Alpha from "../Client/ClientImg/Alpha.jpg";

function Client() {
    const WrapData = [
    { id: 2, imageSrc: Walla },
    { id: 3, imageSrc: Tendo },
    { id: 4, imageSrc: Task },
    { id: 5, imageSrc: Sounz },
    { id: 6, imageSrc: Ruze },
    { id: 7, imageSrc: Opword },
    { id: 8, imageSrc: Noble },
    { id: 10, imageSrc: JungleBiz },
    { id: 11, imageSrc: blime },
    { id: 12, imageSrc: Alpha },
  ];
  return (
    <>
     <div className="clientContainer">
      <div className="Client">
        <p className="title">Client</p>
        <p className="subTitle">Our Clients</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Labore temporibus deleniti officiis impedit vero iusto voluptatum,
          illo quos? Amet mollitia est totam saepe voluptas corporis aliquam
          earum eveniet obcaecati eum!
        </p>
      </div>
      <div className="clientimgGrid">
        {WrapData.map((data) => (
          <img key={data.id} src={data.imageSrc} alt={`Client ${data.id}`} className="clientImg" />
        ))}
      </div>
     
     <div className="ClientContact">
          <div className="content">
            <div className="data">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint libero modi fuga placeat illo quaerat inventore animi? Veniam repellat eaque reprehenderit iste ipsa quae saepe praesentium, corporis voluptatum amet!</div>
            <div className="buttonFlex">
              <button>Free Quote</button>
              <button>Contact Us</button>
            </div>
          </div>
     </div>
    </div>
     
    </>
  )
}

export default Client
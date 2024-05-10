import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading} = useFetch(
    "/hotels/countByCity?cities=Neiva,Cartagena,Bogotá,Medellin"
  );

  return (
    <div className="featured">
      {loading ? (
        "Cargando por favor espere"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://turislab.co/wp-content/uploads/2020/01/NEIVA1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Neiva</h1>
              <h2>{data[0]} Propiedades</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://visasencolombia.com/wp-content/uploads/2022/02/ciudad-de-medellin.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Medellin</h1>
              <h2>{data[0]} Propiedades</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.viajes.cl/hubfs/Torre%20del%20Reloj%20en%20Cartagena%20de%20Indias,%20Colombia.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cartagena</h1>
              <h2>{data[1]} Propiedades</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://blog.urbansa.co/hubfs/Centro%20de%20la%20ciudad%20-%20El%20centro%20de%20Bogot%C3%A1-Bogot%C3%A1%20de%20noche.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bogotá</h1>
              <h2>{data[2]} Propiedades</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

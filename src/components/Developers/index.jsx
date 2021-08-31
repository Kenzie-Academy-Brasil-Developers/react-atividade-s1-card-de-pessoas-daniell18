// eslint-disable-next-line no-unused-vars
import "./Developer.css";
function Developer({ name, age, country }) {
  return (
    <div className="main">
      <div className="Developer">
        <div className="Border">
          <h3>Dev : {name}</h3>
          <p>Idade : {age}</p>
          <p>País : {country}</p>
        </div>
      </div>
    </div>
  );
}
export default Developer;

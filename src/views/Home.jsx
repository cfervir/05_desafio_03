import Images from "../images";

export default function Home() {

  return (
    <div className="container">
      <h1 className="logo--container">
        <h1>Welcome</h1>
        <img src={Images.logo} alt="Charizard" className="logo" />
        <h1>Master!</h1>
        </h1>
      <img src={Images.charizard} alt="Charizard" className="charizard" />
    </div>
  )
}
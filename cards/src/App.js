import react from "react";
import Cards from "./components/Card";

function App(props) {
  return (
    <div style={{display:"flex", margin:"50px auto", innerWidth:"100%", justifyContent:"space-evenly"}}>
      <Cards title ="Mountain" text =" text nomre 1" image="https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg" color="info"

      /> 
        <Cards title ="Bear" text =" text nomre 2" image="https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc" color="warning"

/>  <Cards title ="Dog" text =" text nomre 3" image="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y" color="danger"

/>
    </div>
  );
}

export default App;

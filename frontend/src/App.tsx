import "./App.css";
import teamsData from "./CollegeBasketballTeams.json";

//header component
function Heading() {
  return <h1>List of All the Colleges in NCAA Basketball</h1>;
}

//team card component
function TeamCard({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <br />
      <h2>School: {school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>
        Location: {city}, {state}
      </h3>
    </>
  );
}

function TeamList() {
  return (
    <>
      {teamsData.teams.map((singleTeam) => (
        <TeamCard {...singleTeam} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Heading />
      <TeamList />
    </>
  );
}

export default App;

// const bandNames2 = [
//   {
//     name: "Dire Straits",
//     members: "Mark Knopfler, John Illsley, Pick Withers",
//     formed: 1977,
//   },
//   {
//     name: "R.E.M",
//     members: "Michael Stipe, Peter Buck, Mike Mills, Bill Berry",
//     formed: 1989,
//   },
//   {
//     name: "Collective Soul",
//     members: "Ed Roland, Dean Holand, David Neal, Ross Childress, Shane Evans",
//     formed: 1992,
//   },
// ];

// function Band({
//   name,
//   members,
//   formed,
// }: {
//   name: string;
//   members: string;
//   formed: number;
// }) {
//   return (
//     <>
//       <img />
//       <h2>Name: {name}</h2>
//       <h3>Original Members: {members}</h3>
//       <h3>Formed: {formed}</h3>
//     </>
//   );
// }

// function Bandlist() {
//   const bandNames1 = ["Dire Straits", "R.E.M", "Collective Soul"];

//   return (
//     <>
//       <h2>{bandNames1[0]}</h2>
//       <h2>{bandNames1[1]}</h2>
//       <h2>{bandNames1[2]}</h2>

//       <h2>{bandNames2[0].name}</h2>
//       <h2>{bandNames2[1].name}</h2>
//       <h2>{bandNames2[2].name}</h2>

//       <Band {...bandNames2[0]} />

//       {
//         bandNames2.map((singleBand) => (
//           <Band {...singleBand} />
//         )) //go through all the band in the bandNames2
//       }
//     </>
//     //can only return one individual thing
//     //<div> takes up resources to render
//     //react fragment <> </>
//   );
// }

// function App() {
//   const title = "List of All the Colleges in NCAA Basketball"; //const = no change in the future, let = change in the future

//   return (
//     <>
//       <h1>{title}</h1>
//       <Bandlist />
//     </>
//   );
// }

// export default App;

// //TSX = typescript being translated to react commands by Babble behind the scenes, gives error before rendering

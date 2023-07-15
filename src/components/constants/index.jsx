import {
  Checkroom,
  DeveloperMode,
  FaceRetouchingNatural,
  FitnessCenter,
  GraphicEq,
  Home,
  LiveTv,
  MusicNote,
  OndemandVideo,
  School,
  SportsEsports,
  TheaterComedy,
} from "@mui/icons-material";

export const logo = {
  width: "200px",
  height: "80px",
};
export const color = {
  primary: "#fcfaf5",
  white:"white",
  secondary: "#76323f",
};

export const categories = [
  { text: "New", icon: <Home /> },
  { text: "Movies", icon: <OndemandVideo /> },
  { text: "Live", icon: <LiveTv /> },
  { text: "Gaming", icon: <SportsEsports /> },
  { text: "Education", icon: <School /> },
  { text: "Sport", icon: <FitnessCenter /> },
  { text: "Comedy", icon: <TheaterComedy /> },
  { text: "Podcast", icon: <GraphicEq /> },
  { text: "Fashion", icon: <Checkroom /> },
  { text: "Crypto", icon: <DeveloperMode /> },
  { text: "Gym", icon: <FitnessCenter /> },
  { text: "Beauty", icon: <FaceRetouchingNatural /> },
  { text: "Music", icon: <MusicNote /> },
];

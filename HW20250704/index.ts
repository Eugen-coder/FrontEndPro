type Robot = {
  model: string;
};

type Mission = "Moon Landing" | "ISS Maintenance";

type Astronaut = {
  isInSpace: boolean;
  experienceYears: number;
  assistantRobot: Robot;
  missions: Mission[];
};

const gagarin: Astronaut = {
    isInSpace: true,
    experienceYears: 15,
    assistantRobot: {model: "XR-12"},
    missions: ["Moon Landing", "ISS Maintenance"],
};


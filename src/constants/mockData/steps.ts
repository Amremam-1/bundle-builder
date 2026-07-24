import { BiCameraHome } from "react-icons/bi";
import { MdOutlinePayments, MdSensors } from "react-icons/md";
import type { StepData } from "../../types";
import { TbGridDots } from "react-icons/tb";
import { cameras } from "./cameras";

export const systemSteps: StepData[] = [
  {
    id: "cameras",
    stepNumber: 1,
    title: "Choose your cameras",
    icon: BiCameraHome,
    products: cameras,
  },
  {
    id: "plans",
    stepNumber: 2,
    title: "Choose your plan",
    icon: MdOutlinePayments,
    products: [],
  },
  {
    id: "sensors",
    stepNumber: 3,
    title: "Choose your sensors",
    icon: MdSensors,
    products: [],
  },
  {
    id: "protection",
    stepNumber: 4,
    title: "Add extra protection",
    icon: TbGridDots,
    products: [],
  },
];

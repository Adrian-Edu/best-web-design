import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Presentation from "../presentation-page/Presentation";
import SecondPage from "../second-page/SecondPage";
import ThirdPage from "../third-page/ThirdPage";
import FourtPage from "../fourth-page/FourtPage";
import FifthPage from "../fifth-page/FifthPage";
import Sixth from "../sixth-page/SixthPage";
import Seventh from "../seventh-page/SeventhPage";
import EighthPage from "../eighth-page/EighthPage";

const screens = {
  Home: {
    screen: Presentation,
  },
  SecondPage: {
    screen: SecondPage,
  },
  ThirdPage: {
    screen: ThirdPage,
  },
  FourtPage: {
    screen: FourtPage,
  },
  FifthPage: {
    screen: FifthPage,
  },
  Sixth: {
    screen: Sixth,
  },
  SeventhPage: {
    screen: Seventh,
  },
  EighthPage: {
    screen: EighthPage,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

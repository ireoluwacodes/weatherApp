import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import City from "../screens/City";
import { Feather } from "@expo/vector-icons";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";

const Tab = createBottomTabNavigator();

const Tabs = ({weather}) => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarStyle: {
          height: 80,
        },
        tabBarItemStyle: {},
        tabBarLabelStyle: {
          display: "none",
        },
      }}
    >
      <Tab.Screen
        name="City"
        initialParams={{weather}}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CurrentWeather"
        initialParams={{weather}}
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UpcomingWeather"
        initialParams={{weather}}
        component={UpcomingWeather}
        options={{
          tabBarInactiveTintColor: "purple",
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

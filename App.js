// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Home from './components/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Course from './components/screens/Course';
import CourseDetail from './components/screens/CourseDetail';
import CourseVideo from './components/screens/CourseVideo';
import TopCourses from './components/screens/TopCourses';
import Profile from './components/screens/Profile';
import Download from './components/screens/Download';
import Navbar from './components/screens/Navbar';
import { useFonts } from 'expo-font';

export default function App() {

  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    'JosefinSans-light':require('./assets/fonts/JosefinSans-Light.ttf'),
    'JosefinSans-regular':require('./assets/fonts/JosefinSans-Regular.ttf'),
    'JosefinSans-medium':require('./assets/fonts/JosefinSans-Medium.ttf'),
    'JosefinSans-semiBold':require('./assets/fonts/JosefinSans-SemiBold.ttf'),
    'JosefinSans-bold':require('./assets/fonts/JosefinSans-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }
  
  return (
    <NavigationContainer>
       <StatusBar 
        backgroundColor="#e76015"
        barStyle="light-content"
        />
      {fontsLoaded && <Stack.Navigator initialRouteName='Navbar' screenOptions={{
        headerShown: false,
        headerTitleStyle:{fontFamily:'JosefinSans-regular'}
      }}>
       
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Courses' component={Course} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='Download' component={Download} options={{ headerTitleAlign: 'center', headerShown: true }} />
        <Stack.Screen name='TopCourses' component={TopCourses} options={{ headerTitleAlign: 'center' }} />
        <Stack.Screen name='CourseDetails' component={CourseDetail} options={{ title: 'Course Name', headerTitleAlign: 'center' }} />
        <Stack.Screen name='CourseVideo' component={CourseVideo} options={
          ({ route }) => ({
            title: route.params.name,
            headerShown: true,
            
          })} />
        <Stack.Screen name='Profile' component={Profile}
          options={{ headerShown: true, headerTitleAlign: 'center' }}
        />
        <Stack.Screen name='Navbar' component={Navbar}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>}
      {/* <Navbar /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
});

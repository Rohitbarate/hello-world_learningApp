import { StyleSheet, Text, View, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} 
            onPress={()=>{navigation.navigate('Home')}}  >
             <Image source={ require('../../assets/home.png')} 
             style={styles.icon}  />
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} 
             onPress={()=>{navigation.navigate('Courses')}}
             >
             <Image source={ require('../../assets/book.png')}style={styles.icon} />
                <Text style={styles.buttonText}>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={()=>{navigation.navigate('Download')}} >
            <Image source={ require('../../assets/downloads.png')} style={{height:25,width:25,marginBottom:4}}/>
                <Text style={styles.buttonText}>Downloads</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} 
              onPress={()=>{navigation.navigate('Profile')}}
             >
            <Image source={ require('../../assets/profile.png')}
            style={styles.icon} />
                <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    container: {
        // height: '7%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingVertical:5
    },
    button:{
display:'flex',
alignItems:'center',

    },
    icon:{
        height:30,
        width:30
    },
    buttonText:{
        fontSize:12,
        fontFamily:'JosefinSans-medium'
    }
})
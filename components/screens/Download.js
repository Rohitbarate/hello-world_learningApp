import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Download = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.dailog}>
            <Image source={require('../../assets/downloadScreen.png')}
              style={styles.certificate}
            />
            <Text style={{fontSize:24,paddingHorizontal:20,marginTop:40,letterSpacing:2,lineHeight:35,textAlign:'center',fontFamily:'JosefinSans-medium'}}>Learn anywhere, anytime</Text>
            <Text style={{fontSize:12,paddingHorizontal:20,marginBottom:30,color:'#0008',textAlign:'center',marginTop:10,letterSpacing:1.5,lineHeight:18,fontFamily:'JosefinSans-regular'}}>You can download your favorite courses and learn anywhere, anytime --- even when your internet connection is unreliable --- and your downloads will show up here</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Courses')}
            style={styles.button}
          ><Text style={styles.buttonText}>Find a course to download </Text>
          </TouchableOpacity>
          <View style={{ display: 'flex', flexDirection: 'row' ,marginTop:20}}>
          <Text style={styles.qualityText} >Download Quality : Medium</Text>
        </View>
          </View>
        </View>
      )
    }
    
    export default Download
    
    const styles = StyleSheet.create({
      container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent:'space-evenly',
        paddingBottom: 20,
        backgroundColor:'#ffffff'
      },
      dailog:{
    width:'100%',
    display:'flex',
    alignItems:'center',
    marginTop:10,
    justifyContent:'center'
      },
      certificate: {
        width: '50%',
        height: undefined,
        aspectRatio:1,
        marginVertical:10
      },
      button: {
        backgroundColor: '#e76015',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop:20
      },
      buttonText: {
        fontSize: 14,
        fontFamily:'JosefinSans-semiBold'
      },
      qualityText:{
        color:'#0009',
        fontSize:15,
        fontFamily:'JosefinSans-regular'
      }
    })
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import courses from '../api/topCourses'

const Course = ({ navigation }) => {

    const courseBox = ({ item }) => {
        return (
            <View style={styles.courseBox}>
                <Image source={{ uri: item.img }}
                    style={styles.courseImg}
                />
                <View style={styles.courseDetails}>
                    <Text style={styles.courseName}>{item.courseName}</Text>
                    <Text style={styles.courseDesc}>{item.description}
                    </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CourseDetails',
                        {
                            courseId : item.id
                        })}
                        style={styles.button}
                    >
                        <Text style={styles.btnText}>More Details</Text>
                    </TouchableOpacity>
                
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ alignSelf: 'center', fontSize: 24,fontFamily:'JosefinSans-semiBold' }}>Our Best Courses</Text>
                <View style={{ borderBottomColor: '#000', borderBottomWidth: 1, width: '100%', marginTop: 5 }} />
            </View>
            <FlatList style={styles.flatList}
                data={courses}
                renderItem={courseBox}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Course

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
    },
    header: {
        width: '100%'
    },
    courseContainer: {
        marginVertical: 10,
        marginHorizontal: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatList: {
        marginTop: 20,
        height: '100%'
    },
    courseBox: {
        width: '95%',
        backgroundColor: '#bbb2ed',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 30,
        alignSelf: 'center',
        minHeight:450,
        maxHeight:500,
    },
    courseImg: {
        alignSelf: 'center',
        height: 200,
        resizeMode: 'contain',
        aspectRatio:1

    },
    courseDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '50%',
        paddingTop: 10,
    },
    courseName: {
        fontSize: 23,
        fontFamily:'JosefinSans-medium',
        paddingBottom: 10,
    },
    courseDesc: {
        lineHeight: 15,
        color: '#000b',
        fontFamily:'JosefinSans-regular',
    },
    button: {
        backgroundColor: '#e76015',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginTop: 15,
        borderRadius: 10,
        position:'absolute',
        bottom:-15,
        right:'30%'
    },
    btnText:{
        fontFamily:'JosefinSans-medium',
        fontSize:14,
    }
})
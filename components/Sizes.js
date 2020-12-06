import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Sizes() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.first}>
               <Text style={styles.size}>XS</Text>
            </TouchableOpacity>

             <TouchableOpacity style={styles.second}>
               <Text style={styles.size}>S</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.third}>
              <Text style={styles.medium}>M</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.fourth}>
              <Text style={styles.size}>L</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.fifth}>
              <Text style={styles.size}>XL</Text>
           </TouchableOpacity>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        flexDirection:"row",
    },

    first:{
        marginHorizontal:8,
        backgroundColor:"white",
        width:25,
        height:25,
        borderRadius:5,
        alignItems:"center",
        paddingVertical:3,
        fontSize:8
    },
    size:{
       fontSize:12
    },
    second:{
        marginHorizontal:8,
        backgroundColor:"white",
        width:25,
        height:25,
        borderRadius:5,
        alignItems:"center",
        alignContent:"center",
        paddingVertical:3

    },
    third:{
        marginHorizontal:8,
        backgroundColor:"#7872ed",
        width:25,
        height:25,
        borderRadius:5,
        alignItems:"center",
        alignContent:"center",
        paddingVertical:3
    },
    medium:{
        color:"white",
        fontSize:12
    },
    fourth:{
        marginHorizontal:8,
        backgroundColor:"white",
        width:25,
        height:25,
        borderRadius:5,
        alignItems:"center",
        alignContent:"center",
        paddingVertical:3
    },
    fifth:{
        marginHorizontal:8,
        backgroundColor:"white",
        width:25,
        height:25,
        borderRadius:5,
        alignItems:"center",
        alignContent:"center",
        paddingVertical:3
    },
})

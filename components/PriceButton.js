import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function PriceButton() {
    return (
        <View style={styles.container}>

           <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.textOpacity}>
                <Text style={styles.amount}>Total Amount</Text>
                <Text style={styles.amount1}>$110</Text>
              </TouchableOpacity>  
    
              <TouchableOpacity style={styles.cartOpacity}>
                <Text style={styles.txt}>Add to Cart</Text>
              </TouchableOpacity>
         
           </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
     container:{
         marginHorizontal:5,
         marginTop:20
     },

     buttonContainer:{
         backgroundColor:"#5f4dc9",
         flexDirection:"row",
         width:280,
         height:50,
         borderRadius:10
     },
     textOpacity:{
        paddingVertical:5,
        paddingHorizontal:12
     },
     amount:{
        paddingLeft:2,
        fontSize:8,
        color:"white"
     }, 
     amount1:{
        paddingLeft:2,
        color:"white",
        fontSize:18,
        fontWeight:"bold"
     },   

     cartOpacity:{
        backgroundColor:"#2610a3",
        height:30,
        width:100,
        borderRadius:7,
        alignSelf:"center",
        paddingHorizontal:12,
        paddingVertical:2,
        marginLeft:90  
    },
    txt:{
        color:"white",
        paddingVertical:2,
        alignSelf:"center"
    }

})


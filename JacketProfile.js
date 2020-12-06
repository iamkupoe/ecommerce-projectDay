import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import StarRating from './components/StartRating';
import Rectangle from './components/Rectangle';
import Sizes from './components/Sizes';
import PriceButton from './components/PriceButton';


export default function JacketProfile() {
    return (
        <View style={styles.container}>

            <View style={styles.iconContainer}>
               <Ionicons style={styles.arrow} name="ios-arrow-round-back" size={24} color="black" />
               <Feather style={styles.cart} name="shopping-cart" size={18} color="#c09ae6" />
            </View>

            <View style={styles.imageContainer}>
            <Image style={styles.image}source={require('./assets/red.jpg')} />
            <EvilIcons name="heart" size={24} color="#8810a3" style={{}}/>
            </View>

            <View style={styles.headTextContainer}>
              <Text style={styles.headText}>Red Woman Jacket</Text>
            </View>

            <View style={styles.ratingContainer}>
              <Text style={styles.reviewText}>Review :</Text>
              <StarRating/>
            </View>

            <View style={styles.rectContainer}>
             <Rectangle/>
            </View>

            <View style={styles.textContainer}>
               <Text style={styles.text}>
                  It is a long established fact that a reader will be distracted by the readable content of a page.
               </Text>
            </View>

            <View style={styles.materialContainer}>
               <Text style={styles.materialText}>
                 Material: 91% polyester, 9% clastane
               </Text>
            </View>

            <View>
               <Sizes/>
            </View>
             
            <View>
              <PriceButton/>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        paddingTop: 10,
        paddingLeft: 20,
        backgroundColor: "#e6ebe6",
    },
    iconContainer:{
        flexDirection:"row",
        paddingBottom:1
    },

    arrow:{
        borderRadius:50,
        backgroundColor:"white",
        width:35,
        height:35,
        paddingVertical:5,
        paddingHorizontal:10  
    },

    cart:{
        marginHorizontal:250,
        borderRadius:50,
        backgroundColor:"white",
        width:35,
        height:35,
        paddingVertical:7,
        paddingHorizontal:8,
    },

    imageContainer:{
      flexDirection:"row",
    
    },

    image:{
        width:230,
        height:220,
        borderRadius:20, 
        marginLeft:30,
        transform:[{rotate : '2deg'}],
    },
    headTextContainer:{
      marginTop:15
    },
    headText:{
      fontSize:18,
      fontWeight:"bold"
    },
    ratingContainer:{
        flexDirection:"row"
    },
    reviewText:{

    },
    rectContainer:{
        marginTop:15
    },
    textContainer:{
        marginTop:15
    },
    text:{
      lineHeight:20,
      fontSize:12

    },

    materialContainer:{
        backgroundColor: "white",
        height:30,
        marginTop:10,
        marginLeft:0
    },
    materialText:{
        color:"#7872ed",
        paddingVertical:2,
        fontSize:12
        
    }
  
})

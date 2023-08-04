import { View, Text,StyleSheet, StatusBar,TouchableOpacity } from 'react-native'
import Left from 'react-native-vector-icons/AntDesign';
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import EStyleSheet from 'react-native-extended-stylesheet';

const MainHeader = ({text,iconName,onpressBtn}) => {
  return (
    <>
    {/* <StatusBar
        backgroundColor={'#1C37A4'}
        barStyle="Light-content"
      /> */}
    <View style={styles.mainHeader}>
      <View style={styles.headerChild}>
        <TouchableOpacity onPress={onpressBtn} style={styles.headerRow}>
         <Left name={iconName} size={25} color='#fff'/>
        </TouchableOpacity>
        <View style={{marginLeft:hp(-1.5)}}>
            <Text style={styles.textstyle}>{text}</Text>
        </View>
        <View style={styles.headerRow}>
         {/* <Left name='arrowleft' size={40} color='#fff'/> */}
        </View>
      </View>
    </View>
    </>
  )
}

export default MainHeader

const styles=StyleSheet.create({
    mainHeader:{
     height:hp(12),
     backgroundColor:'#1C37A4',
     borderBottomRightRadius:hp(3),
     borderBottomLeftRadius:hp(3)
    },
    headerChild:{
        marginTop:hp(6),
        flexDirection:'row',
        width:wp(90),
        justifyContent:'space-between',
        marginHorizontal:hp(2.5)
    },
    textstyle:{
        color:'#fff',
        fontSize:hp(2.5),
        marginTop:hp(0.5)
    }

})
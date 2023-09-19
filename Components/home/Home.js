import {  StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Sizy = 4;
const siize =100;
const SIZE = 18;
const SIZEE = 50.0;
SIZEEE = 55.5;
const CIRCLE_RADUSE= SIZE * 2;
const CIRCLE_RADUSEE= SIZEE * 2;
const CIRCLE_RADUSEEE= SIZEEE * 2;
const Home = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                {/*Navigation Bar */}
                <View style={styles.headerWrapper}>
                    <View style={{left:-25,top:10}}>
                        <TouchableOpacity>
                    <MaterialIcons name="keyboard-arrow-left" size={50} color="#01F2CF" />
                    </TouchableOpacity>
                    </View>
                    <View style={styles.circle}>
                    <TouchableOpacity>
                    <Image
                    source={require('../../assets/women.png')}
                    style={styles.profileImage}/>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.txt}>
                    <Text style={{color:'#FFFFFF66',fontSize:12,left:-40,top:17}}>Tesla Roadster</Text>
                    <Text style={{color:'#FFFFFF',fontSize:20, left:-40,top:17}}>Olivia Smith</Text>
                    </View>
                    <View style={{top:20,left:-15}}>
                    <TouchableOpacity>
                    <Ionicons name="notifications" size={40} color="white" />
                    </TouchableOpacity>
                    </View>
                    <View style={{top:15}}>
                    <TouchableOpacity>
                    <Ionicons name="ios-settings" size={50} color="#162E2B" />
                    </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            {/*kilometrage */}
            <View style={styles.wrapper}>
                <View style={styles.circle2}>
                            <View style={styles.circle1}>  
                            <View style={styles.shadow2}></View>  
                            </View>          
                <View style={styles.KLM}>
                <View style={styles.thunder}>
                <Image
                source={require('../../assets/Vector.png')}
                style={{left:38,top:-140}}/>
                    <Text style={{color: '#01F2CF',fontSize:48,top:-150}}>360</Text>
                    <Text style={{color:'#FFFFFF80',fontSize:20,left:27,top:-160}}>KM</Text>
                </View>
                
                </View>
                </View>
                <Text style={{color:'#00FFDA91',fontSize:18,left:5,top:-150}}>Total Charge</Text>
            </View>
            <View style={{top:230}}>
                <View style={styles.Twotxt}>
                <TouchableOpacity>
                <Text style={{color:'#FFFFFF',fontSize:16,left:65,top:-320}}>Bike Status</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color:'#FFFFFF80',fontSize:16,right:75,top:-320}}>Health</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.square}>
                </View>
            </View>
            {/*Wedgets */}
            <View style={styles.wedgets}>
            <View style={styles.rectangle}>
                <Text style={{color:'#FFFFFF',fontSize:14,left:10,top:10,bottom:10}}>Battery</Text>
                <View style={styles.shadow}></View>
                <Text style={{color:'#FFFFFF',fontSize:12,left:10,top:150,bottom:10}}>Saving mode</Text>
                <View style={{height:130,left:100,top:128}}>
                <TouchableOpacity>
                <Entypo name="switch" size={30} color="#03DA99" />
                </TouchableOpacity>
                </View>
                <View style={styles.rectangle2}>
                    <Text style={{color:'#FFFFFF',fontSize:30,left:17,height:50,top:10}}>80</Text>
                    <Text style={{color:'#FFFFFF',fontSize:15,left:28,top:-7}}>%</Text>
                <View style={styles.shadow}>
                </View>  
                </View>
                <View style={styles.shadow}>
                </View>
            <View style={{top:-256}}>
                <View style={styles.square2}>
                    <Text style={{color:'#FFFFFF',fontSize:14,left:15,top:10}}>Light</Text>
                    <View style={{top:19,left:23}}>
                    <TouchableOpacity>
                    <AntDesign name="caretup" size={10} color="#01F2CF" />
                    </TouchableOpacity>
                    </View>
                    <Text style={{color:'#FFFFFF',fontSize:12,left:20,top:24}}>ON</Text>
                    <View style={{top:30,left:23}}>
                    <TouchableOpacity>
                    <AntDesign name="caretdown" size={10} color="#01F2CF" />
                    </TouchableOpacity>
                    </View>
                    <View style={{left:100,top:-25}}>
                    <TouchableOpacity>
                    <Feather name="loader" size={30} color="#01F2CF" />
                    </TouchableOpacity>
                    </View>
                    <View style={{left:90,top:-25}}>
                        <Text style={{color:'#01F2CF',fontSize:12}}>Optimum</Text>
                    </View>
                <View style={styles.shadow}>
                </View>  
                </View>  
                <View style={styles.square3}>
                    <View>
                        <Text style={{color:'#FFFFFF',fontSize:14,top:10,left:10}}>Total Distance</Text>
                    </View>
                    <View style={{color:'#FFFFFF',left:12,top:20}}>
                    <MaterialCommunityIcons name="map-marker-distance" size={24} color="#FFFFFF" />
                    </View>
                    <View style={{color:'#FFFFFF',left:50,top:-3}}>
                        <Text style={{color:'#FFFFFF',fontSize:16}}>20,000 Km</Text>
                    </View>
                    <View style={{left:12,top:10}}>
                        <TouchableOpacity>
                        <Text style={{color:'#01F2CF',fontSize:12}}>Map</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{left:35,top:-8}}>
                    <TouchableOpacity>
                    <MaterialIcons name="keyboard-arrow-right" size={20} color="#01F2CF" />
                    </TouchableOpacity>
                    </View>
                <View style={styles.shadow}>
                </View>  
            </View>    
            </View>  
                </View> 
                <View style={styles.Buttom}>
                    <SafeAreaView>
                        {/*Buttom */}
                        <View style={styles.customButtom}>
                                <View style={styles.homeCircleButtom}>
                                    <View style={{top:95,left:-140}}>
                                        <TouchableOpacity>
                                        <MaterialIcons name="pedal-bike" size={30} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{left:-80,top:63}}>
                                    <TouchableOpacity>
                                        <Image
                                        source={require('../../assets/NFT.png')}
                                        style={{height:30,width:30}}/>
                                    </TouchableOpacity>    
                                    </View>
                                    <View style={{left:75,top:40}}>
                                    <TouchableOpacity>
                                    <Entypo name="merge" size={24} color="#166534" />
                                    </TouchableOpacity>    
                                    </View>
                                    <View style={{left:140,top:15}}>
                                    <TouchableOpacity>
                                    <Feather name="user" size={24} color="#166534" />
                                    </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity>
                                    <Image
                                    source={require('../../assets/thunderr.png')}
                                    style={{ width:90,height:90,top:-63}}/>
                                    </TouchableOpacity>
                                </View>
                        </View>
                        </SafeAreaView>
                </View>
        </View>
        </View>
    )
}

export default Home;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#0C1615',
        top:0
    },
    headerWrapper:{
        justifyContent: 'space-between',
        flexDirection:'row',
        paddingHorizontal:20,
        paddingTop:40,
        left:5,
    },
    circle:{
        width:CIRCLE_RADUSE * 2 ,
        height:CIRCLE_RADUSE * 2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:CIRCLE_RADUSE,
        borderWidth:2,
        borderColor:'#03DA99',
        left:-40
    },
    profileImage:{
        width:60,
        height:60,
        borderRadius:40,
        left:1
    },
    txt:{
        padding:1,
    },
    wrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        top:140
    },
    thunder:{
        padding:10,
        alignContent:'center',
        justifyContent: 'center',
    },
    KLM:{
        left:56,
        top:50
    },
    circle1:{
        width:CIRCLE_RADUSEE * 2 ,
        height:CIRCLE_RADUSEE * 2,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:CIRCLE_RADUSEE,
        borderWidth:15,
        borderColor:'#03DA99',
        top:63,
        left:9.5
    },
    shadow:{
        shadowColor:'#05CAAD54',
        shadowOffset:{
            height:3,
            width:5
        },
        shadowOpacity:0.32,
        shadowRadius:6.5,
        elevation:11
    },
    circle2:{
        width:CIRCLE_RADUSEEE * 2 ,
            height:CIRCLE_RADUSEEE * 2,
            alignContent:'center',
            justifyContent:'center',
            borderRadius:CIRCLE_RADUSEEE,
            borderWidth:1,
            borderColor:'#03DA99',
            top:-180
    
    },
    Twotxt:{
        justifyContent:'space-between',
        alignContent:'center',
        flexDirection:'row',
        top:50
    },
    square:{
        padding:1,
        width:60,
        height:Sizy,
        backgroundColor:'#03DA99',
        left:79,
        top:-260
    },
    wedgets:{
        justifyContent:'space-between',
        alignContent:'center',
        top:-20

    },
    rectangle:{
        width:140,
        height:230,
        backgroundColor:'#182724',
        left:40,
        borderRadius:12, 
    },
    shadow2:{
        shadowColor:'#182724',
        shadowOffset:{
            height:10,
            width:10
        },
        shadowOpacity:0.32,
        shadowRadius:6.5,
        elevation:11
    },
    square2:{
        padding:1,
        width:150,
        height:105,
        backgroundColor:'#182724',
        left:160,
        top:-20,
        borderRadius:12,
    },
    square3:{
        padding:1,
        width:150,
        height:105,
        backgroundColor:'#182724',
        left:160,
        top:0,
        borderRadius:12,
    },
    rectangle2:{
        width:70,
        height:110,
        backgroundColor:'#03DA99',
        left:40,
        borderRadius:12,
        left:15,
        top:-120,
        borderTopWidth: 30,
    },
    Buttom:{
        justifyContent:'center',
        alignItems:'center',
        padding:1,
        left:1,
        top:30,
    },
    customButtom:{
        width:390,
        height:80,
        backgroundColor:'#182724',
        borderTopTopRadius:31,
        borderBottomRightRadius:67,
        borderBottomLeftRadius:67,
        borderEndEndRadius:31,
        borderRadius:10,
        
    },
    homeCircleButtom:{
        width:49* 2,
        height:45* 2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:60,
        backgroundColor:'#182724',
        left:145,
        top:-13,
    },
    });
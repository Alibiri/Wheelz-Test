import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const BuyNftCollection = () => {
    return (
        <View style={styles.container}>
        <SafeAreaView>
            {/*Navigation Bar */}
        <View style={styles.headerWrapper}>
        <View style={styles.arrowIcon}>
                    <TouchableOpacity>
                    <MaterialIcons name="keyboard-arrow-left" size={50} color="#01F2CF" />
                    </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.notificationIcon}>
                        <TouchableOpacity>
                        <Ionicons name="notifications" size={40} color="white" />
                        </TouchableOpacity> 
                        </View>
                        </View>
                        <View>
                        <TouchableOpacity>  
                        <Ionicons name="ios-settings" size={50} color="#162E2B" />
                        </TouchableOpacity>  
                        </View>
            </View>        
        </SafeAreaView>
        {/*NFTimage */} 
        <View style={styles.NftWrapper}>
        <Text style={{color: '#FFFFFF',fontSize:20,lineHeight:30}}>PEUGEOT - LR01</Text>
        <View style={styles.NftImage}>
        <Image
            source={require('../../assets/monkeyNFT.png')}
            style={styles.profileNft}/> 
        </View>
        </View>  
        {/*Description */} 
        <View style={styles.WrapperDescreption}>
            <View style={styles.Name}>
            <Text style={{color: 'white', fontSize:17}}>WHEELZ - LR01</Text> 
            <TouchableOpacity>
            <Entypo name="heart-outlined" size={22} color="white" style={styles.TrendingItemIcon}/> 
            </TouchableOpacity> 
            </View>
            <Image
            source={require('../../assets/1.png')}
            style={{top:21,left:40}}/> 
                <View style={styles.DescriptionList1}> 
                <Text style={{color:'white',fontSize:19,left:-1}}>level:</Text>
                <Text style={{color:'white',fontSize:19,right:10}}> 06</Text>
                </View>
                <Image
                source={require('../../assets/2.png')}
                style={{top:21,left:40}}/>
                <View style={styles.DescriptionList1}>
                <Text style={{color:'white',fontSize:15,left:16}}>experience: </Text>
                <Text style={{color:'white',fontSize:15,right:20}}>1850</Text>
                </View>
                <Image
                source={require('../../assets/3.png')}
                style={{top:21,left:40}}/>
                <View style={styles.DescriptionList1}>
                <Text style={{color:'white',fontSize:15,left:15}}>rarity:</Text>
                <Text style={{color:'white',fontSize:15,right:-7}}>legendary</Text>
                </View >
                <Image
                source={require('../../assets/4.png')}
                style={{top:21,left:40}}/>
                <View style={styles.DescriptionList1}>
                <Text style={{color:'white',fontSize:15,left:2}}>ratio: </Text>
                <Text style={{color:'white',fontSize:15,right:6}}>1.6</Text>
                </View>
                <Image
                source={require('../../assets/5.png')}
                style={{top:21,left:40}}/>
                <View style={styles.DescriptionList1}>
                <Text style={{color:'white',fontSize:15,left:7}}>time left: </Text>
                <Text style={{color:'white',fontSize:15,right:17}}>25</Text>
                </View>
                <Image
                source={require('../../assets/6.png')}
                style={{top:21,left:40}}/>
                <View style={styles.DescriptionList1}>
                <Text style={{color:'white',fontSize:15,left:30}}>total distance: </Text>
                <Text style={{color:'white',fontSize:15,right:20}}>24.567</Text>
                </View>
                <Image
                source={require('../../assets/7.png')}
                style={{top:21,left:40}}/>
                <View style={styles.DescriptionList1}>
                <Text style={{color:'white',fontSize:15,left:22}}>total reward:</Text>
                <Text style={{color:'white',fontSize:15,right:15}}> 9463 </Text>
                </View>
                <View style={styles.shadow}>
                <TouchableOpacity>
                <View style={styles.buyBottom}>
                    <Text style={{color:'#03DABB',fontSize:25,right:-33,paddingTop:-5}}>Buy</Text>
                </View>
                </TouchableOpacity>
                </View>
            </View>
            {/*Buttom */} 
            <View style={styles.Buttom}>
                <SafeAreaView>
                    <View style={styles.customButtom}>
                        <View style={styles.homeCircleButtom}>
                        <View style={styles.customIconBike}>
                        <TouchableOpacity>
                        <MaterialIcons name="pedal-bike" size={30} color="white" />
                        </TouchableOpacity>
                        </View>
                        <View style={styles.customIconNft}>
                        <TouchableOpacity>
                        <Image
                            source={require('../../assets/NFT.png')}
                            style={{height:30,width:30}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.customIconRoad}>
                        <TouchableOpacity>
                        <Entypo name="merge" size={24} color="#166534" />
                        </TouchableOpacity>
                        </View>
                        <View style={styles.customIconUser}>
                        <TouchableOpacity>
                        <Feather name="user" size={24} color="#166534" />
                        </TouchableOpacity>
                        </View>
                        <View style={styles.customIconThunder}>
                        <TouchableOpacity>
                        <Image
                            source={require('../../assets/thunderr.png')}/>
                        </TouchableOpacity>    
                        </View>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}

export default BuyNftCollection

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:'#0C1615'
        },
        headerWrapper:{
            justifyContent: 'space-between',
            flexDirection:'row',
            paddingHorizontal:20,
            alignItems: 'center',
            paddingTop:30,
            left:5,
        },
        arrowIcon:{
            left:-20,
            alignItems: 'center',
        },
        notificationIcon:{
            left:80,
            alignItems: 'center',
        },
        NftWrapper:{
            alignItems: 'center',
            paddingTop:1,
        },
        profileNft:{
            width:250,
            height:250
        },
        WrapperDescreption:{
            width:400,
            height:400,
            backgroundColor:'#182724',
            borderRadius:12, 
            
        },
        Name:{
            justifyContent:'space-around',
            flexDirection:'row',
            paddingTop:20
        },
        DescriptionList1:{
            justifyContent:'space-around',
            flexDirection:'row',
            alignItems: 'center',
            textAlign:'center',
            paddingTop:-40,
            left:-10
        },
        buyBottom:{
            padding:1,
            width:110,
            height:35,
            backgroundColor:'#182724',
            borderRadius:6,
            borderRightWidth:1,
            borderLeftWidth:1,
            left:140,
            borderWidth:2
        },
        shadow:{
            shadowColor:'#182724',
            shadowOffset:{
                height:10,
                width:10
            },
            shadowOpacity:0.32,
            shadowRadius:6.5,
            elevation:11
        },
        Buttom:{
            justifyContent:'center',
            alignItems:'center',
            padding:1,
            top:-30,
            height:10,
            width:120,
            left:137
        },
        customButtom:{
                width:390,
                height:80,
                backgroundColor:'#0C1615',
                borderTopTopRadius:31,
                borderBottomRightRadius:67,
                borderBottomLeftRadius:67,
                borderEndEndRadius:31,
                borderRadius:10,
                marginTop:12
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
        customIconBike:{
            top:115,
            left:-140
        },
        customIconNft:{
            left:-80,
            top:85
        },
        customIconRoad:{
            left:75,
            top:59
        },
        customIconUser:{
            left:140,
            top:35
        },
        customIconThunder:{
            top:-45
        }
})
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import TrendingData from '../../assets/data/TrendingData';
import CollectionData from '../../assets/data/CollectionData';
import RecentData from '../../assets/data/RecentData';
import { Feather } from '@expo/vector-icons';
const SIZE = 18;
const CIRCLE_RADUSE= SIZE * 2;
const Nftpage = () => {

const RenderTrendingDataitem = ({ item }) =>{
    return (
        <View style={styles.TrendingItemWrapper}>
            {/*Navigation Bar */} 
            <TouchableOpacity>
            <Entypo name="heart-outlined" size={22} color="white" style={styles.TrendingItemIcon}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={item.image} style={styles.TrendingItemImage}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.TrendingItemText}>
            <Text style={{color: '#FFFFFF99',fontSize:13}}>{item.title1}</Text>
            <Text style={{color:'#FFFFFF',fontSize:15}}>{item.title2}</Text>
            <Text style={{color:'#FFFFFF99',fontSize:13}}>{item.price}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
}    ;
    return (
        <View style={styles.container}>
            <SafeAreaView>
            <View style={styles.headerWrapper}>
            <View style={{left:-30,top:1}}>
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
                        <TouchableOpacity>
                        <View style={styles.collection}>
                            <Text style={{color: '#01F2CF',alignSelf:'center',top:5}}>My Collection</Text>
                        </View>
                        </TouchableOpacity>
                        <View>
                        <TouchableOpacity>
                        <Ionicons name="notifications" size={40} color="white" />
                        </TouchableOpacity> 
                        </View>
                        <View>
                        <TouchableOpacity>  
                        <Ionicons name="ios-settings" size={50} color="#162E2B" />
                        </TouchableOpacity>  
                        </View>
            </View>    
            </SafeAreaView>
            {/*Liste*/}  
                <View style={styles.List}>
                <TouchableOpacity>
                <Text style={{color: '#FFFFFF'}}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color:'#FFFFFF80'}}>NFT</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color:'#FFFFFF80'}}>Items</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color:'#FFFFFF80'}}>Box</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color:'#FFFFFF80'}}>Booster</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.square}>
                </View>
                <View style={styles.Wrapper}>    
            {/*Trending Today*/}  
            <View style={styles.TrendingWrapper}>
                <Text style={{color:'#FFFFFF',fontSize:20,left:20}}>TRENDING TODAY</Text>
                <View style={styles.TrendingListWrapper}>
                <FlatList
                data={TrendingData}
                renderItem={RenderTrendingDataitem}
                keyExtractor={(item) => item.id}
                horizontal={true}/>
                </View>
            </View>
            {/*TOP COLLECTIONS*/}  
            <View style={styles.CollectionWrapper}>
                <Text style={{color:'#FFFFFF',fontSize:20,left:20}}>TOP COLLECTIONS</Text>
                <View style={styles.CollectionListWrapper}>
                <FlatList
                data={CollectionData}
                renderItem={RenderTrendingDataitem}
                keyExtractor={(item) => item.id}
                horizontal={true}/>
                </View>
            </View>
            {/*RECENT ACTIVITY */} 
            <View style={styles.RecentWrapper}>
                <Text style={{color:'#FFFFFF',fontSize:20,left:20}}>RECENT ACTIVITY </Text>
                <View style={styles.RecentListWrapper}>
                <FlatList
                data={RecentData}
                renderItem={RenderTrendingDataitem}
                keyExtractor={(item) => item.id}
                horizontal={true}/>
                </View>
            </View>
            </View >
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

export default Nftpage

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
    collection:{
        padding:1,
        width:110,
        height:35,
        backgroundColor:'#182724',
        borderRadius:6,
        borderRightWidth:1,
        borderLeftWidth:1,
        left:-40
    },
    List:{
        justifyContent: 'space-around',
        flexDirection:'row',
        alignItems:'center',
        top:20
    },
    square:{
        padding:1,
        width:50,
        height:4,
        backgroundColor:'#03DA99',
        top:30,
        right:-8
    },
    TrendingWrapper:{
        textDecoration:'underline',
        top:40,
        letterSpacing:'2%',
        lineHeight:24.38,
    },
    TrendingListWrapper:{
        paddingTop:8,
        paddingHorizontal:20,
    },
    TrendingItemWrapper:{
        backgroundColor:'#35413F',
        marginRight:20,
        borderRadius:20,
    },
    TrendingItemIcon:{
        left:95,
        top:20
    },
    TrendingItemImage:{
        height:90,
        width:120,
        marginTop:-20,
        alignSelf:'center',
        left:-10
    },
    TrendingItemText:{
        textAlign:'center',
        left:10
    },
    CollectionWrapper:{
        textDecoration:'underline',
        top:40,
        letterSpacing:'2%',
        lineHeight:24.38,
    },
    CollectionListWrapper:{
        paddingTop:8,
        paddingHorizontal:20,
    },
    CollectionItemWrapper:{
        backgroundColor:'#35413F',
        marginRight:20,
        borderRadius:20,
    },
    CollectiontemIcon:{
        left:100,
        top:20
    },
    CollectionItemImage:{
        height:90,
        width:120,
        marginTop:-20,
        alignSelf:'center',
        left:-10
    },
    CollectionItemText:{
        textAlign:'center',
        left:10
    },
    RecentWrapper:{
        textDecoration:'underline',
        top:40,
        letterSpacing:'2%',
        lineHeight:24.38,
        top:45
    },
    RecentListWrapper:{
        paddingTop:8,
        paddingHorizontal:20,
    },
    RecentItemWrapper:{
        backgroundColor:'#35413F',
        marginRight:20,
        borderRadius:20,
    },
    RecentItemIcon:{
        left:100,
        top:20
    },
    RecentItemImage:{
        height:90,
        width:120,
        marginTop:-20,
        alignSelf:'center',
        left:-10
    },
    RecentItemText:{
        textAlign:'center',
        left:10
    },
    Buttom:{
        justifyContent:'center',
        alignItems:'center',
        padding:1,
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
        top:120,
        left:-140
    },
    customIconNft:{
        left:-80,
        top:89
    },
    customIconRoad:{
        left:75,
        top:63
    },
    customIconUser:{
        left:140,
        top:40
    },
    customIconThunder:{
        top:-45
    }
})
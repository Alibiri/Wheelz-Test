import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const SIZE = 20;
const CIRCLE_RADUSE= SIZE * 2;
const MapInterface = () => {
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
                        <View style={styles.NameNft}>
                        <TouchableOpacity>
                        <Text style={{color:'#01F2CF',fontSize:17,}}>WHEELZ - LR01</Text>
                        </TouchableOpacity> 
                        </View>
                        </View>
                        <View>
                        <TouchableOpacity>  
                        <Feather name="search" size={24} color="#FFFFFF80" />
                        </TouchableOpacity>  
                        </View>
            </View>        
        </SafeAreaView>
         {/*NFTimage */} 
        <View style={styles.TimeMoneyWrapper}>
            <Text style={{color:'#FFFFFF',fontSize:32,right:30}}>00:07:30</Text>
            <Text style={{color:'#FFFFFF',fontSize:32,left:30}}>10$</Text>
        </View>  
            <View>
            <Text style={{color:'#FFFFFF',fontSize:20,left:155,top:-30}}>Time</Text>
            </View>
            <View>
            <Text style={{color:'#C4C4C4',fontSize:20,left:55,top:-30}}>2.7 KM</Text>
            </View>
            <TouchableOpacity>
            <View style={styles.Pause}>   
            <View style={styles.circle}>
            <View style={[styles.PauseBottnCercle]}>
                <Text style={{color:'#FFFFFF',fontSize:18}}>Pause</Text>
            </View>
            </View> 
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.Stop}>
            <View style={styles.circle2}>
            <View style={styles.StopBottnCercle}>
                <Text style={{color:'#FFFFFF',fontSize:18}}>Stop</Text>
            </View>
            </View>
            </View>
            </TouchableOpacity>
            <View style={styles.BatteryChargingFull}>
            <MaterialIcons name="battery-charging-full" size={24} color="#03DABB" />
            </View>
        </View>
    )
}

export default MapInterface

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
    NameNft:{
        left:-90,
            alignItems: 'center',
    },
    TimeMoneyWrapper:{
        textAlign: 'center',
        justifyContent:'space-around',
        flexDirection: 'row',
    },
    Pause:{
        top:155
    },
    circle:{
        width:30 * 2 ,
        height:30 * 2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:CIRCLE_RADUSE,
        borderWidth:2,
        borderColor:'#03DA99',
        left:50,
        backgroundColor:'#999999',
        top:300
    },
    PauseBottnCercle:{
        width: 60 * 1.5 ,
        height:60 * 1.5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:CIRCLE_RADUSE,
        borderWidth:0.8,
        borderColor:'#FFFFFF',
    },
    circle2:{
        width:30 * 2 ,
        height:30 * 2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:CIRCLE_RADUSE,
        borderWidth:2,
        borderColor:'#03DA99',
        left:50,
        backgroundColor:'#8D0101',
        top:450
    },
    StopBottnCercle:{
        width: 60 * 1.5 ,
        height:60 * 1.5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:CIRCLE_RADUSE,
        borderWidth:0.8,
        borderColor:'#FFFFFF',
    },
    Stop:{
        left:230,
        top:-57,
    },
    shadow:{
        shadowColor:'#03DABB',
        shadowOffset:{
            height:5,
            width:5
        },
        top:-17,
        shadowOpacity:0.32,
        shadowRadius:6.5,
        elevation:20
    },
    BatteryChargingFull:{
        justifyContent:'center',
        alignItems: 'center',
        top:430
    }
})
import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function MyStocks() {
    const data=[
        {
            name:"SBI",
            symbol:"SBI",
            invested:12000,
            profit:31.44,
            returns:12
        },
        {
            name:"ICICI",
            symbol:"ICICI",
            invested:32050,
            profit:75.71,
            returns:12
        },
         {
            name:"HDFC",
            symbol:"HDFC",
            invested:14500,
            profit:42.61,
            returns:12
        },
         {
            name:"AXIS",
            symbol:"AXIS",
            invested:14300,
            profit:51.03,
            returns:12
        },

    ]
  return (
    <View
        style={{
            flex:0.3,
            backgroundColor:"white",
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
        }}
    >
      <Text
        style={{
            fontSize:16,
            paddingHorizontal:10,
            margin:5,
            fontWeight:"bold",
            color:"black"
        }}
      >My Invests</Text>

      <ScrollView
        style={{
            flex:1
        }}
      >
            {data.map((item,index)=>(
                <Item 
                    key={index}  
                    name={item.name}
                    symbol={item.symbol}
                    invested={item.invested}
                    profit={item.profit}
                    returns={item.returns}
                />
            ))}
      </ScrollView>
    </View>
  )
}

function Item(props){
    return(
        <View
            style={{
                flexDirection:"row",
                justifyContent:"space-between",
                backgroundColor:"white",
                borderRadius:10,
                marginHorizontal:10,
                marginVertical:5,
                padding:10,
                elevation:2
            }}
        >
            <View
                style={{
                    flexDirection:'row'
                }}
            >
                <View
                    style={{
                        backgroundColor:"#e8daf0",
                        paddingHorizontal:10,
                        borderRadius:10,
                    }}
                >
                    <Text
                        style={{
                            color:"#800080",
                            fontSize:30
                        }}
                    >{props.name[0]}</Text>
                </View>
                <View
                        style={{
                            marginLeft:10,
                            justifyContent:'center'
                        }}
                >
                    <Text
                        style={{
                            fontWeight:"bold",
                            fontSize:18
                        }}
                    >{props.name}</Text>
                    <Text
                        style={{
                            color:"grey",
                            fontSize:12
                        }}
                    >{props.symbol}</Text>
                </View>
            </View>
            <View
                style={{
                    justifyContent:"center",
                }}
            >
                <Text
                    style={{
                        fontWeight:"bold",
                        fontSize:18 
                    }}
                >₹ {props.invested}</Text>
                <Text
                    style={{
                        color:"#800080",
                        fontSize:12
                    }}
                >+₹{props.profit} ({props.returns}%)</Text>
            </View>
        </View>
    )
}
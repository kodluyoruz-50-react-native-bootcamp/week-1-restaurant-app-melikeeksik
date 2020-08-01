import React from "react";
import { SafeAreaView, View, Text, Image, Dimensions } from "react-native";
import { Icon } from 'react-native-elements'
const ListItem = (props) => {
    return (
        <SafeAreaView>
            <View>
                <Image
                    style={{
                        width: Dimensions.get("window").width * 0.9,
                        height: 180,
                        resizeMode: "stretch",
                        borderRadius: 10,
                        padding: 10,
                        margin: 10
                    }}
                    source={{ uri: props.myData.image }}
                ></Image>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View><Text style={{ fontSize: 20,fontWeight: "bold", margin: 10 }}>{props.myData.name}</Text>
                <Text>{props.myData.location}</Text>
                    </View>
                
                <View>
                <Image style={{height:30,width:30}}source={{uri:"https://i1.wp.com/www.vectorico.com/wp-content/uploads/2019/01/heart-icon.png?resize=300%2C300"}}></Image>
                <Text>{props.myData.likes}</Text>
                </View>
                   
                </View>
            </View>
        </SafeAreaView>
    );
};
export default ListItem;

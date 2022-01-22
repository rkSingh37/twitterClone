import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { View, Text,Button,ActivityIndicator } from 'react-native'
import Header from '../../components/Header'
import TweetIcon from '../../components/TweetIcon'
import TweetFeed from '../../components/TweetFeed'
import api from '../../api'

const Home = ({route,navigation}) => {
    console.log('setting home states');
    const postSuccess=route.params?.postSuccess;
    console.log(postSuccess);
    const [showTweet,setShowTweet]=useState(false);
    const [data,setData]=useState([{}])
    useEffect(async ()=>{
        console.log('the effect running for home');
        await api.get("/api/posts/allPost")
                    .then(response=>{
                        if (response.data){
                            console.log('the data in home',response.data);
                            setData(response.data.post);
                            setShowTweet(true);
                        }
                    })
    },[postSuccess])
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user);

    return (
        <View>
            <Header screenName="Home"/>
            {showTweet?<TweetFeed allData={data}/>:<ActivityIndicator size="large"/>}
            {/* <TweetFeed allData={data}/> */}
            <TweetIcon/>
        </View>
    )
}

export default Home

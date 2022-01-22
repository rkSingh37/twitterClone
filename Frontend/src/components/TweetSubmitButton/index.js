import React from 'react'
import { PostButton,Container } from './styles/submitButton'
import api from '../../api';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
// import { postingPost } from '../../Redux/Actions/postAction';

const TweetSubmitButton = ({post}) => {
    const navigation=useNavigation();
    const user=useSelector(state=>state.user);
    // const getpost=useSelector(state=>state.post);
    const submitPost=async ()=>{
        api.post('/api/posts',{
            content: post.trim(),
            postedBy: user._id
        }).then(data=>{
            if (data){
                console.log('the data we get from post api is',data);
                return navigation.navigate('Home',{postSuccess: true});
            }
            // console.log('the data after submitting',data);
        })
        .catch((err)=>console.error(err.message));
        
    }
    return (
        <Container>
                    <PostButton title="Tweet" onPress={()=>submitPost()}/>

        </Container>
    )
}

export default TweetSubmitButton

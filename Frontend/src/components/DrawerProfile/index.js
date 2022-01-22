import React from 'react'
import { Container,ProfilePic,ProfileInfo,FullName,HandlerName } from './styles/profile'
const DrawerProfile = ({user,...restProps}) => {
    console.log('the profiel',restProps)
    return (
        <Container {...restProps}>
            <ProfilePic source={require('../../../assets/profilePic.png')}/>
            <ProfileInfo>
                <FullName>{`${user.firstName} ${user.lastName}`}</FullName>
                <HandlerName>{`@${user.username}`}</HandlerName>
            </ProfileInfo>
        </Container>
    )
}

export default DrawerProfile

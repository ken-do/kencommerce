import React from 'react';
import { View, Text, Button } from 'react-native';

const UserDashboard = ({ logout }) => {
    return (
        <View>
            <Text>User Details</Text>
            <Button onPress={() => console.log('updating profile')} title={'update profile'}/>
            <Button onPress={logout} title={'logout'}/>
        </View>
    )
}

export default UserDashboard;
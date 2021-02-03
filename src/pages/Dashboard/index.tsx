import React from 'react';
import {} from 'react-native';
import Button from '../../components/Button';

import {useAuth} from '../../hooks/auth';

const Dashboard: React.FC = ()=>{
const {signOut} = useAuth();
return (
    <view style={{flex: 1, justifyContent: 'center'}}>
        <Button title="Sair" onKeyPress={signOut} />
    </view>
);
};

export default Dashboard;

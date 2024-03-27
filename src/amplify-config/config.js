import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        // Your Cognito Auth Configuration
        region: 'ap-southeast-2',
        userPoolId: 'ap-southeast-2_DywFHhUHW',
        userPoolWebClientId: '6iehitpl06a1q2podjn6og1qti',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});



exports.handler = (event, context, callback) => {
    console.log('LOG HERE')
    event.response.autoConfirmUser = true;

    // Return to Amazon Cognito
    callback(null, event);
};

const testData = {
    users: [
        { Username: 'user1', Password: 'password1' },
        { Username: 'user2', Password: 'password2' }
    ]
};

testData.users.forEach(element => {
    console.log(element.Username);
    console.log(element.Password);

});
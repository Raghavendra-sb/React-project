import React from 'react'

const UserContext = React.createContext();//why im not passing any default value here? 
// Because i want to use this context only when the provider is used in the component tree.
//  If i pass any default value here, it will be used when the provider is not found in the component tree. 
// So, i will not pass any default value here.


export default UserContext;
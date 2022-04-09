import {signInWithGooglePopup, createUserDocumnet} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userRef = await createUserDocumnet(user);
        console.log(userRef);
    };
    

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>SignIn with Google Popup</button>
        </div>
    );
};

export default SignIn
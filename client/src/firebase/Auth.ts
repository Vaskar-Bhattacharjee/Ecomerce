import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    User,
    updateProfile,
    sendPasswordResetEmail 
  } from "firebase/auth";


  class Auth {
      private auth = getAuth();       

      async signUp(email: string, password: string, name: string): Promise<User | null> {
        try {
            // 1. Create user account
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            
            // 2. Update user profile with display name
            if (userCredential.user) {
                await updateProfile(userCredential.user, {
                    displayName: name
                });
                
                // 3. Force refresh to get updated user data
                await userCredential.user.reload();
                
                return this.auth.currentUser; // Return updated user
            }
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
      }

      async login(email: string, password: string) {
       try {
        const userLogin =  await signInWithEmailAndPassword(this.auth, email, password)
        return userLogin;
        console.log(userLogin)
       } catch (error) {
        console.log(error);
       }

  }
  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.log(error);
    }

  }
  async passwordReset(email: string) {
    try {
     await sendPasswordResetEmail(this.auth, email)
  } catch (error) {
    console.log(error);
  }

}}

export default new Auth();
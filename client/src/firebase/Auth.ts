import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    User
  } from "firebase/auth";


  class Auth {
      private auth = getAuth();       

      async signUp(email: string, password: string){
        try {
           const userCredential = await createUserWithEmailAndPassword(this.auth, email, password)
            console.log('user created')
            return userCredential.user;
       
        } catch (error) {
            console.log(error)
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

}

export default new Auth();
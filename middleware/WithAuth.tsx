import React, { useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { GlobalContext } from '../contexts/GlobalContext';

const withAuth = (WrapperComponent: React.ComponentType) => {
  return function Auth(): React.ReactElement {
    const router = useRouter()
    const {setUser} = useContext(GlobalContext)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, function (user: any) {
          if (user) {
            setUser(user)
          } else {
            router.push("login")
          }
        });
      // TODO: get user logged in now
    }, []);
    return <WrapperComponent />;
  };
};

export default withAuth;

/* eslint-disable quote-props */
import { createContext, useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import userAPI from '@/services/userAPI';

export type AuthContextType = {
  authorization: string,
}

export const AuthContext = createContext<AuthContextType>({ authorization: '' });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { 'data': session, status } = useSession();
  const [authorization, setAuthorization] = useState('');

  useEffect(() => {
    if (status === 'authenticated') {
      (async () => {
        try {
          await userAPI.login(session?.id_token);
          const response = await userAPI.getAuth();
          const data = response.data;

          setAuthorization(data.description);
        } catch (error: any) {
          console.log(error.message);
        }
      })();
    }
  }, [session?.id_token, status]);

  return (
    <AuthContext.Provider value={{ authorization }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
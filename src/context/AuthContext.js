import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useInterval } from "usehooks-ts";
import PocketBase from "pocketbase";
import jwtDecode from "jwt-decode";
import ms from "ms";

const fiveMinutesInMs = ms("5 minutes");
const twoMinutesInMs = ms("2 minutes");

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const pb = useMemo(() => new PocketBase(process.env.NEXT_APP_PB_URL), []);

  const [token, setToken] = useState(pb.authStore.token);
  const [user, setUser] = useState(pb.authStore.model); // user gonna be -> all infos from pb about currently logged in user (e.g.: UserIdentificator, email)

  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model);
    });
  }, []);

  useEffect(() => {
    console.log(token);
    console.log(user);
  }, [token, user]);

  const register = useCallback(
    async (email, password, passwordConfirm, UserIdentificator) => {
      return await pb
        .collection("users")
        .create({ email, password, passwordConfirm, UserIdentificator });
    },
    []
  );

  const login = useCallback(async (email, password) => {
    return await pb.collection("users").authWithPassword(email, password);
  }, []);

  const logout = useCallback(() => {
    pb.authStore.clear();
  }, []);

  const refreshSession = useCallback(async () => {
    if (!pb.authStore.isValid) return;
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const expirationWithBuffer = (decoded.exp + fiveMinutesInMs) / 1000;
    if (tokenExpiration < expirationWithBuffer) {
      await pb.collection("users").authRefresh();
    }
  }, [token]);

  useInterval(refreshSession, token ? twoMinutesInMs : null);

  return (
    <AuthContext.Provider value={{ register, login, logout, user, token, pb }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { initAuth } from "@/redux/slices/authSlice";

function AuthInit() {
  useEffect(() => {
    store.dispatch(initAuth());
  }, []);
  return null;
}

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <AuthInit />
      {children}
    </Provider>
  );
}

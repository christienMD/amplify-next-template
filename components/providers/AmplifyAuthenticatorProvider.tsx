"use client";

import { Authenticator } from "@aws-amplify/ui-react";

const AmplifyAuthenticatorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Authenticator>{children}</Authenticator>;
};

export default AmplifyAuthenticatorProvider;

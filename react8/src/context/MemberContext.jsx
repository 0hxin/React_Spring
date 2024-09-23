import React from "react";

const MemberContext = React.createContext('Guest');

export const MemberProvider = MemberContext.Provider;
export const MemberConsumer = MemberContext.Consumer;

MemberContext.displayName = 'Member';

export default MemberContext;
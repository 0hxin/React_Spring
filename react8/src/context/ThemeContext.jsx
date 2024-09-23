import React from "react";

// createContext : Context 객체 생성
const ThemeContext = React.createContext('yellowBtn');

// Provider : 생성한 context 를 하위 컴포넌트에 전달
export const ThemeProvider = ThemeContext.Provider;
// Consumer : context 변화 감시하는 컴포넌트
export const ThemeConsumer = ThemeContext.Consumer;

ThemeContext.displayName = 'Theme';

export default ThemeContext;
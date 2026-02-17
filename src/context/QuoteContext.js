"use client";
import { createContext, useContext } from 'react';

export const QuoteContext = createContext();

export const useQuote = () => useContext(QuoteContext);

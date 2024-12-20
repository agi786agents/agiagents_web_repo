import React from 'react';
import { Link } from 'react-router-dom';
import logoGif from '../media/fav.gif';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src={logoGif}
        alt="AGI Agents Logo"
        className="w-8 h-8 object-contain"
      />
      <span className="text-white font-bold text-xl">AGI Agents</span>
    </Link>
  );
}
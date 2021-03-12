import dotenv from 'dotenv';
import React from 'react';
import { render } from 'react-dom';
import { HomeApp } from './pages/app';

dotenv.config({ path: '../.env' });

render(<HomeApp />, document.getElementById('root'));
const express = required('express');
const db = required('./config/connection');
const routes = required('./routes');

const PORT = process.env.PORT || 3001;
const app = express();


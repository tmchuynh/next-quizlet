import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { UserRoutes } from './routes/userRoutes'; // Named import for consistency
// import { QuizRoutes } from './routes/quizRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use( cors() );
app.use( express.json() );

// Routes
app.use( '/api/users', UserRoutes );
// app.use('/api/quizzes', QuizRoutes);

app.listen( PORT, () => {
    console.log( `Server running on http://localhost:${ PORT }` );
} );

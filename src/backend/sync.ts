// scripts/sync.ts

import sequelize from './config/database';
import '../models'; // Ensure all models are imported to register them with Sequelize

( async () => {
    try {
        await sequelize.sync( { alter: true } );
        console.log( 'Database synced successfully' );
    } catch ( error ) {
        console.error( 'Failed to sync database:', error );
    } finally {
        await sequelize.close(); // Close the connection after syncing
    }
} )();

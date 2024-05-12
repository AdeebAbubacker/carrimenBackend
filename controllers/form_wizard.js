import connection from '../db/connect.js';

const getFormWizard= (req, res) => {
    connection.query('SELECT * FROM form_wizard_2', (error, results, fields) => {
        if (error) {
            console.error('Error fetching admin roles:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
};

export { getFormWizard };
import connection from '../db/connect.js';

const getQrCode = (req, res) => {
    connection.query('SELECT * FROM qr_code', (error, results, fields) => {
        if (error) {
            console.error('Error fetching admin roles:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
};

export { getQrCode };




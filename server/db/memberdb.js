const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'mdt454'
});

const memberDB = {};

memberDB.getAllMembers = () => {
    return new Promise((resolve, reject) => {
        const selectAllMember = 'SELECT * FROM mdt454.member'; 
        db.query(selectAllMember, (err, result) => {
            if(err){
                console.error(err);
                return reject(err);
            }
            console.log(result);
            resolve(result);
        });
    });
};

memberDB.updateMember = (id, new_name) => {
    return new Promise((resolve, reject) => {
        const updateMember = 'UPDATE mdt454.member SET name = ? WHERE id = ?'; 
        db.query(updateMember, [new_name, id], (err, result) => {
            if(err){
                console.error(err);
                return reject(err);
            }
            console.log(result);
            resolve(result);
        });
    });
}


module.exports = memberDB;
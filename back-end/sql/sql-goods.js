module.exports = {
    queryById: 'SELECT * FROM ?? WHERE id=?',
    queryAll: 'SELECT * FROM ??',
    insert:'INSERT INTO ??(id, name, age) VALUES(0,?,?)',
    update:'UPDATE ?? SET name=?, age=? WHERE id=?',
    delete: 'DELETE FROM ?? WHERE id=?',
};
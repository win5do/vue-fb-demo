module.exports = {
    queryAll: 'SELECT * FROM ??',
    queryById: 'SELECT * FROM ?? WHERE id=?',
    del: 'DELETE FROM ?? WHERE id=?',
    insert: 'INSERT INTO ??(name, price) VALUES(?,?)',
    update: 'UPDATE ?? SET name=?, age=? WHERE id=?',
};

const db = require('../config/database');
const Account = require('./account.model');
const RefreshToken = require('./refresh-token.model');

// Relationships without strict foreign key constraints
Account.hasMany(RefreshToken, { foreignKey: 'AccountId', onDelete: 'CASCADE', constraints: false });
RefreshToken.belongsTo(Account, { foreignKey: 'AccountId', constraints: false });

module.exports = {
    db,
    Account,
    RefreshToken
};
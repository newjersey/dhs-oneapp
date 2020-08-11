
'use strict';
const Settings = require('../../../Settings');
const { Op, Sequelize } = require("sequelize");

// Bring in models and pass db connection object
const Employer = require('./Employer')(Settings.sequelize);
const Account = require('./Account')(Settings.sequelize);
const DailyAccountStats = require('./DailyAccountStats')(Settings.sequelize);
const DailyStats = require('./DailyStats')(Settings.sequelize);
const DailyUserStats = require('./DailyUserStats')(Settings.sequelize);
const Invite = require('./Invite')(Settings.sequelize);
const Payroll = require('./Payroll')(Settings.sequelize);
const PayrollEntry = require('./PayrollEntry')(Settings.sequelize);
const PayrollGroup = require('./PayrollGroup')(Settings.sequelize);
const SavingGoal = require('./SavingGoal')(Settings.sequelize);
const Session = require('./Session')(Settings.sequelize);
const Statement = require('./Statement')(Settings.sequelize);
const Transaction = require('./Transaction')(Settings.sequelize);
const Template = require('./Template')(Settings.sequelize);
const User = require('./User')(Settings.sequelize);
const UserToEmployer = require('./UserToEmployer')(Settings.sequelize);
const LoginStats = require('./LoginStats')(Settings.sequelize);
const UserVerificationStatus = require('./UserVerificationStatus')(Settings.sequelize);
const InboundEmail = require('./InboundEmail')(Settings.sequelize);
const ContactRequest = require('./ContactRequest')(Settings.sequelize);
const UserAction = require('./UserAction')(Settings.sequelize);
const Document = require('./Document')(Settings.sequelize);
const Job = require('./Job')(Settings.sequelize);
const EmailStats = require('./EmailStats')(Settings.sequelize);
const Tip = require('./Tip')(Settings.sequelize);
const UserToTip = require('./UserToTip')(Settings.sequelize);
const Institution = require('./Institution')(Settings.sequelize)

// Sync all models at once
Settings.sequelize.sync({ force: false, alter: false });

// Setup associations
User.hasMany(UserToEmployer, {as: 'employerRelationship', foreignKey : 'userId'});
UserToEmployer.belongsTo(User);

Employer.hasMany(UserToEmployer);
UserToEmployer.belongsTo(Employer);

Employer.hasMany(Payroll, {foreignKey : 'employerId'});
Payroll.belongsTo(Employer);

Employer.hasMany(PayrollGroup, {as: 'group', foreignKey : 'employerId'});
PayrollGroup.belongsTo(Employer);

User.hasMany(SavingGoal, {as: 'savingGoal', foreignKey : 'userId'});
SavingGoal.belongsTo(User);

Institution.hasMany(Account, {as: 'institution', foreignKey : 'institutionId'});
Account.belongsTo(Institution);

User.hasMany(Account, {foreignKey : 'userId'});
Account.belongsTo(User);

User.hasMany(Transaction, {foreignKey : 'userId'});
Transaction.belongsTo(User);

User.hasMany(Statement, {foreignKey : 'userId'});
Statement.belongsTo(User);

Account.hasMany(Statement, {foreignKey : 'accountId'});
Statement.belongsTo(Account);

Tip.hasMany(UserToTip);
UserToTip.belongsTo(Tip);

//PayrollGroup.hasMany(Payroll, {as: 'payroll', foreignKey : 'groupId'});
Payroll.belongsTo(PayrollGroup, {as: 'group', foreignKey : 'groupId'});

// Now export
module.exports = {
    SimMeta: require('./SimMeta')(Settings.sequelize),
    Bots: require('./Bots')(Settings.sequelize),
    Institution: Institution,
    Employer: Employer,
    UserToEmployer: UserToEmployer,
    Account: Account,
    DailyAccountStats: DailyAccountStats,
    DailyStats: DailyStats,
    DailyUserStats: DailyUserStats,
    Invite: Invite,
    Payroll: Payroll,
    PayrollEntry: PayrollEntry,
    PayrollGroup: PayrollGroup,
    SavingGoal: SavingGoal,
    Session: Session,
    Transaction: Transaction,
    Template: Template,
    User: User,
    Statement: Statement,
    LoginStats: LoginStats,
    UserVerificationStatus: UserVerificationStatus,
    InboundEmail: InboundEmail,
    ContactRequest: ContactRequest,
    UserAction: UserAction,
    Document: Document,
    EmailStats: EmailStats,
    Job: Job,
    UserToTip: UserToTip,
    Tip: Tip
}   
 
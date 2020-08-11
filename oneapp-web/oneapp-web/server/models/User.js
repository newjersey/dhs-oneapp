
"use strict";

const Sequelize = require('sequelize');
const uuidv4 = require('uuid/v4');
const _ = require('lodash');
const Cipher = require('../../utils/Cipher');
const Logger = require('../../utils/Logger.js')
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html

module.exports = function(bookshelf) {

    User = db.Model.extend({ tableName: 'users'}, {
        schema: [
            EmailField('email'),
            EncryptedStringField('password'),
            BooleanField('active'),
            HasMany('Photo'),
            Scope('isActive', function(){ return this.where({active: true}); })
        ]
    });
    

    var Model = sequelize.define('user', {
        userId: { type: Sequelize.STRING, defaultValue: uuidv4, key: 'USER_ID'}, 
        password: { type: Sequelize.STRING, key: 'PASSWORD' },
        hintQuestion: { type: Sequelize.TEXT, key: 'HINT_QUESTION' },
        hintAnswer: { type: Sequelize.TEXT, key: 'HINT_ANSWER'},
        creationDate: { type: Sequelize.STRING, key: 'CREATION_DATE'},
        hasEmailAddress: { type: Sequelize.STRING, key: 'HAS_EMAIL_ADDRESS'},
        emailAddress: { type: Sequelize.STRING, key: 'EMAIL_ADDRESS'}
    }, {
        createdAt: 'created', 
        updatedAt: 'modified',
        indexes: [
            {using: 'BTREE', fields: ['userId'], unique: true},
            {using: 'BTREE', fields: ['email'], unique: true},        
            {using: 'BTREE', fields: ['hasEmailAddress']},
            {using: 'BTREE', fields: ['emailAddress']}

        ]          
    });

    return Model
}
const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'Users';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'email', 'password', 'createdAt'],
      propperties: {
        id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1, maxLength: 255 },
        lastName: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 511 },
        createdAt: { type: 'dateTime' },
        updatedAt: { type: 'dateTime' },
        deletedAt: { type: 'dateTime' }
      }
    };
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

module.exports = User;

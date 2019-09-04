const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstname', 'lastname', 'email', 'password', 'createdAt'],
      propperties: {
        id: { type: 'integer' },
        firstname: { type: 'string', minLength: 1, maxLength: 255 },
        lastname: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 511 },
        createdAt: { type: 'dateTime' },
        updatedAt: { type: 'dateTime' },
        deletedAt: { type: 'dateTime' }
      }
    };
  }

  fullName() {
    return this.firstname + ' ' + this.lastname;
  }
}

module.exports = User;

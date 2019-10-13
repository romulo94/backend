import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        full_name: Sequelize.STRING,
        social_name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        gender: Sequelize.STRING,
        date_of_birth: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
        password: Sequelize.VIRTUAL,
      },
      { sequelize }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 16);
      }
    });
    return this;
  }
}

export default User;

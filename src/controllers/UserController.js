import User from '../models/user';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    const {
      id,
      full_name,
      social_name,
      email,
      gender,
      active,
    } = await User.create(req.body);

    return res.json({
      id,
      full_name,
      social_name,
      email,
      gender,
      active,
    });
  }
}

export default new UserController();

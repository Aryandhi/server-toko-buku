const {User} = require('../../db/models');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  signin: async(req, res, next)=> {
    try {
      const {email, password} = req.body;
      const checkUser = await User.findOne({where: {email: email} })

      if(checkUser) {
        const checkPassword = bycrypt.compareSync(password, checkUser.password);

        if(checkPassword){
          const token = jwt.sign({
            user: {
              id: checkUser.id,
              name: checkUser.name,
              email: checkUser.email,
            }, 
          },
          'secret'
          );
          res.status(200).json({message: 'Success Signin', data: token});
        }else{
          res.status(403).json({message: 'Invalid Password'});
        }
      } else{
        res.status(403).json({message: 'Invalid email'});
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}
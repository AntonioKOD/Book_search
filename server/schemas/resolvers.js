const { deleteBook } = require('../controllers/user-controller');
const {User} = require('../models')
const {signToken} = require('../utils/auth')
const resolvers = {
    Query: {
        user: async(parent,{userId})=> {
            return User.findOne({
                _id: userId
            })

        },
        me: async(parent, args, context) => {
            if(context.user){
                return User.findOne({_id: context.user._id}).populate('savedBooks')
            }
            throw new Error('This user doesnt exist')
        }
    },
    Mutation: {
        newUser: async(parent, {username, email, password})=> {
            const user = await User.create({username, email, password});
            const token = signToken(user);
            return {token, user}
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
        
            if (!user) {
                throw new Error('No user found with this email address');
            }
        
            const correctPw = await user.isCorrectPassword(password);
        
            if (!correctPw) {
                throw new Error('Incorrect password');
            }
        
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async(parent,{ book }, context )=> {
            console.log('Context: ',context.user._id)   
            try{ 
            if (!context.user) {
                throw new Error('You need to be logged in to save a book!');
            }     

            
           const updateUser = await User.findOneAndUpdate(
            {_id: context.user._id},
            {$addToSet: {savedBooks: book}},
            {new: true, runValidators: true},
           )
           console.log(updateUser)
           return updateUser
        } catch(err){
            console.log(err.message)
            throw new Error(err.message)
        }
        },
        deleteBook: async(parent,{_id}, context)=> {
            if (!context.user) {
                throw new Error('You need to be logged in to save a book!');
            }
            const updateUser = await User.findOneAndUpdate(
                {_id: context.user._id},
                {$pull: {savedBooks: {_id}}},
                {new: true}
            ).populate('savedBooks')
            return updateUser;
        }
    }
}

module.exports = resolvers;
var {ObjectID} = require('mongodb'); 

const {mongoose} =  require('./../server/db/mongoose');
const todo = require('./../server/models/todo').Todo;
const user = require('./../server/models/user').User;
// var id = '5c5987ce7d134818157f198';

// if(!ObjectID.isValid(id))
// {
// 	console.log('invald id');
// }

// todo.find({
// 	_id :id
// }).then((todos)=>{
// 	console.log('todos',todos);
// });

// todo.findOne({
// 	_id :id
// }).then((todos)=>{
// 	console.log('todos',todos);
// });

// todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log("id not found");
// 	}
// 	console.log('todo by id',todo);

// }).catch((e)=>{
// 	console.log(e);
// });

user.findById('5c56898bf1867d2684512e5a').then((user)=>{
	if(!user)
	{
		return console.log('unable to find user');
	}
	console.log(JSON.stringify(user,undefined,2));
},(e)=>{
	console.log(e);
});
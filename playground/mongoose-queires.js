const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5ebcf19dceb0309816d6c550';

if(!ObjectId.isValid(id)){
	console.log('id is not valid');
}
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });


Todo.findById(id).then((todo) => {
	console.log('Todo by id', todo);
});
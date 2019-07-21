const http = new EasyHTTP();


// GET users
http.get('http://localhost:3000/value')
  .then(data => console.log(data))
  .catch(err => console.log(err))

// User Data
// const data = {
//   name: 'John Doe',
//   username: 'johndoe',
//   email: 'jdoe@gmail.com'
// }

// Create User(POST Request)
// http.post('http://localhost:3000/value', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// Update User(PUT Request)
// http.put('http://localhost:3000/value/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// Delete data
// http.delete('http://localhost:3000/value/31', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
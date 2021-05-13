/* Write string preparation function, which fill template in with data from
specified object

Data object
user: {
  id: 20
  type_id: 'test'
}

Template: /api/items /% id % /%type_id%
Expected result: /api/items / 20 / test */

// const user = {
//   id: 20,
//   name: "John Dow",
//   role: "QA",
//   salary: 100
// };
// const apiTemplatesSet1 = [
//   "/api/items/%id%/%name%",
//   "/api/items/%id%/%role%",
//   "/api/items/%id%/%salary%"
// ];
// const apiPathes = apiTemplatesSet1.map(apiPathTemplate => {
//   return getApiPath(user, apiPathTemplate);
// });
// function getApiPath(obj, template) {
//   let result;
//   let str = template.split('/');
//   str.forEach((elem, i) => {
//     if (elem.includes('%id%')) {
//       str[i] = user.id;
//     } else if (elem.includes('%name%')) {
//       str[i] = user.name;
//     } else if (elem.includes('%role%')) {
//       str[i] = user.role;
//     } else if (elem.includes('%salary%')) {
//       str[i] = user.salary;
//     }
//   });
//   result = str.join('/');
//   return result;
// }
// console.log(JSON.stringify(apiPathes));

/* expected:
["/api/items/20/John%20Dow", "/api/items/20/QA", "/api/items/20/100"]
*/

class UserService {
  // var username
  // var password

  constructor(username, password) {
    this.username = username
    this.password = password
  }

  get username() {
    return UserService.username
  }

  get password() {
    throw 'You are not allowed to get password'
  }

  static authenticate_user() {
    let xhr = new XMLHttpRequest()
    xhr.open(
      'GET',
      'https://examples.com/api/user/authenticate?username=' + UserService.username + '&password=' + UserService.password,
      true
    )
    xhr.responseType = 'json'

    const result = false

    xhr.onload = function () {
      if (xhr.status !== '200') {
        result = xhr.response
      } else {
        result = true
      }
    }

    return result
  }
}

$('form #login').click(function () {
  var username = $('#username')
  var password = $('#password')

  var res = UserService(username, password).authenticate_user()

  if (res == true) {
    document.location.href = '/home'
  } else {
    alert(res.error)
  }
})
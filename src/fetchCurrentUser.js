import $ from 'jquery';

function parseJSON(user) {
  return {
    id: user.id,
    loggedIn: true,
  };
}

export default function fetchCurrentUser(callback) {
  return $.ajax({
    success: user => callback(parseJSON(user)),
    type: 'GET',
    url: 'https://qiita.com/api/v2/users/soarflat',
  });
}

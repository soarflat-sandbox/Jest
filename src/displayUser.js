import $ from 'jquery';
import fetchCurrentUser from './fetchCurrentUser';

export default function () {
  $('#button').click(() => {
    fetchCurrentUser(user => {
      const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');
      $('#username').text(user.fullName + ' - ' + loggedText);
    });
  });
}
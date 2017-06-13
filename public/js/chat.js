//initiating request
<<<<<<< HEAD
var socket = io();

function scrollToBottom () {
  // Selectors
  var messages = jQuery('#messages');
  var newMessage = messages.children('li:last-child')
  // Heights
  var clientHeight = messages.prop('clientHeight');
  var scrollTop = messages.prop('scrollTop');
  var scrollHeight = messages.prop('scrollHeight');
  var newMessageHeight = newMessage.innerHeight();
  var lastMessageHeight = newMessage.prev().innerHeight();

  if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
    messages.scrollTop(scrollHeight);
  }
}

socket.on('connect', function () {
  var params = jQuery.deparam(window.location.search);

  socket.emit('join', params, function (err) {
    if (err) {
      alert(err);
      window.location.href = '/';
    } else {
      console.log('No error');
    }
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('updateUserList', function (users) {

    var ol = jQuery('<ol></ol>');

    users.forEach(function (user) {
      ol.append(jQuery('<li></li>').text(user));
    });

    jQuery('#users').html(ol);
});


socket.on('newMessage', function (message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#message-template').html();
  var html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    createdAt: formattedTime
=======
  var socket = io();

function scrollToBottom () {
  // selectors
  var messages = jQuery('#messages');
  var newMessage = messages.children('li:last-child');
  //heights
  var clientHeight = messages.prop('clientHeight');
  var scrollTop =  messages.prop('scrollTop');
  var scrollHeight =  messages.prop('scrollHeight');
  var newMessageHeight = newMessage.innerHeight();
  var lastMessageHeight = newMessage.prev().innerHeight();

  if(clientHeight + scrollTop + newMessageHeight + lastMessageHeight >=scrollHeight) {
    messages.scrollTop(scrollHeight);
  }
};


  socket.on('connect',function () {
    console.log('Connected to server');
  });

  socket.on('disconnect',function () {
    console.log('Disconnected from server');
  });

socket.on('newMessage',function (message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#message-template').html();
  var html = Mustache.render(template,{
    text:message.text,
    from:message.from,
    createdAt:formattedTime
>>>>>>> e0605ca09805283fe5532774407c007f06158fa7
  });

  jQuery('#messages').append(html);
  scrollToBottom();
});

<<<<<<< HEAD

socket.on('newLocationMessage', function (message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#location-message-template').html();
  var html = Mustache.render(template, {
    from: message.from,
    url: message.url,
    createdAt: formattedTime
  });

=======
socket.on('newLocationMessage',function(message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#location-message-template').html();
  var html = Mustache.render(template,{
    from:message.from,
    url:message.url,
    createdAt:formattedTime
  });
>>>>>>> e0605ca09805283fe5532774407c007f06158fa7
  jQuery('#messages').append(html);
  scrollToBottom();
});

<<<<<<< HEAD
jQuery('#message-form').on('submit', function (e) {
=======


jQuery('#message-form').on('submit',function (e) {
>>>>>>> e0605ca09805283fe5532774407c007f06158fa7
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');

<<<<<<< HEAD
  socket.emit('createMessage', {
    from: 'User',
    text: messageTextbox.val()
  }, function () {
    messageTextbox.val('')
=======
  socket.emit('createMessage',{
    from:'User',
    text:messageTextbox.val()
  },function () {
    messageTextbox.val('');
>>>>>>> e0605ca09805283fe5532774407c007f06158fa7
  });
});

var locationButton = jQuery('#send-location');
<<<<<<< HEAD
locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function () {
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location.');
  });
=======

locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser');
  }

  locationButton.attr('disabled','disabled').text('Sending location...');


  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage',{
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    });
  },function () {
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location');
  });

>>>>>>> e0605ca09805283fe5532774407c007f06158fa7
});

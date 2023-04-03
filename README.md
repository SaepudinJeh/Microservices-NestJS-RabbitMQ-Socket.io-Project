<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<div style="display:flex; justify-content: center; align-items: center; margin-bottom:20px;">
  <p align="center" style="padding-right:20px;">
    <a href="https://www.rabbitmq.com/" target="blank"><img src="https://www.rabbitmq.com/img/logo-rabbitmq.svg" width="200" alt="Nest Logo" /></a>
  </p>
  <p align="center">
    <a href="http://socket.io/" target="blank"><img src="https://socket.io/images/logo.svg" width="90" alt="Nest Logo" /></a>
  </p>
</div>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

[circleci-image]: https://www.rabbitmq.com/img/logo-rabbitmq.svg
[circleci-url]: https://www.rabbitmq.com/img/logo-rabbitmq.svg

  <p align="center" style="margin-top: 10px;">
  Base project created with
  <a href="http://nestjs.com" target="_blank">Nest JS</a> framework for building and with a microservices architecture that is interconnected with <a href="https://socket.io/" target="_blank">Socket.io</a> and <a href="https://www.rabbitmq.com/" target="_blank">RabbitMQ</a>.
  </p>

## Description
<p style="padding:10px; font-size:16px;">Sample project message app with a microservices architecture that is interconnected with message service and notification service using RabbitMQ as a bridge between services, and socket.io to send message realtime, push send notification when created room and update room and main database used mongoDB</p>

## Running the app

```bash
$ sudo docker-compose up --build -V
```

## PORT application
```bash
# Specs API/documentation API with Swagger
$ http://localhost:3000/api/v1

# Url socker.io message
$ http://localhost:3000/message

# Url push notification
$ http://localhost:3001/notification

```

## Running client-message for testing in front-end
<p style="padding:10px; font-size:16px;">
  For sample testing of the application, you can open the client-message folder to run the Front End.
</p>

## License

Nest is [MIT licensed](LICENSE).

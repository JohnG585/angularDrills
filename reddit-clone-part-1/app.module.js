(function() {
  'use strict'

  angular.module('app', [])
    .component('reddit', {
      controller: controller,
      template: `<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand">Reddit Clone</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    </div>
  </div>
</nav>

<main class="container">

  <div class="pull-right">
    <p><a class="btn btn-info">New Post</a></p>
  </div>

  <ul class="nav nav-pills">
    <li role="presentation" class="active">
      <input type="search" class="form-control input-sm search-form" placeholder="Filter">
    </li>
    <div class="form-inline">
      <label for="sort">  Sort by </label>
      <select class="form-control" id="sort">
        <option>Some text</option>
        <option>Some text</option>
      </select>
    </div>
  </ul>

  <div class="row">
    <div class="col-md-8">

      <form ng-submit = "$ctrl.commentAdded()" >
        <div class="form-group">
          <label for="title">Title</label>
          <input id="title" class="form-control" ng-model="$ctrl.comment.title">
        </div>
        <div class="form-group">
          <label for="body">Body</label>
          <textarea id="body" class="form-control" ng-model="$ctrl.comment.body"></textarea>
        </div>
        <div class="form-group">
          <label for="author">Author</label>
          <input id="author" class="form-control" ng-model="$ctrl.comment.author">
        </div>
        <div class="form-group">
          <label for="image-url">Image URL</label>
          <input id="image-url" class="form-control" ng-model="$ctrl.comment.image">
        </div>
        <div class="form-group">
        <button type="submit" class="btn btn-primary">
          Create Post
        </button>
        </div>
      </form>

    </div>
  </div>

  <div class="row">
    <div class="col-md-12">

      <div class="well">
        <div class="media-left">
          <img class="media-object">
        </div>
        <div class="media-body" ng-repeat="comment in $ctrl.comments">
          <h4 class="media-heading">
            {{comment.title}}
            |
            <a><i class="glyphicon glyphicon-arrow-up"></i></a>
            <a><i class="glyphicon glyphicon-arrow-down"></i></a>
            10
          </h4>
          <div class="text-right" ng-model="$ctrl.author">
            {{comment.author}}
          </div>
          <img src='{{comment.image}}' width="50%">
          <p>
            {{comment.body}}
          </p>
          <div>
            Some time ago
            |
            <i class="glyphicon glyphicon-comment"></i>
            <a>
              Some comments
            </a>
          </div>
          <div class="row">
            <div class="col-md-offset-1">
              <hr>
              <p>
                Comment text
              </p>
              <form class="form-inline">
                <div class="form-group">
                  <input class="form-control">
                </div>
                <div class="form-group">
                  <input type="submit" class="btn btn-primary">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</main>`
  });

      function controller() {
        const vm = this
        vm.comment = {}
        vm.comments = []

        vm.$onInit = function() {
          vm.comments = [
            {title: 'Hey now', author:"Dale", body:"Testing", image:"./images/pexels-photo-69212.jpeg"}
          ]
        }
        vm.commentAdded = function() {
          vm.comment = {
            title: vm.comment.title,
            author: vm.comment.author,
            body: vm.comment.body,
            image: vm.comment.image
          }
          console.log('Hello')
          vm.comments.push(vm.comment)
          delete vm.comment
        }
      }

}())

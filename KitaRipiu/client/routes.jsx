import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {Layout, Welcome} from './app.jsx';

const publicRoute = FlowRouter.group({ name: 'public' });
const adminRoute  = FlowRouter.group({ name: 'admin', prefix: '/admin' });

publicRoute.route('/#login', {
  name: 'Login',
  action() {
    console.log('You are in the login page');
  }
});

publicRoute.route('/', {
  name: 'Home',
  action() {
    mount(Layout, {
        content: (<Welcome name="kidong"/>)
    });
  }
});

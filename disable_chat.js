'use strict';

const {hideCSS} = require('ep_plugin_helpers');

exports.eejsBlock_styles = hideCSS('.hide-for-mobile, #chaticon, #chatbox', {
  // Once chat is hidden the users panel takes over the full popup; without
  // these height rules the popup collapses to the (now-empty) chat region.
  extra: `
    #users { height:100%; }
    .popup#users.chatAndUsers > .popup-content { height:100%; }
    .popup#users.chatAndUsers { height:100%; }
  `,
});

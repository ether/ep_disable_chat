'use strict';

const {hideCSS} = require('ep_plugin_helpers');

// Hide the chat-only settings rows by their checkbox. A bare
// `.hide-for-mobile` selector also hid unrelated controls that share that
// class, such as the history-mode follow toggle, timer and speed select.
const chatSettings = [
  'options-disablechat',
  'options-stickychat',
  'options-chatandusers',
  'padsettings-options-disablechat',
  'padsettings-options-stickychat',
  'padsettings-options-chatandusers',
].map((id) => `p:has(> #${id})`);

exports.eejsBlock_styles = hideCSS(['#chaticon', '#chatbox', ...chatSettings].join(', '), {
  // Once chat is hidden the users panel takes over the full popup; without
  // these height rules the popup collapses to the (now-empty) chat region.
  extra: `
    #users { height:100%; }
    .popup#users.chatAndUsers > .popup-content { height:100%; }
    .popup#users.chatAndUsers { height:100%; }
  `,
});

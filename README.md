![Publish Status](https://github.com/ether/ep_disable_chat/workflows/Node.js%20Package/badge.svg) [![Backend Tests Status](https://github.com/ether/ep_disable_chat/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_disable_chat/actions/workflows/test-and-release.yml)

# Disable Chat Etherpad

Disables Chat and the Settings to show chat.

## Installation

Install from the Etherpad admin UI (**Admin → Manage Plugins**,
search for `ep_disable_chat` and click *Install*), or from the Etherpad
root directory:

```sh
pnpm run plugins install ep_disable_chat
```

> ⚠️ Don't run `npm i` / `npm install` yourself from the Etherpad
> source tree — Etherpad tracks installed plugins through its own
> plugin-manager, and hand-editing `package.json` can leave the
> server unable to start.

After installing, restart Etherpad.

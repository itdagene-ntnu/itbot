# Slack bot for itdagene

<img src="https://i.imgur.com/bBI5Idn.png"/>

### Install

Requires `git`, `nodejs` and `npm` to be installed

```sh
$ git clone git@github.com:itdagene-ntnu/itbot.git
$ cd itbot
$ npm install
```

Add all users, with associated roles and slack id to `lib/members.json`, using the format below. The scripts will then find the users based on roles.

```json
[
  {
    "name": "username",
    "slack": "slackid",
    "role": "role"
  }
]
```

### Environment variables

`HUBOT_SLACK_TOKEN` API token from slack hubot integration



### Deploy

```
$ HUBOT_SLACK_TOKEN=HUBOT_SLACK_TOKEN ./bin/hubot --adapter slack
```

### Scripts

All supported scripts are located in `scripts/`

- `@noen` located in `random.js`

- `@<role>` located in `roles.js`

- `itbot roles` located in `roles.js`





















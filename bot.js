// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// const { ActivityHandler } = require('botbuilder');

// class MyBot extends ActivityHandler {
//     constructor() {
//         super();
//         // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
//         this.onMessage(async turnContext => { console.log('this gets called'); await turnContext.sendActivity(`You said something interesting my dear!: '${ turnContext.activity.text }'`); });
//         this.onConversationUpdate(async turnContext => { console.log('this gets called (conversatgion update'); await turnContext.sendActivity('[conversationUpdate event detected]'); });
//     }
// }

// module.exports.MyBot = MyBot;
const { ActivityTypes } = require('botbuilder');

class MyBot {
    /**
     *
     * @param {TurnContext} on turn context object.
     */
    async onTurn(turnContext) {
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        if (turnContext.activity.type === ActivityTypes.Message) {
            await turnContext.sendActivity(`You said '${ turnContext.activity.text }'`);
        } else {
            await turnContext.sendActivity(`[${ turnContext.activity.type } event detected]`);
        }
    }
}

module.exports.MyBot = MyBot;

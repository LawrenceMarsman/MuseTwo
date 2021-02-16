## Goal
It's about time for me to build an app from scratch again, a full stack app.

I'm going to take advantage of this project to learn using the following stack

## Stack
-Material-UI
-React
-TypeScript
-Wasm (Go)
-It should be a PWA, and mobile friendly
-Go
-SQL (use generic recordkeepers)
-Microservices architecture; and modular architecture
-Rest RPC (use new design pattern Pieter mentioned)
-AWS serverless (Lambda containers) - Can also host container on raspberri PI
-AuthO
-BONUS: Try using some sort of caching software like memcached or thing or SQS software ;
-BUNUS: Try GraphQL
-BUNUS: Try cool graphics with webGL or go wasm
-BUNUS: Try go generics 


## App user stories - in order 

MVP1) MUSE Core: 
-- Manage week goals and points system
-- Track week history
-- Track Projects

-- Make week block
-- Add tasks and points estimation (point estimation - wasm -time * difficulty * importance)
-- Ability to add Recent/ Popular tasks + new tasks to each week
-- Ability to add more points with description to week block 
-- Do time tracking in the back ground 


===========
LATER

1) Manage week goals and points system
   2) Track Projects 
2) Get notifications 
3) Spaced Rep
4) Trello API / Confluence API / Google drive API
5) Manage sensitive info - do it in such a way that not all people have access to this
Implement heat map 



======

- Gym stats also in app
- Points Estimator!!NB!! - {
  100 points = +-about 1 weeks work (not just time wise but also difficulty wise)
  Point = time * difficulty * importance
  Free time est. (2 * 6)   = 12 hours
  Difficulty between 1 - 2: 1 chilled, 1.5 moderate, 2 very difficult
  importance between 1- 2: 1 chilled, 1.5 moderate, 2 very important
  If difficulty = 1 and 1 hour work = 100/12 = +-8
  If difficulty = 2 and 1 hour work = 8 * 2 = +-16
  If difficulty = 2 and 2 hour work = 8 * 4 = +-32


But will get bunesses for more work etc and recurring tasks
so end of day will probably be around +-120-140 target

}
- Connect to trello API/ google calendar
- Use free expressJS deploy service


Recurring item types and  TargetPointsFromTrello contributes to goal points target.


mongo collections
weekblocks: []WeekBlock - Items imbedded
itemChoices: []Item

Functions:
- WeekBlock CRUD - minus Delete
- ItemChoices CRUD
- Create and Copy Items from previous week  - only copies items
- ExportExcel - Upload to Google Drive

WeekBlock {
Notes: string
Items: []Items ==> target goal
WeekStartDate: date
ExtraPointsFromTrello: TrelloPoint[] ==> target goal
}

Item {
description: number
notes: string
type: Recurring | Bonus | Penalty
numberOfTimes: number
pointsPerTime: number
category: Body | Mind | Mood | Career | ShouldDo
priorityLabel: string
importanceScore: number
suggestedPoints: number
DifficultyScore: number
TimeEst: number
importanceScore: number
}

TrelloPoint: {
cardDiscription: string
points: number
category: Body | Mind | Mood | Career | ShouldDo
done: boolean
}

----
Example {
WeekBlock {
Notes: "want to focus on routine, complete prod App, get career sruff starting again, cut, mauritius"
WeekStartDate: 16 Nov 2020
ExtraPointsFromTrello: 0
ExtraPointsFromTrello: [{Mauritios, 20, ShouldDo, false}]
Items: [
description: number
notes: string
type: Recurring | Bonus | Penalty
numberOfTimes: number
pointsPerTime: number
category: Body | Mind | Mood | Career | ShouldDo
priorityLabel: string
{
No youtube during work time
Do 50min, 6 hours work, 1 bonus personal work hour per day
Recurring
5
5
Career
Important
};
Gym
Focus on Cutting
Recurring
5
6
Body
Important
}
Complete Prod App
-
Bonus
20
1
Body
Important
}
....
]



=======
mutation updateDefaultItem($id: String!, $item: NewDefaultItemInput) {
updateDefaultItem(id: $id, item: $item) {
description
notes
type
numberOfTimes
pointsPerTime
category
priorityLabel
importanceScore
suggestedPoints
difficultyScore
timeEst
}
}

{
"item": {
"description": "kwaai222",
"notes": "kwaai",
"type": "kwaai",
"numberOfTimes": "kwaai",
"pointsPerTime": "kwaai",
"category": "kwaai",
"priorityLabel": "kwaai",
"importanceScore": "kwaai",
"suggestedPoints": "kwaai",
"difficultyScore": "kwaai",
"timeEst": "kwaai"
},
"id": "e08a0599-defc-4d08-b067-bb10de63dd6d"
}

mutation createWeekBlock($weekBlock: NewWeekBlockInput) {
createDefaultItem(weekBlock: $weekBlock) {
description
notes
type
numberOfTimes
pointsPerTime
category
priorityLabel
importanceScore
suggestedPoints
difficultyScore
timeEst
}
}
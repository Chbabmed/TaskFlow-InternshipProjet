export let taskModeData = [
    {
        "TaskID": 1,
        "TaskName": "Parent Task 1",
        "Status" : "live",
        "StartDate": new Date("02/27/2024"),
        "EndDate": new Date("03/03/2024"),
        "Progress": "40",
        "isManual": true,
        "Children": [
            { "TaskID": 2, "TaskName": "Child Task 1", "StartDate": new Date("02/27/2024"), "EndDate": new Date("03/03/2024"), "Progress": "40" },
            { "TaskID": 3, "TaskName": "Child Task 2", "StartDate": new Date("02/26/2024"), "EndDate": new Date("03/03/2024"), "Progress": "40", "isManual": true },
            { "TaskID": 4, "TaskName": "Child Task 3", "StartDate": new Date("02/27/2024"), "EndDate": new Date("03/03/2024"), "Duration": 5, "Progress": "40", }
        ]
    },
    {
        "TaskID": 5,
        "TaskName": "Parent Task 2",
        "Status" : "non live",
        "StartDate": new Date("03/05/2024"),
        "EndDate": new Date("03/09/2024"),
        "Progress": "40",
        "isManual": true,
        "Children": [
            { "TaskID": 6, "TaskName": "Child Task 1", "StartDate": new Date("03/06/2024"), "EndDate": new Date("03/09/2024"), "Progress": "40" },
            { "TaskID": 7, "TaskName": "Child Task 2", "StartDate": new Date("03/06/2024"), "EndDate": new Date("03/09/2024"), "Progress": "40", },
            { "TaskID": 8, "TaskName": "Child Task 3", "StartDate": new Date("02/28/2024"), "EndDate": new Date("03/05/2024"), "Progress": "40", "isManual": true },
            { "TaskID": 9, "TaskName": "Child Task 4", "StartDate": new Date("03/04/2024"), "EndDate": new Date("03/09/2024"), "Progress": "40", "isManual": true }
        ]
    },
    {
        "TaskID": 10,
        "TaskName": "Parent Task 3",
        "Status" : "closed",
        "StartDate": new Date("03/13/2024"),
        "EndDate": new Date("03/17/2024"),
        "Progress": "40",
        "Children": [
            { "TaskID": 11, "TaskName": "Child Task 1", "StartDate": new Date("03/13/2024"), "EndDate": new Date("03/17/2024"), "Progress": "40" },
            { "TaskID": 12, "TaskName": "Child Task 2", "StartDate": new Date("03/13/2024"), "EndDate": new Date("03/17/2024"), "Progress": "40", },
            { "TaskID": 13, "TaskName": "Child Task 3", "StartDate": new Date("03/13/2024"), "EndDate": new Date("03/17/2024"), "Progress": "40", },
            { "TaskID": 14, "TaskName": "Child Task 4", "StartDate": new Date("03/12/2024"), "EndDate": new Date("03/17/2024"), "Progress": "40", "isManual": true },
            { "TaskID": 15, "TaskName": "Child Task 5", "StartDate": new Date("03/13/2024"), "EndDate": new Date("03/17/2024"), "Progress": "40", }
        ]
    }
];
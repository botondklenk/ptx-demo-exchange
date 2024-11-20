import { Request, Response } from "express";


export const getData = (req: Request, res: Response) => {
  const data = DATA;
  console.log('getResponse', data);
  res.json(data);
};

export const postData = (req: Request, res: Response) => {
  console.log('postBody', req.body);
  res.json({ status: "success", received: req.body });
};

const DATA = [
  {
      "statement": {
          "actor": {
              "account": {
                  "name": "john"
              }
          },
          "verb": {
              "id": "https://w3id.org/xapi/netc/verbs/downloaded"
          },
          "object": {
              "id": "http://gaiax.org/xapi/activities/ba297687-b1aa-4477-9efd-a782c8fdb90a",
              "definition": {
                  "type": "http://activitystrea.ms/file",
                  "name": {
                      "en": "Test Course"
                  },
                  "extensions": {
                      "https://w3id.org/xapi/acrossx/extensions/type": "application/pdf"
                  }
              }
          },
          "context": {
              "contextActivities": {
                  "category": [
                      {
                          "id": "https://w3id.org/xapi/lms",
                          "definition": {
                              "type": "http://adlnet.gov/expapi/activities/profile"
                          }
                      }
                  ]
              },
              "extensions": {
                  "https://w3id.org/xapi/cmi5/context/extensions/sessionid": "53ff781a-3c52-11ee-be56-0242ac120002"
              }
          },
          "timestamp": "2016-06-09T15:34:26.887Z"
      }
  },
  {
      "statement": {
          "actor": {
              "account": {
                  "name": "john",
                  "homePage": "http://gaiax.org"
              }
          },
          "verb": {
              "id": "https://w3id.org/xapi/netc/verbs/downloaded"
          },
          "object": {
              "id": "http://gaiax.org/xapi/activities/ba297687-b1aa-4477-9efd-a782c8fdb90a",
              "definition": {
                  "type": "http://activitystrea.ms/file",
                  "name": {
                      "en": "Test Course"
                  },
                  "extensions": {
                      "https://w3id.org/xapi/acrossx/extensions/type": "application/pdf"
                  }
              }
          },
          "context": {
              "contextActivities": {
                  "category": [
                      {
                          "id": "https://w3id.org/xapi/lms",
                          "definition": {
                              "type": "http://adlnet.gov/expapi/activities/profile"
                          }
                      }
                  ]
              },
              "extensions": {
                  "https://w3id.org/xapi/cmi5/context/extensions/sessionid": "53ff781a-3c52-11ee-be56-0242ac120002"
              }
          },
          "timestamp": "2016-06-09T15:34:25.887Z"
      }
  }
]
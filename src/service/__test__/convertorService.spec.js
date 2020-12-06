import * as ConvertorService from '../convertorService';

describe('ConvertorService', () => {
    it('formatInput', () => {
        // given
        const input = {
            "0":[
               {
                  "id":10,
                  "title":"House",
                  "level":0,
                  "children":[
                     
                  ],
                  "parent_id":null
               }
            ],
            "1":[
               {
                  "id":12,
                  "title":"Red Roof",
                  "level":1,
                  "children":[
                     
                  ],
                  "parent_id":10
               },
               {
                  "id":18,
                  "title":"Blue Roof",
                  "level":1,
                  "children":[
                     
                  ],
                  "parent_id":10
               },
               {
                  "id":13,
                  "title":"Wall",
                  "level":1,
                  "children":[
                     
                  ],
                  "parent_id":10
               }
            ],
            "2":[
               {
                  "id":17,
                  "title":"Blue Window",
                  "level":2,
                  "children":[
                     
                  ],
                  "parent_id":12
               },
               {
                  "id":16,
                  "title":"Door",
                  "level":2,
                  "children":[
                     
                  ],
                  "parent_id":13
               },
               {
                  "id":15,
                  "title":"Red Window",
                  "level":2,
                  "children":[
                     
                  ],
                  "parent_id":12
               }
            ]
         };

        const expectedResult = [{ id: 10, title: 'House', level: 0, children: [], parent_id: null }, 
                                { id: 12, title: 'Red Roof', level: 1, children: [], parent_id: 10 },
                                { id: 18, title: 'Blue Roof', level: 1, children: [], parent_id: 10 },
                                { id: 13, title: 'Wall', level: 1, children: [], parent_id: 10 },
                                { id: 17, title: 'Blue Window', level: 2, children: [], parent_id: 12 },
                                { id: 16, title: 'Door', level: 2, children: [], parent_id: 13 },
                                { id: 15, title: 'Red Window', level: 2, children: [], parent_id: 12 }];
        // when
        const actualResult = ConvertorService.formatInput(input);
        // then
        expect(actualResult).toStrictEqual(expectedResult);
    }),

    it('traverseArray', () => {
        // given
        const inputArray = [{ id: 10, title: 'House', level: 0, children: [], parent_id: null }];
        const inputItem = { id: 12, title: 'Red Roof', level: 1, children: [], parent_id: 10 };
        const expectedResult = [{ id: 10, title: 'House', level: 0, children: [{ id: 12, title: 'Red Roof', level: 1, children: [], parent_id: 10 }], parent_id: null }]
        // when
        const actualResult = ConvertorService.traverseArray(inputArray, inputItem);
        // then
        expect(actualResult).toStrictEqual(expectedResult)
    })

    it('traverseArray in children ch', () => {
        // given
        const inputArray = [{ id: 10, title: 'House', level: 0, children: [{ id: 12, title: 'Red Roof', level: 1, children: [], parent_id: 10 }], parent_id: null }]
        const inputItem = { id: 13, title: 'Door', level: 2, children: [], parent_id: 12 };
        const expectedResult = [{ id: 10, title: 'House', level: 0, children: [{ id: 12, title: 'Red Roof', level: 1, children: [{ id: 13, title: 'Door', level: 2, children: [], parent_id: 12 }], parent_id: 10 }], parent_id: null }]
        // when
        const actualResult = ConvertorService.traverseArray(inputArray, inputItem);
        // then
        expect(actualResult).toStrictEqual(expectedResult)
    })

    it('processJsonData', () => {
        // given
        const inputArray = [{ id: 10, title: 'House', level: 0, children: [], parent_id: null }, 
                            { id: 12, title: 'Red Roof', level: 1, children: [], parent_id: 10 },
                            { id: 18, title: 'Blue Roof', level: 1, children: [], parent_id: 10 },
                            { id: 13, title: 'Wall', level: 1, children: [], parent_id: 10 },
                            { id: 17, title: 'Blue Window', level: 2, children: [], parent_id: 12 },
                            { id: 16, title: 'Door', level: 2, children: [], parent_id: 13 },
                            { id: 15, title: 'Red Window', level: 2, children: [], parent_id: 12 }];

        const expectedResult = [
            {
                "id": 10,
                "title": "House",
                "level": 0,
                "children": [
                    {
                        "id": 12,
                        "title": "Red Roof",
                        "level": 1,
                        "children": [
                            {
                                "id": 17,
                                "title": "Blue Window",
                                "level": 2,
                                "children": [],
                                "parent_id": 12
                            },
                            {
                                "id": 15,
                                "title": "Red Window",
                                "level": 2,
                                "children": [],
                                "parent_id": 12
                            }
                        ],
                        "parent_id": 10
                    },
                    {
                        "id": 18,
                        "title": "Blue Roof",
                        "level": 1,
                        "children": [],
                        "parent_id": 10
                    },
                    {
                        "id": 13,
                        "title": "Wall",
                        "level": 1,
                        "children": [
                            {
                                "id": 16,
                                "title": "Door",
                                "level": 2,
                                "children": [],
                                "parent_id": 13
                            }
                        ],
                        "parent_id": 10
                    }
                ],
                "parent_id": null
            }
        ]
        // when
        const actualResult = ConvertorService.processJsonData(inputArray)
        // then
        expect(actualResult).toStrictEqual(expectedResult);
    }),
    it('convertDataToParentChildern', () => {
        // given
        const input = {
            "0":[
               {
                  "id":10,
                  "title":"House",
                  "level":0,
                  "children":[
                     
                  ],
                  "parent_id":null
               }
            ],
            "1":[
               {
                  "id":12,
                  "title":"Red Roof",
                  "level":1,
                  "children":[
                     
                  ],
                  "parent_id":10
               },
               {
                  "id":18,
                  "title":"Blue Roof",
                  "level":1,
                  "children":[
                     
                  ],
                  "parent_id":10
               },
               {
                  "id":13,
                  "title":"Wall",
                  "level":1,
                  "children":[
                     
                  ],
                  "parent_id":10
               }
            ],
            "2":[
               {
                  "id":17,
                  "title":"Blue Window",
                  "level":2,
                  "children":[
                     
                  ],
                  "parent_id":12
               },
               {
                  "id":16,
                  "title":"Door",
                  "level":2,
                  "children":[
                     
                  ],
                  "parent_id":13
               },
               {
                  "id":15,
                  "title":"Red Window",
                  "level":2,
                  "children":[
                     
                  ],
                  "parent_id":12
               }
            ]
         };

         const expectedResult = [
            {
                "id": 10,
                "title": "House",
                "level": 0,
                "children": [
                    {
                        "id": 12,
                        "title": "Red Roof",
                        "level": 1,
                        "children": [
                            {
                                "id": 17,
                                "title": "Blue Window",
                                "level": 2,
                                "children": [],
                                "parent_id": 12
                            },
                            {
                                "id": 15,
                                "title": "Red Window",
                                "level": 2,
                                "children": [],
                                "parent_id": 12
                            }
                        ],
                        "parent_id": 10
                    },
                    {
                        "id": 18,
                        "title": "Blue Roof",
                        "level": 1,
                        "children": [],
                        "parent_id": 10
                    },
                    {
                        "id": 13,
                        "title": "Wall",
                        "level": 1,
                        "children": [
                            {
                                "id": 16,
                                "title": "Door",
                                "level": 2,
                                "children": [],
                                "parent_id": 13
                            }
                        ],
                        "parent_id": 10
                    }
                ],
                "parent_id": null
            }
        ]
        // when
        const actualResult = ConvertorService.convertDataToParentChildern(input)
        // then
        expect(actualResult).toStrictEqual(expectedResult);
    })
})
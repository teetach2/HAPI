## Pomelo Test

To start the application
```
npm install
npm start
```
The application will start at port 3000
<br />
<br />
To run the unit test
```
npm run test
```
After you run the application successfully, you can go to the following url to see the API documentation.
```
http://localhost:3000/documentation
```
For the /ex1 api, the example data is 
```
{
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
}
```

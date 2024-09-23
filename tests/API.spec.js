import { test, expect, request} from '@playwright/test';
import exp from 'constants';
import { stat } from 'fs';
import { register } from 'module';
test('check API health', async ({request})=>{
    const response = await request.get('https://practice.expandtesting.com/notes/api/health-check');
    expect(response.status()).toBe(200);
    const responseBody= await response.json();
    expect(responseBody).toEqual({
        "success": true,
        "status": 200,
        "message": "Successful Request"

    })


})
test ('create new note', async ({request})=>{
    const response = await request.post('/create',{
        data: {
            title: 'happiness',
            description: 'I am happy',
            category: 'Home'

        }
    });
    expect(response.status()).toBe(201);
    const responseBody2= await response.json();
    expect(responseBody2.title).toBe('happiness');
    expect(responseBody2.description).toBe('I am happy');
    expect(responseBody2.category).toBe('Home');
    
})
test('get all notes', async({request})=>{
    const response = await request.get('https://practice.expandtesting.com/notes/api/notes');
    expect(response.status()).toBe(200);
    const responseBody= await response.json();
    expect(responseBody).toEqual({
        "success": true,
        "status": 200,
        "message": "Noted Successfully retrieved",
        "data": [
    [
      {
        "id": "642a09c16a35ca02115ea354",
        "title": "Work note title",
        "description": "Work note description",
        "category": "Work",
        "completed": false,
        "created_at": "2023-04-02T23:03:29.259Z",
        "updated_at": "2023-04-03T08:11:41.518Z",
        "user_id": "64189a74314e9f0218a5213c"
      },
      {
        "id": "64298e2b6747aa02118d3c23",
        "title": "Home note title",
        "description": "Home note description",
        "category": "Home",
        "completed": true,
        "created_at": "2023-04-02T14:16:11.153Z",
        "updated_at": "2023-04-03T00:52:42.962Z",
        "user_id": "64189a74314e9f0218a5213c"
      },
      {
        "id": "642a08826a35ca02115ea350",
        "title": "Personal note title",
        "description": "Personal note description",
        "category": "Personal",
        "completed": false,
        "created_at": "2023-04-02T22:58:10.263Z",
        "updated_at": "2023-04-02T22:58:10.263Z",
        "user_id": "64189a74314e9f0218a5213c"
      }
    ]
  ]
}


    )




})
test('get all notes', async({request})=>{
    const response = await request.get('https://practice.expandtesting.com/notes/api/notes/642a08826a35ca02115ea350');
    expect(response.status()).toBe(200);
    const responseBody= await response.json();
    expect(responseBody).toEqual({
        
            "id": "642a08826a35ca02115ea350",
            "title": "Personal note title",
            "description": "Personal note description",
            "category": "Personal",
            "completed": false,
            "created_at": "2023-04-02T22:58:10.263Z",
            "updated_at": "2023-04-02T22:58:10.263Z",
            "user_id": "64189a74314e9f0218a5213c"
          


})
})

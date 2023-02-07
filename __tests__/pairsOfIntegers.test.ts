import app from "../src";
import request from "supertest";
import { expect, test } from "@jest/globals"

test('Successful request 1', async () => {
    const response = await request(app).get('/').send({array: [10, -5, -4, -11, 8, 10, 5], sum: 15 });
    expect(response.status).toEqual(200);
    
    expect(response.body).toStrictEqual({
        success: true,
        payload: [ [ 10, 5 ], [ 10, 5 ] ]
    })
})

test('Successful request 2', async () => {
    const response = await request(app).get('/').send({array: [13, 7, -4, -11, 18, 2, 5], sum: 20 });
    expect(response.status).toEqual(200);

    expect(response.body).toStrictEqual({
        success: true,
        payload: [ [ 13, 7 ], [ 18, 2 ] ]
    })
})

test('Bad request 1 - incorrect array input', async () => {
    const response = await request(app).get('/').send({array: ["hello", 7, -4, -11, 18, 2, 5], sum: 20 });
    expect(response.status).toEqual(400);

    expect(response.body).toStrictEqual({
        success: false,
        payload: "Error: The first argument must be an array that consists of more than one integer."
    })
})

test('Bad request 1 - incorrect array input', async () => {
    const response = await request(app).get('/').send({array: [10, 7, -4, -11, 18, 2, 5], sum: "hello" });
    expect(response.status).toEqual(400);

    expect(response.body).toStrictEqual({
        success: false,
        payload: "Error: The second argument must be an integer."
    })
})
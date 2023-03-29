// Import supertest for HTTP requests
const request = require("supertest");
// note that we take advantage of @jest/globals (describe, it, expect, etc.)
// API for expect can be found here: https://jestjs.io/docs/expect

const apiUrl = "http://localhost:3000";

describe("Endpoint tests", () => {
  // Make sure the server is in default state when testing
  beforeEach(async () => {
    await request(apiUrl).get("/api/v1/reset");
  });

  //###########################
  //Write your tests below here
  //###########################

  // GET request for all tunes
  test("GET /tunes", async () => {
    const res = await request(apiUrl).get("/api/v1/tunes");
    expect(res).toHaveProperty("statusCode", 200);
  });

  // GET request for specific tune 
  test("GET /genres/:genreId/tunes/:tuneId", async () => {
    const res = await request(apiUrl)
      .get("/api/v1/genres/:genreId/tunes/:tuneId")
      .send({"genreId": "0", 'tuneId': "1"});
      expect(res).toHaveProperty("statusCode", 200);
      
    
    //expect(res).toHaveProperty("statusCode", 200);
  });
});

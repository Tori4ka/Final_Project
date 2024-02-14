import { expect } from 'chai';
import { describe, it, before } from 'mocha';
import axios from 'axios';


const baseUrl = 'https://petstore.swagger.io/v2';

describe('Petstore API Tests', () => {
  
  let userCredentials;
  let createdPetId;
  
    before(() => {
      userCredentials = {
        username: 'user',
        password: 'password',
      };
    });
  
    it('Verify that allows creating a User', async () => {
      const response = await axios.post(`${baseUrl}/user`, {
        ...userCredentials,
        email: 'testuser@email.com',
      });
      expect(response.status).to.equal(200);
    });
  
    it('Verify that allows login as a User', async () => {
      const response = await axios.get(`${baseUrl}/user/login`, {
        params: userCredentials,
      });
      expect(response.status).to.equal(200);
    });
  
    it('Verify that allows creating the list of Users', async () => {
      const userArray = [
        {
          username: 'user1',
          password: 'password1',
        },
        {
          username: 'user2',
          password: 'password2',
        },
      ];
  
      const response = await axios.post(`${baseUrl}/user/createWithArray`, userArray);
      expect(response.status).to.equal(200);
    });
  
    it('Verify that allows Log out User', async () => {
      const response = await axios.get(`${baseUrl}/user/logout`, {
        auth: userCredentials,
      });
      expect(response.status).to.equal(200);
    });
  
    it('Verify that allows adding a new Pet', async () => {
      const petData = {
        id: 0,
        name: 'Fido',
        category: {
          id: 1,
          name: 'Dogs',
        },
        photoUrls: ['url'],
        tags: [
          {
            id: 0,
            name: 'string',
          },
        ],
        status: 'available',
      };
  
      const response = await axios.post(`${baseUrl}/pet`, petData);
      expect(response.status).to.equal(200);
      createdPetId = response.data.id;
    });
  
    it('Verify that allows updating Pet’s image', async () => {
      const newImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXU-y5eqvxHM9Jn8Prs6YcL7oyLqTc0YYoBg&usqp=CAU';
      const formData = new FormData();
      formData.append('file', newImageUrl);
      formData.append('additionalMetadata', 'metadata');
  
      const response = await axios.post(`${baseUrl}/pet/${createdPetId}/uploadImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      expect(response.status).to.equal(200);
    });
  
    it('Verify that allows updating Pet’s name and status', async () => {
      const updatedPetData = {
        name: 'Updated Fido',
        status: 'sold',
      };
  
      const response = await axios.put(`${baseUrl}/pet`, {
        ...updatedPetData,
        id: createdPetId,
      });
      expect(response.status).to.equal(200);
    });
  
    it('Verify that allows deleting Pet', async () => {
      const response = await axios.delete(`${baseUrl}/pet/${createdPetId}`);
      expect(response.status).to.equal(200);
    });
  
});

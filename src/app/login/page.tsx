'use client'
import React, { useState, useEffect } from 'react';


export default function Login() {

  const [postinfos, setPostinfos] = useState([
    {
      'id': 0,
      'user': "janipang",
      'privacy': "friends",
      'status': "I forgot to drink coke in today's class"
    },
    {
      'id': 1,
      'user': "janipang",
      'privacy': "friends",
      'status': "I forgot to drink coke in today's class"
    },
    {
      'id': 2,
      'user': "janipang",
      'privacy': "friends",
      'status': "I forgot to drink coke in today's class"
    },
  ]);

  const createPost = async () => {
    const payload = {
      'id': id,
      'user': user,
      'privacy': privacy,
      'status': status,
    };
    setID(id + 1);

    try {
      const response = await fetch('http://localhost:8080/newpost/', {
        method: 'POST',
        mode: "no-cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response == null) {
        throw new Error('missed response');
      }
      else if (response.ok) {
        console.log('response OK');
      } else {
        console.log('Response : ', response);
        throw new Error('response not OK');
      }
    } catch (error) {
      console.error('POST failed:', error);
    }
  };

  const getMessage = async () => {

    try {
      const response = await fetch('http://localhost:8080/newpost');

      if (response.ok) {
        console.log('received successfully');
      } else {
        throw new Error('Failed to received');
      }
      console.log(response.text());
    } catch (error) {
      console.error('Error receiving message:', error);
    }
  };

  const [id, setID] = useState(3);
  const [user, setUser] = useState('janipang');
  const [privacy, setPrivacy] = useState('');
  const [status, setStatus] = useState('');

  return (
    <div className="w-3/5 mx-auto border-2 border-salmon">
      <section id="profile" className="flex flex-col justify-center items-center">
        <div className="w-[15vw] h-[15vw]">
          <img src="https://github.com/janipang/mypicture/assets/93817826/c20f041e-2437-421d-85f4-447a80ea6c18"
            className="w-full h-full object-cover rounded-full border-4 border-black" />
        </div>
        <div>
          <h2>janipang</h2>
          <p>to day I don't feel like doing anything</p>
        </div>
      </section>

      <section id="createPost" className="m-6 p-4 bg-gray-200 rounded-2xl shadow-md">
        <form onSubmit={createPost}
          className="flex flex-col items-center">
          <input type="text" name="newstatus"
            placeholder="How do you feel today"
            onChange={e => setStatus(e.target.value)}
            className="block w-full p-6 m-2 rounded-lg"></input>

          <div className="w-full flex flex-row justify-center">
            <input type="radio" name="privacy" value="private"
              checked={privacy === 'private'}
              onChange={(event) => { setPrivacy(event.target.value) }}>
            </input>
            <label htmlFor="private">private</label>

            <input type="radio" name="privacy" value="friends"
              checked={privacy === 'friends'}
              onChange={(event) => { setPrivacy(event.target.value) }}>
            </input>
            <label htmlFor="friends">friends</label>

            <input type="radio" name="privacy" value="public"
              checked={privacy === 'public'}
              onChange={(event) => { setPrivacy(event.target.value) }}>
            </input>
            <label htmlFor="public">public</label>
          </div>

          <button type="submit" value="Submit"
            className="block bg-navy p-2 m-2 rounded-lg text-white">Post</button>
        </form>
      </section>

      {postinfos.map((postinfo) => (
        <section key={postinfo.id}
          className="m-6 p-6 bg-gray-200 rounded-2xl shadow-md">
          <h3>{postinfo.user}</h3>
          <p>{postinfo.status}</p>
        </section>
      ))}

    </div>
  )
}
